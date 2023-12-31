<?php

namespace App\Http\Controllers\Api\V1\Slaver\Profile;

use App\Http\Controllers\Controller;
use App\Models\Slaver;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ProfileController extends Controller
{
    public function show($id){
        $slavers = Slaver::findOrFail($id);

        return response()->json([
            "message" => "Successfully Fetched a Slaver",
            "data" => $slavers
        ], Response::HTTP_OK);
    }

    public function update(Request $request, $id){
        $validator = Validator::make($request->all(),[
            "codename" => "string|unique:slavers,codename",
            "name" => "string",
            "owner_name" => "string",
            "password" => "string",
        ]);

        if($validator->fails()){
            return response()->json([
                "message" => "Failed Registering Slaver",
                "errors" => $validator->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        }

        $validated = $validator->validated();
        if(isset($validated["password"])){
            $validated["password"] = Hash::make($validated["password"]);
        }

        try {
            $slavers = Slaver::findorFail($id);
            $slavers->update($validated);
        } catch (\Exception $e) {
            return response()->json([
                "message" => "Failed Updating Slaver",
                "errors" => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        return response()->json([
            "message" => "Successfully Updating Slaver",
            "data" => $slavers
        ], Response::HTTP_OK);
    }
}
