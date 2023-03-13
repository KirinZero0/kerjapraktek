<?php

namespace App\Http\Controllers\Api\V1\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Products\ProductRequest;
use App\Http\Resources\Api\V1\Products\ProductResource;
use App\Models\Product;
use Illuminate\Http\Response;

class ProductController extends Controller
{
    public function store(ProductRequest $request){

        $validated = $request->validated();
        // $validated["image"]->store('public/images');

        try {
            $registeredProduct = Product::create($validated);
        } catch (\Exception $e) {
            return response()->json([
                "message" => "Failed Registering Buyer",
                "errors" => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        
        return new ProductResource($registeredProduct);

    }
}
