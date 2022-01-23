<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\despesas;

class dashboardController extends Controller
{
    //Como se distribuem as despesas num certo período de tempo ao longo das várias categorias?
    //utilizador insere a data inicial e a data final
    public function dashboardAllDespesas(Request $request){

        $response = despesas::select('*')
            ->where([
                ['idUser', '=', 1 /*posteriormente mudar para Auth()->id()*/],
                ['data','>=', $request -> datainicial],
                ['data','<=', $request -> datafinal]
            ])
            ->get();
        return response()->json($response);
        
    }

    //Qual foi a evolução das despesas de uma certa categoria ao longo de um determinado período de tempo?
    public function dashboardDespesasByCategoria(Request $request){
        $response = despesas::select('*')
        ->where([
            ['idUser', '=', 1 /*posteriormente mudar para Auth()->id()*/],
            ['data','>=', $request -> datainicial],
            ['data','<=', $request -> datafinal],
            ['idCategoria', '=', $request -> idCategoria] //isto é suposto aparecer ao utilizador num spinner onde sao mostrados os nomes das categorias relacionadas com o id, ele seleciona e é esse o id que é recebido aqui
        ])
        ->get();
    return response()->json($response);
    }
}
