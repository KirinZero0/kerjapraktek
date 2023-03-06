<?php
use App\Http\Controllers\Api\V1\Slave\SlaveController;
use App\Http\Controllers\Api\V1\Slave\Auth\LoginController as SlaveLogin;
use App\Http\Controllers\Api\V1\Slave\Auth\RegisterController as SlaveRegis;
use App\Http\Controllers\Api\V1\Slave\Profile\ProfileController as SlaveProfile;
use App\Http\Controllers\Api\V1\Slaver\SlaverController;
use App\Http\Controllers\Api\V1\Slaver\Auth\LoginController as SlaverLogin;
use App\Http\Controllers\Api\V1\Slaver\Auth\RegisterController as SlaverRegis;
use App\Http\Controllers\Api\V1\Slaver\Profile\ProfileController as SlaverProfile;
use App\Http\Controllers\Api\V1\Slave\Auth\LogoutController as SlaveLogout;
use App\Http\Controllers\Api\V1\Slaver\Auth\LogoutController as SlaverLogout;
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
// Auths

// Logins
Route::post('auth/slaves/login', [SlaveLogin::class, 'login']);
Route::post('auth/slavers/login', [SlaverLogin::class, 'login']);
// Regis
Route::post('auth/slaves/register', [SlaveRegis::class, 'register']);
Route::post('auth/slavers/register', [SlaverRegis::class, 'register']);
// Logout
Route::middleware('auth:sanctum')->post('/auth/slaves/logout',[SlaveLogout::class, 'logout']);
Route::middleware('auth:sanctum')->post('/auth/slavers/logout',[SlaverLogout::class, 'logout']);


// Datas

// Slave
Route::get('slaves',[SlaveController::class,'index']);
Route::delete('slaves/{id}',[SlaveController::class, 'destroy']);
// Slaver
Route::get('slavers',[SlaverController::class,'index']);
Route::delete('slavers/{id}',[SlaverController::class, 'destroy']);


// Profile

// Slave
Route::get('profile/slaves/{id}',[SlaveProfile::class, 'show']);
Route::put('profile/slaves/{id}',[SlaveProfile::class, 'update']);
// Slaver
Route::get('profile/slavers/{id}',[SlaverProfile::class, 'show']);
Route::put('profile/slavers/{id}',[SlaverProfile::class, 'update']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
