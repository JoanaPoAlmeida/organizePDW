<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\subCategorias;

class SubCategoriasController extends Controller
{
    public function showSubCategorias(Request $request)
    {
        $subcategorias = subCategorias::where('idCategoria', '=', $request -> idCategoria)->get();
        return response()->json($subcategorias);
    }
}
