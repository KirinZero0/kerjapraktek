<?php

namespace App\Http\Controllers\Api\V1\Buyer\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class LogoutController extends Controller
{
    public function logout()
    {
        request()->user()->currentAccessToken()->delete();

        return response()->json([
            "message" => "Logged Out"
        ], Response::HTTP_OK);
    }
}