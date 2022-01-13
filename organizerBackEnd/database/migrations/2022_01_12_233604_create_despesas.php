<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDespesas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('despesas', function (Blueprint $table) {
            $table->id('idDespesas');
            $table->string('nomeDespesa');
            $table->integer('valor');
            $table->date('data');
            $table->timestamps();

            $table->unsignedBigInteger('idCategoria');
            $table->unsignedBigInteger('idUser');

            $table->foreign('idCategoria')->references('idCategoria')->on('categorias');
            $table->foreign('idUser')->references('idUser')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('despesas');
    }
}