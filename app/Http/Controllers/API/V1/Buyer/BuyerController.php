<?php

namespace App\Http\Controllers\Api\V1\Buyer;

use App\Http\Controllers\Controller;
use App\Models\Buyer;
use Illuminate\Http\Response;


class BuyerController extends Controller
{
    public function index(){
        $buyers = Buyer::all();

        return response()->json([
        "message" => "Buyers Retrieved Successfully",
        "data" => $buyers
        ], Response::HTTP_OK);
    }

    public function destroy($id){
        $buyers = Buyer::findOrFail($id);
        $buyers->delete();

        return response()->json([
            "message" => "Successfully Killed a Buyer with id {$id}",
        ], Response::HTTP_OK);
    }
}
