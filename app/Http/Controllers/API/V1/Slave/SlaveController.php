<?php

namespace App\Http\Controllers\Api\V1\Slave;

use App\Http\Controllers\Controller;
use App\Models\Slave;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class SlaveController extends Controller
{
    public function index(){
        $slaves = Slave::all();

        return response()->json([
        "message" => "Slaves Retrieved Successfully",
        "data" => $slaves
        ], Response::HTTP_OK);
    }


    public function store(Request $request){
        $validator = Validator::make($request->all(),[
            "codename" => "required|string|unique:slaves,codename",
            "name" => "required|string",
            "owner_name" => "required|string",
            "password" => "required|string",
            // "email" => "required|string|email:rfc,dns|unique:table_name,column"
        ]);

        if($validator->fails()){
            return response()->json([
                "message" => "Failed Registering Slave",
                "errors" => $validator->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        }

        $validated = $validator->validated();
        $validated["password"] = Hash::make($validated["password"]);

        try {
            $registeredSlave = Slave::create($validated);
        } catch (\Exception $e) {
            return response()->json([
                "message" => "Failed Registering Slave",
                "errors" => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        
        return response()->json([
            "message" => "Successfully Registering Slave",
            "data" => $registeredSlave
        ], Response::HTTP_CREATED);

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
            $validated["password"] = bcrypt($validated["password"]);
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


    public function show($id){
        $slaves = Slave::findOrFail($id);

        return response()->json([
            "message" => "Successfully Fetched a Slave",
            "data" => $slaves
        ], Response::HTTP_OK);
    }

    public function destroy($id){
        $slaves = Slave::findOrFail($id);
        $slaves->delete();

        return response()->json([
            "message" => "Successfully Killed a Slave with id {$id}",
        ], Response::HTTP_OK);
    }
}
