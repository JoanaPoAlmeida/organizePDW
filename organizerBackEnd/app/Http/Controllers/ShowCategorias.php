<?php

namespace App\Http\Controllers;
use App\Models\categorias;
use Illuminate\Http\Request;

class showCategorias extends Controller
{
    public function showCat($idUser)
    {
        $categorias = categorias::where('idUser','=', $idUser)->get();
        return response()->json($categorias);
    }
}
