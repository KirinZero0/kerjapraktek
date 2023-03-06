<?php

namespace App\Http\Controllers\Api\V1\Slaver\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Slaver\Auth\LoginRequest;
use App\Http\Resources\Api\V1\Slaver\Auth\LoginResource;
use App\Models\Slave;
use App\Models\Slaver;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();;

        $slaver = Slaver::where('codename', $credentials['codename'])->first();
    
        if (!blank($slaver) && Hash::check($credentials['password'], $slaver->password)) {
            return new LoginResource($slaver, 'slaver');
        }
        throw ValidationException::withMessages(['validation' => 'your credentials are incorrect']);
    }
}
