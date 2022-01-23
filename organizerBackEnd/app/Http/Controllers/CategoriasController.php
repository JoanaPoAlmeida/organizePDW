<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\categorias;
use App\Models\User;

class CategoriasController extends Controller
{
    protected $currentUser;

    public function __construct(Guard $auth)
    {
        $this->currentUser = $auth->user();
    }
    
    public function addCategoria(Request $request) {

        $request->user();

        $id = Auth::user();

        $user = User::where('idUser', '=', auth()->user())->get();
        //check if categoria already exists
        $categoria = categorias::where('idCategoria', $request['idCategoria'])->first();

        if($categoria){
            $response['status'] = 1;
            $response['message'] = 'Categoria já existe';
            $response['code'] = 409;
        }else{ 
            //adds categoria to database
        $categoria = categorias::create([
            'nomeCategoria'      => $request -> nomeCategoria,
            'idUser' => $id
        ]);
        $response['status'] = 1;
        $response['message'] = 'Categoria criada com sucesso';
        $response['code'] = 200;
        $response['user'] = $user;
    }

    

        
        return response()->json($response);
    }


    public function deleteCategoria($nomeDespesa, $nomeCategoria){
        //check the id of the user and choose only from the users categories
        if($nomeCategoria != 0){
          // Delete
          categorias::where('nomeCategoria', $nomeCategoria)->delete();
    
          

            $response['status'] = 1;
            $response['message'] = 'Categoria apagada com sucesso';
            $response['code'] = 200;
          
        }
        return response()->json($response);
    }

    public function updateCategoria($nomeCategoria, Request $request ){
        //check the id of the user and choose only from the users categories
        if($nomeCategoria != 0){
          // Delete
          categorias::where('nomeCategoria', $nomeCategoria)->update(['nomeCategoria' => $request]);

            $response['status'] = 1;
            $response['message'] = 'Categoria atualizada com sucesso';
            $response['code'] = 200;
          
        }
        return response()->json($response);
    }

    public function showCategorias(){
        
        $response = Categorias::all();
        return response()->json($response);
    }



}
