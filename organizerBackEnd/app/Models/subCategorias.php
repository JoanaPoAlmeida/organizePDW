<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class subCategorias extends Model
{
    use HasFactory;

    protected $table = 'subCategorias';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'idSubCat';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nomeSubCat',
        'idCategoria'
    ];

}
