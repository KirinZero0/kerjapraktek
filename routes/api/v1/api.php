<?php
use App\Http\Controllers\Api\V1\Buyer\BuyerController;
use App\Http\Controllers\Api\V1\Buyer\Auth\LoginController as BuyerLogin;
use App\Http\Controllers\Api\V1\Buyer\Auth\RegisterController as BuyerRegis;
use App\Http\Controllers\Api\V1\Buyer\Profile\ProfileController as BuyerProfile;
use App\Http\Controllers\Api\V1\Slaver\SlaverController;
use App\Http\Controllers\Api\V1\Slaver\Auth\LoginController as SlaverLogin;
use App\Http\Controllers\Api\V1\Slaver\Auth\RegisterController as SlaverRegis;
use App\Http\Controllers\Api\V1\Slaver\Profile\ProfileController as SlaverProfile;
use App\Http\Controllers\Api\V1\Buyer\Auth\LogoutController as BuyerLogout;
use App\Http\Controllers\Api\V1\Slaver\Auth\LogoutController as SlaverLogout;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API RoutesSlave
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Auths

// Logins
Route::post('auth/buyers/login', [BuyerLogin::class, 'login']);
Route::post('auth/slavers/login', [SlaverLogin::class, 'login']);
// Regis
Route::post('auth/buyers/register', [BuyerRegis::class, 'register']);
Route::post('auth/slavers/register', [SlaverRegis::class, 'register']);
// Logout
Route::middleware('auth:sanctum')->post('/auth/buyers/logout',[BuyerLogout::class, 'logout']);
Route::middleware('auth:sanctum')->post('/auth/slavers/logout',[SlaverLogout::class, 'logout']);


// Datas

// Slave
Route::get('buyers',[BuyerController::class,'index']);
Route::delete('buyers/{id}',[BuyerController::class, 'destroy']);
// Slaver
Route::get('slavers',[SlaverController::class,'index']);
Route::delete('slavers/{id}',[SlaverController::class, 'destroy']);


// Profile

// Slave
Route::get('profile/buyers/{id}',[BuyerProfile::class, 'show']);
Route::put('profile/buyers/{id}',[BuyerProfile::class, 'update']);
// Slaver
Route::get('profile/slavers/{id}',[SlaverProfile::class, 'show']);
Route::put('profile/slavers/{id}',[SlaverProfile::class, 'update']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
