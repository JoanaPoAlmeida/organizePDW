<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\despesas;
use App\Models\User;
use App\Models\categorias;
class DespesasController extends Controller
{

    public function addDespesa($idCategoria, Request $request) {
        
        $user = User::where('idUser', '=', 1 /*posteriormente mudar para Auth()->id()*/)->get();
        
        $despesa = despesas::create([
            'nomeDespesa' => $request -> nomeDespesa,
            'valor' => $request -> valor,
            'data' => $request -> data,
            'idCategoria' => $idCategoria,
            'idUser'=> '1'
        ]);   
        $response['status'] = 1;
        $response['message'] = 'Despesa adicionada com sucesso';
        $response['code'] = 200;

        return response()->json($response);
    }

public function deleteDespesa($nomeDespesa){
    if($nomeDespesa !=0){
        despesas::where('nomeDespesa', $nomeDespesa)->delete();
        
        $response['status'] = 1;
            $response['message'] = 'Categoria apagada com sucesso';
            $response['code'] = 200;
    }
}


}
 