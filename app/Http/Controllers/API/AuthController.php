<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Slave;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            "codename"=>"required|string",
            "password" => "required|string",
        ]);

        $slave = Slave::firstWhere("codename", $request->codename);

        if(!$slave || !Hash::check($request->password, $slave->password)) {
            return response()->json([
                "message" => "Bad Credentials"
            ], Response::HTTP_NOT_FOUND);
        }

        // $token = $request->user()->createToken($request->sanctum_token);
        $token = $slave->createToken("sanctum_token")->plainTextToken;

        return response()->json([
            "message"=>"Slave Logged In",
            "token" => $token
        ], Response::HTTP_OK);

    }

    public function logout()
    {
        auth()->user()->tokens()->delete();

        return response()->json([
            "message" => "Slave Escaped"
        ], Response::HTTP_OK);
    }
}
