<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\subCategorias;
use App\Models\categorias;
use App\Models\User;

class SubCategoriasController extends Controller
{
    public function showSubCategorias(Request $request)
    {
        $subcategorias = subCategorias::where('idCategoria', '=', $request -> idCategoria)->get();
        return response()->json($subcategorias);
    }

    //mostrar subcategorias e categorias
    public function showAll(Request $request){
        $response['subcategorias'] = subCategorias::where('idCategoria', '=', $request -> idCategoria)->get();
        $response['categorias'] = Categorias::where('idUser','=', 1 /*posteriormente mudar para Auth()->id()*/)->get();

        return response()->json($response);
    }

    public function addSubCategoria(Request $request) {

        
         //check if categoria already exists
        $subcategoria = subCategorias::where('nomeSubCat', $request['nomeSubCategoria'])->first();
        if($subcategoria){
            $response['status'] = 1;
            $response['message'] = 'Categoria já existe';
            $response['code'] = 409;
        }else{ 
            //adds categoria to database
        $subcategoria = subCategorias::create([
            'nomeSubCat'  => $request -> nomeSubCategoria,
            'idCategoria' => $request -> idCategoria
        ]);
        $response['status'] = 1;
        $response['message'] = 'Categoria criada com sucesso';
        $response['code'] = 200;
    }
        
        return response()->json($response);
    }


    public function deleteSubCategoria(Request $request){
        //check the id of the user and choose only from the users categories
        if( $request->idSubCategoria != 0){ //o user vai selecionar o id a partir de um spinner que apresenta os nomes
          // Delete
          subCategorias::where('idSubCat', $request->idSubCategoria)->delete();

            $response['status'] = 1;
            $response['message'] = 'Sub Categoria apagada com sucesso';
            $response['code'] = 200;
          
        }
        return response()->json($response);
    }


    //user escolhe a categoria a alterar e insere o novo nome~
    //talvez tenha de ser mudado o idCategoria para o URL se for necessário apresentar uma pagina de formulario para inserir o novo nome
    public function updateSubCategoria( Request $request ){
        //check the id of the user and choose only from the users categories
        if($request->idSubCategoria != 0){
          // update
          subCategorias::where('idSubCat', $request->idSubCategoria)->update(['nomeSubCat' => $request->novoNome]);

            $response['status'] = 1;
            $response['message'] = 'Sub Categoria atualizada com sucesso';
            $response['code'] = 200;
          
        }
        return response()->json($response);
    }
}
