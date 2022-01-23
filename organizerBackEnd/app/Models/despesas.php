<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class despesas extends Model
{
    use HasFactory;

    protected $primaryKey = 'idCategoria';
    protected $table = 'despesas';
    protected $fillable = [
        'nomeDespesa',
        'valor',
        'data',
        'idCategoria',
        'idUser'
    ];

   
    
}
