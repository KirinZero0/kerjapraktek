<?php

namespace App\Http\Controllers\Api\V1\Slave\Profile;

use App\Http\Controllers\Controller;
use App\Models\Slave;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ProfileController extends Controller
{
    public function show($id){
        $slaves = Slave::findOrFail($id);

        return response()->json([
            "message" => "Successfully Fetched a Slave",
            "data" => $slaves
        ], Response::HTTP_OK);
    }

    public function update(Request $request, $id){
        $validator = Validator::make($request->all(),[
            "codename" => "string|unique:slaves,codename",
            "name" => "string",
            "owner_name" => "string",
            "password" => "string",
        ]);

        if($validator->fails()){
            return response()->json([
                "message" => "Failed Registering Slave",
                "errors" => $validator->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        }

        $validated = $validator->validated();
        if(isset($validated["password"])){
            $validated["password"] = Hash::make($validated["password"]);
        }

        try {
            $slaves = Slave::findorFail($id);
            $slaves->update($validated);
        } catch (\Exception $e) {
            return response()->json([
                "message" => "Failed Updating Slave",
                "errors" => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        return response()->json([
            "message" => "Successfully Updating Slave",
            "data" => $slaves
        ], Response::HTTP_OK);
    }
}
