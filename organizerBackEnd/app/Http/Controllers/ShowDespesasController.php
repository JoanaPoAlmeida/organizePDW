<?php

namespace App\Http\Controllers;
use App\Models\despesas;
use Illuminate\Http\Request;

class ShowDespesasController extends Controller
{
    public function showbyid()
    {
        $despesas = despesas::where('idUser','=', 1 /*posteriormente mudar para Auth()->id()*/)->get();
        return response()->json($despesas);
    }
}
