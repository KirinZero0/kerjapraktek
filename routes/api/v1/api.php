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
use App\Http\Controllers\Api\V1\Products\CartController;
use App\Http\Controllers\Api\V1\Products\IdGenerateController;
use App\Http\Controllers\Api\V1\Slaver\Auth\LogoutController as SlaverLogout;
use App\Http\Controllers\Api\V1\Products\ProductController;
use App\Http\Controllers\Api\V1\Products\TmpController;
use App\Http\Controllers\Api\V1\Products\TransactionController;
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
Route::post('auth/buyers/register', [BuyerRegis::class, 'store']);
Route::post('auth/slavers/register', [SlaverRegis::class, 'store']);
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

// Products
Route::post('product/register',[ProductController::class, 'store']);
Route::get('/product/generate-id', [IdGenerateController::class, 'generate']);

Route::post('product/upload-tmp', [TmpController::class, 'upload']);
Route::post('product/edit-image/{id}', [ProductController::class, 'updateImage']);

Route::delete('product/delete-tmp', [TmpController::class, 'destroy']);
Route::delete('product/delete-tmp2', [TmpController::class, 'destroy2']);
Route::delete('product/delete-image/{id}', [ProductController::class, 'deleteImage']);

Route::get('product/show', [ProductController::class, 'show']);
Route::get('product/show/page/', [ProductController::class, 'showStore']);
Route::get('product/show/{custom_id:custom_id}', [ProductController::class, 'showProduct']);
Route::put('/product/edit/{id}', [ProductController::class, 'edit']);

// Cart Functionality

// public
Route::post('product/add-to-cart/{id}', [CartController::class, 'addToCart']);
Route::get('product/public-cart', [CartController::class, 'showPublicCart']);
Route::get('product/session', [CartController::class, 'sessionGet']);


// storing cart data
Route::post('product/store-cart', [CartController::class, 'storeCart'])->middleware('auth:sanctum');

Route::post('product/add-to-user-cart/{id}', [CartController::class, 'addToCart2'])->middleware('auth:sanctum');
Route::get('product/user-cart', [CartController::class, 'showCart'])->middleware('auth:sanctum');

// Transaction [TEST XENDIT]
Route::get('transaction', [TransactionController::class, 'createTransaction']);
Route::post('transaction/ewallet/{channel_code}', [TransactionController::class, 'createEWalletCharge'])->middleware('auth:sanctum');
Route::post('transaction/virtual-account/{bank_code}', [TransactionController::class, 'createVirtualAccount'])->middleware('auth:sanctum');
Route::post('transaction/retail/{retail_name}', [TransactionController::class, 'createRetailPayment'])->middleware('auth:sanctum');


Route::get('transaction/get-all', [TransactionController::class, 'getAllTransactions']);
Route::get('transaction/get', [TransactionController::class, 'getUserTransactions'])->middleware('auth:sanctum');
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
