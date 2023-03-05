<?php

namespace App\Http\Controllers\Api\V1\Slaver;

use App\Http\Controllers\Controller;
use App\Models\Slaver;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class SlaverController extends Controller
{
    public function index(){
        $slavers = Slaver::all();

        return response()->json([
        "message" => "Slavers Retrieved Successfully",
        "data" => $slavers
        ], Response::HTTP_OK);
    }


    public function store(Request $request){
        $validator = Validator::make($request->all(),[
            "codename" => "required|string|unique:slavers,codename",
            "name" => "required|string",
            "password" => "required|string",
            // "email" => "required|string|email:rfc,dns|unique:table_name,column"
        ]);

        if($validator->fails()){
            return response()->json([
                "message" => "Failed Registering Slaver",
                "errors" => $validator->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        }

        $validated = $validator->validated();
        $validated["password"] = Hash::make($validated["password"]);

        try {
            $registeredSlaver = Slaver::create($validated);
        } catch (\Exception $e) {
            return response()->json([
                "message" => "Failed Registering Slaver",
                "errors" => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        
        return response()->json([
            "message" => "Successfully Registering Slaver",
            "data" => $registeredSlaver
        ], Response::HTTP_CREATED);

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
            $validated["password"] = bcrypt($validated["password"]);
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


    public function show($id){
        $slavers = Slaver::findOrFail($id);

        return response()->json([
            "message" => "Successfully Fetched a Slaver",
            "data" => $slavers
        ], Response::HTTP_OK);
    }

    public function destroy($id){
        $slavers = Slaver::findOrFail($id);
        $slavers->delete();

        return response()->json([
            "message" => "Successfully Killed a Slaver with id {$id}",
        ], Response::HTTP_OK);
    }
}
