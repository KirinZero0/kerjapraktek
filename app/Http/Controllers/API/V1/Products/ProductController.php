<?php

namespace App\Http\Controllers\Api\V1\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Products\ProductRequest;
use App\Http\Resources\Api\V1\Products\ProductResource;
use App\Models\Product;
use App\Models\ProductImage;
use Exception;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function store(ProductRequest $request){

        DB::transaction(function() use ($request)
        {
            $product = Product::create([
                'custom_id' => $request->custom_id,
                'name' => $request->name,
                'description' => $request->description,
                'race' => $request->race,
                'price' => $request->price,
            ]);

            $images = $request->images;

            foreach ($images as $key => $value) 
            {
                $imageName = $value->hashName();
                $value->storeAs((new ProductImage())->imagePath($product->id), $imageName, 'public');
                $product->productImages()->create([
                    'image' => $imageName,
                ]);
            }

            return $this->success();
        });
    }
}
