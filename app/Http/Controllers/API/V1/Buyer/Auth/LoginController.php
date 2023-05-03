<?php

namespace App\Http\Controllers\Api\V1\Buyer\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Buyer\Auth\LoginRequest;
use App\Http\Resources\Api\V1\Buyer\Auth\LoginResource;
use App\Models\Buyer;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();

        $buyer = Buyer::where('codename', $credentials['codename'])->first();
    
        if (!blank($buyer) && Hash::check($credentials['password'], $buyer->password)) {
            
            return new LoginResource($buyer, 'buyer');
        }
        
        throw ValidationException::withMessages(['validation' => 'your credentials are incorrect']);
    }
    
    public function loginCart(LoginRequest $request)
    {
        $credentials = $request->validated();

        $buyer = Buyer::where('codename', $credentials['codename'])->first();
    
        if (!blank($buyer) && Hash::check($credentials['password'], $buyer->password)) {
            
            return new LoginResource($buyer, 'buyer');
        }
        
        throw ValidationException::withMessages(['validation' => 'your credentials are incorrect']);
    }
}

        
