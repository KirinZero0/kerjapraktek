<?php

namespace App\Http\Controllers\Api\V1\Buyer\Auth;

use App\Http\Controllers\Controller;
use App\Models\Buyer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    public function store(Request $request){
        $validator = Validator::make($request->all(),[
            "codename" => "required|string|unique:buyers,codename",
            "name" => "required|string",
            "password" => "required|string",
            // "email" => "required|string|email:rfc,dns|unique:table_name,column"
        ]);

        if($validator->fails()){
            return response()->json([
                "message" => "Failed Registering Buyer",
                "errors" => $validator->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        }

        $validated = $validator->validated();
        $validated["password"] = Hash::make($validated["password"]);

        try {
            $registeredBuyer = Buyer::create($validated);
        } catch (\Exception $e) {
            return response()->json([
                "message" => "Failed Registering Buyer",
                "errors" => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        
        return response()->json([
            "message" => "Successfully Registering Buyer",
            "data" => $registeredBuyer
        ], Response::HTTP_CREATED);

    }
}
