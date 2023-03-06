<?php

namespace App\Http\Controllers\Api\V1\Slave;

use App\Http\Controllers\Controller;
use App\Models\Slave;
use Illuminate\Http\Response;


class SlaveController extends Controller
{
    public function index(){
        $slaves = Slave::all();

        return response()->json([
        "message" => "Slaves Retrieved Successfully",
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
