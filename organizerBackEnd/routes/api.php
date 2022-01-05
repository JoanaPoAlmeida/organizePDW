<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('register', 'App\Http\Controllers\UserController@register');

//rota para o login min 24:10 https://www.youtube.com/watch?v=c2bk_Ytqhmg
//No UserController esta a funçao criada mas falta as cenas la dentro
Route::post('login', 'App\Http\Controllers\UserController@login');
