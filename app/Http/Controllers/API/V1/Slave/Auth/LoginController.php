<?php

namespace App\Http\Controllers\Api\V1\Slave\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Slave\Auth\LoginRequest;
use App\Http\Resources\Api\V1\Slave\Auth\LoginResource;
use App\Models\Slave;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();

        $slave = Slave::where('codename', $credentials['codename'])->first();
    
        if (!blank($slave) && Hash::check($credentials['password'], $slave->password)) {
            return new LoginResource($slave, 'slave');
        }
        
        throw ValidationException::withMessages(['validation' => 'your credentials are incorrect']);
    }
}

