<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\despesas;
use App\Models\User;
use App\Models\categorias as ModelsCategorias;
use App\Models\categorias;
use App\Exports\despesasExport;
use Maatwebsite\Excel\Facades\Excel;

class DespesasController extends Controller
{

    public function addDespesa( Request $request) {
        //$user = User::where('idUser', '=', auth()->user())->get();
        //$idCat = ModelsCategorias::where($idCategoria,'=','idCategoria');

        
        $user = User::where('id', '=', 1 /*posteriormente mudar para Auth()->id()*/)->get();
        
        $despesa = despesas::create([
            'nomeDespesa' => $request -> nomeDespesa,
            'valor' => $request -> valor,
            'data' => $request -> data,
            'idCategoria' => $request -> idCategoria,
            'idUser'=> '1'
        ]);           

        $response['status'] = 1;
        $response['message'] = 'Despesa adicionada com sucesso';
        $response['code'] = 200;

        return response()->json($response);
    }

    public function deleteDespesa($idDespesas){
        if($idDespesas !=0){
            despesas::where('idDespesas', $idDespesas)->delete();
            
            $response['status'] = 1;
            $response['message'] = 'Despesa apagada com sucesso';
                $response['code'] = 200;

            return response()->json($response);
        }
    }
    public function exportDespesas(){
        return Excel::download(new despesasExport, 'downloadDespesas.csv');
    }
}
 