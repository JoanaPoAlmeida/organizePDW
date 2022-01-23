<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\subCategorias;
use App\Models\categorias;

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
}
