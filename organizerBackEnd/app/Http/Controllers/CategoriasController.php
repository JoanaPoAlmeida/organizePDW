<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\categorias;
use App\Models\User;

class CategoriasController extends Controller
{
    public function addCategoria(Request $request) {

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
            'nomeCategoria'      => $request -> nomeCategoria
        ]);
        $response['status'] = 1;
        $response['message'] = 'Categoria criada com sucesso';
        $response['code'] = 200;
    }

        
        return response()->json($response);
    }
}
