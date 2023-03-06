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

    public function destroy($id){
        $slavers = Slaver::findOrFail($id);
        $slavers->delete();

        return response()->json([
            "message" => "Successfully Killed a Slaver with id {$id}",
        ], Response::HTTP_OK);
    }
}
