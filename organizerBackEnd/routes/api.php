<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\ShowDespesasController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//registo e login
Route::post('register', 'App\Http\Controllers\UserController@register');
Route::post('login', 'App\Http\Controllers\UserController@login');
Route::post('logout', 'App\Http\Controllers\UserController@logout');

//categorias
Route::post('addCategoria', 'App\Http\Controllers\CategoriasController@addCategoria');
Route::delete('deleteCategoria', 'App\Http\Controllers\CategoriasController@deleteCategoria');
Route::put('updateCategoria', 'App\Http\Controllers\CategoriasController@updateCategoria');
Route::get('showCategorias', 'App\Http\Controllers\CategoriasController@showCategorias');
Route::get('getcategorias/{id}', 'App\Http\Controllers\ShowCategorias@showCat');

//subCategorias
Route::get('showSubCategorias', 'App\Http\Controllers\SubCategoriasController@showSubCategorias');

//categorias e subcategorias
Route::get('showAll', 'App\Http\Controllers\SubCategoriasController@showAll');

//despesas
Route::post('addDespesa/{idCategoria}', 'App\Http\Controllers\DespesasController@addDespesa'); 
Route::post('deleteDespesa/{nomeDespesa}', 'App\Http\Controllers\DespesasController@deleteDespesa');
Route::get('getdespesas', 'App\Http\Controllers\ShowDespesasController@showbyid');

//password reset e recuperar
Route::post('password/email', 'App\Http\Controllers\ForgotPasswordController@forgot');
Route::post('password/reset', 'App\Http\Controllers\ForgotPasswordController@reset');



//dashboard
Route::get('dashboardAllDespesas', 'App\Http\Controllers\dashboardController@dashboardAllDespesas');
Route::get('dashboardDespesasByCategorias', 'App\Http\Controllers\dashboardController@dashboardDespesasByCategoria');