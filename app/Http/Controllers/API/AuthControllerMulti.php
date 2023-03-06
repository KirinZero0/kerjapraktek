<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\LoginResource;
use Illuminate\Http\Request;
use App\Models\Slave;
use App\Models\Slaver;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthControllerMulti extends Controller
{
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();;

        $slave = Slave::where('codename', $credentials['codename'])->first();
        $slaver = Slaver::where('codename', $credentials['codename'])->first();
    
        if ($slave && Hash::check($credentials['password'], $slave->password)) {
            return new LoginResource($slave, 'slave');
        }
        if ($slaver && Hash::check($credentials['password'], $slaver->password)) {
            return new LoginResource($slaver, 'slaver');
        }
        throw ValidationException::withMessages(['validation' => 'your credentials are incorrect']);
    }

    public function logout()
    {
        request()->user()->currentAccessToken()->delete();

        return response()->json([
            "message" => "Logged Out"
        ], Response::HTTP_OK);
    }
}
