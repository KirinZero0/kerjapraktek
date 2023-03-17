<?php

namespace App\Http\Controllers\Api\V1\Products;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\V1\Products\GeneratorResource;
use Illuminate\Http\Request;

class IdGenerateController extends Controller
{
    public function generate(){

    return new GeneratorResource(mt_rand(1000000, 9999999));
    }
}
