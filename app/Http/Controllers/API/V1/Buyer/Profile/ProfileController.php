<?php

namespace App\Http\Controllers\Api\V1\Buyer\Profile;

use App\Http\Controllers\Controller;
use App\Models\Buyer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ProfileController extends Controller
{
    public function show($id){
        $buyers = Buyer::findOrFail($id);

        return response()->json([
            "message" => "Successfully Fetched a Buyer",
            "data" => $buyers
        ], Response::HTTP_OK);
    }

    public function update(Request $request, $id){
        $validator = Validator::make($request->all(),[
            "codename" => "string|unique:buyers,codename",
            "name" => "string",
            "password" => "string",
        ]);

        if($validator->fails()){
            return response()->json([
                "message" => "Failed Registering Buyer",
                "errors" => $validator->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        }

        $validated = $validator->validated();
        if(isset($validated["password"])){
            $validated["password"] = Hash::make($validated["password"]);
        }

        try {
            $buyers = Buyer::findorFail($id);
            $buyers->update($validated);
        } catch (\Exception $e) {
            return response()->json([
                "message" => "Failed Updating Buyer",
                "errors" => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        return response()->json([
            "message" => "Successfully Updating Buyer",
            "data" => $buyers
        ], Response::HTTP_OK);
    }
}
