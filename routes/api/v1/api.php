<?php
use App\Http\Controllers\Api\V1\Slave\SlaveController;
use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthControllerMulti;


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
Route::get('slaves',[SlaveController::class,'index']);
Route::post('slaves',[SlaveController::class, 'store']);
Route::put('slaves/{id}',[SlaveController::class, 'update']);
Route::get('slaves/{id}',[SlaveController::class, 'show']);
Route::delete('slaves/{id}',[SlaveController::class, 'destroy']);

// Route::post('auth/login', [AuthController::class, 'login']);
Route::post('auth/login', [AuthControllerMulti::class, 'login'])->name('login');

Route::middleware('auth:sanctum')->post('/auth/logout',[AuthController::class, 'logout']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
