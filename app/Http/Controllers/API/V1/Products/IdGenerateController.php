<?php

namespace App\Http\Controllers\Api\V1\Products;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IdGenerateController extends Controller
{
    public function generate(){
    $id = mt_rand(1000000, 9999999);
    return response()->json(['id' => $id]);
    }
}
