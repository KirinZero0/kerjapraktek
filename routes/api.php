<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\SlaveController;
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
Route::get('slaves',[SlaveController::class, 'index']);
Route::post('slaves',[SlaveController::class, 'store']);
Route::put('slaves/{id}',[SlaveController::class, 'update']);
Route::get('slaves/{id}',[SlaveController::class, 'show']);
Route::delete('slaves/{id}',[SlaveController::class, 'destroy']);

Route::post('/auth/login',[AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/auth/logout',[AuthController::class, 'logout']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
