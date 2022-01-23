<?php

namespace App\Http\Controllers;
use App\Models\despesas;
use Illuminate\Http\Request;

class ShowDespesasController extends Controller
{
    public function showbyid($id)
    {
        $despesas = despesas::find($id);
        print($id);
        return response()->json($despesas);
    }
}
