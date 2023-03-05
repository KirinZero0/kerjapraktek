<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\LoginResource;
use Illuminate\Http\Request;
use App\Models\Slave;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthControllerMulti extends Controller
{
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();;

        if(Auth::guard('slaves')->attempt($credentials)) 
        {
            $user = Auth::guard('slaves')->user();
            return new LoginResource($user);
        } 
        if (Auth::guard('slavers')->attempt($credentials))
        {
            $user = Auth::guard('slavers')->user();
            return new LoginResource($user);
        }
        throw ValidationException::withMessages(['validation' => 'your credentials are incorrect']);
    }

    public function logout()
    {
        request()->user()->currentAccessToken()->delete();

        return response()->json([
            "message" => "Slave Escaped"
        ], Response::HTTP_OK);
    }
}
