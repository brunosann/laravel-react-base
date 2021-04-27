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

Route::get('unauthenticated', function () {
  return ['errors' => 'Usuário não logado!'];
})->name('login');

Route::get('test', function () {
  return ['pong' => csrf_token()];
});

Route::prefix('auth')->group(function () {
  Route::post('login', 'AuthController@login');
  Route::post('create', 'AuthController@create');
  Route::middleware('auth:sanctum')->get('logout', 'AuthController@logout');
});

Route::middleware('auth:sanctum')->group(function () {
  Route::get('ping', function () {
    return ['pong' => true];
  });
});
