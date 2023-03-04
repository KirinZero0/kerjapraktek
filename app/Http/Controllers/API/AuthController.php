<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\LoginResource;
use Illuminate\Http\Request;
use App\Models\Slave;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $slave = Slave::firstWhere("codename", $request->codename);

        if(!blank($slave) && Hash::check($request->password, $slave->password)) {
            return new LoginResource($slave);
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
