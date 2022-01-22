<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangesOnCategorias extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    /*  public function up()
    {
        Schema::table('categorias', function (Blueprint $table) {
            $table->unsignedBigInteger('idUser')->unsigned();

            $table->foreign('idUser')->references('idUser')->on('users');
        });
    }  */

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
