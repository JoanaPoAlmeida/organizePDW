<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\despesas;
use App\Models\User;
<<<<<<< HEAD
use App\Model\categorias;
use App\Models\categorias as ModelsCategorias;
=======
use App\Models\categorias;
use App\Exports\despesasExport;
use Maatwebsite\Excel\Facades\Excel;
>>>>>>> 3dbe08aac5828d0680ce0ed2b32bc49e8d3803d6

class DespesasController extends Controller
{

    public function addDespesa($idCategoria, Request $request) {
<<<<<<< HEAD
        //$user = User::where('idUser', '=', auth()->user())->get();
        //$idCat = ModelsCategorias::where($idCategoria,'=','idCategoria');

=======
        
        $user = User::where('idUser', '=', 1 /*posteriormente mudar para Auth()->id()*/)->get();
>>>>>>> 3dbe08aac5828d0680ce0ed2b32bc49e8d3803d6
        
        $despesa = despesas::create([
            'nomeDespesa' => $request -> nomeDespesa,
            'valor' => $request -> valor,
            'data' => $request -> data,
<<<<<<< HEAD
            'idCategoria' => '1',
=======
            'idCategoria' => $idCategoria,
>>>>>>> 3dbe08aac5828d0680ce0ed2b32bc49e8d3803d6
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
    public function exportDespesas(){
        return Excel::download(new despesasExport, 'downloadDespesas.csv');
    }
}
 