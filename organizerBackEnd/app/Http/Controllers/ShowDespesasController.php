<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ShowDespesasController extends Controller
{
    public function edit($id)
    {
        echo "DEspesas!";
        $despesas = despesas::find($id);
    }
}
