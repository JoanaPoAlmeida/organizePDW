<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use App\Models\despesas;

class despesasExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return despesas::where('idUser','=', 1 /*posteriormente mudar para Auth()->id()*/)->get();
    }
}
