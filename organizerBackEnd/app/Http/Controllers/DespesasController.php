<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\despesas;
use App\Models\User;
use App\Model\categorias;
class DespesasController extends Controller
{

    public function addDespesa($idCategoria, Request $request) {
        
        $user = User::where('idUser', '=', auth()->user())->get();
        $idCat = categorias::where($idCategoria,'=','idCategoria');
        
        $despesa = despesas::create([
            'nomeDespesa' => $request -> nomeDespesa,
            'valor' => $request -> valor,
            'data' => $request -> data,
            'idCategoria' => $idCat,
            'idUser'=> auth()->user()
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
 