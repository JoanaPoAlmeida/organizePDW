<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\categorias;
use App\Models\User;

class CategoriasController extends Controller
{
    public function addCategoria(Request $request) {

        $user = User::where('idUser', '=', 1 /*posteriormente mudar para Auth()->id()*/)->get();
        
         //check if categoria already exists
        $categoria = categorias::where('nomeCategoria', $request['nomeCategoria'])->first();
        if($categoria){
            $response['status'] = 1;
            $response['message'] = 'Categoria já existe';
            $response['code'] = 409;
        }else{ 
            //adds categoria to database
        $categoria = categorias::create([
            'nomeCategoria'      => $request -> nomeCategoria,
            'idUser' => 1 /*posteriormente mudar para Auth()->id()*/
        ]);
        $response['status'] = 1;
        $response['message'] = 'Categoria criada com sucesso';
        $response['code'] = 200;
        $response['user'] = $user;
    }
        
        return response()->json($response);
    }


    public function deleteCategoria(Request $request){
        //check the id of the user and choose only from the users categories
        if($request->idCategoria != 0){ //o user vai selecionar o id a partir de um spinner que apresenta os nomes
          // Delete
          categorias::where('idCategoria', $request->idCategoria)->delete();

            $response['status'] = 1;
            $response['message'] = 'Categoria apagada com sucesso';
            $response['code'] = 200;
          
        }
        return response()->json($response);
    }


    //user escolhe a categoria a alterar e insere o novo nome~
    //talvez tenha de ser mudado o idCategoria para o URL se for necessário apresentar uma pagina de formulario para inserir o novo nome
    public function updateCategoria( Request $request ){
        //check the id of the user and choose only from the users categories
        if($request->idCategoria != 0){
          // update
          categorias::where('idCategoria', $request->idCategoria)->update(['nomeCategoria' => $request->novoNome]);

            $response['status'] = 1;
            $response['message'] = 'Categoria atualizada com sucesso';
            $response['code'] = 200;
          
        }
        return response()->json($response);
    }

    public function showCategorias(){
        
        $response = Categorias::where('idUser','=', 1 /*posteriormente mudar para Auth()->id()*/)->get();
        return response()->json($response);
    }

    



}
