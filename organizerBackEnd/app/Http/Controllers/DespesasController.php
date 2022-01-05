<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DespesasController extends Controller
{
    public function index() {
        
        print_r(route('despesas'));

        //Directly in the view
        return view('despesas.index');
    }

    public function addDespesa() {
        //ask for name
        //ask for category (present the available categories in a spinner)
        return 'Adicionar nova despesa';
    }

//podemos usar isto para mostrar todas as despesas de uma certa categoria
    public function show($name) {
        $data = [
            'saude' => 'Saúde',
            'educacao' => 'Educação',
            'casa' => 'Casa'
        ];

        return view('despesas.index', [
            'despesas' => $data[$name] ?? 'Despesa ' . $name . 'não existe'
        ]);
    }
}
 