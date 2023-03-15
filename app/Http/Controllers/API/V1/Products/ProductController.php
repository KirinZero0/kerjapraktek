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

        $validated = $request->validated();
        DB::beginTransaction();

        try {
            $product = Product::create([
                'product_id' => $validated['oroduct_id'],
                'name' => $validated['name'],
                'description' => $validated['description'],
                'race' => $validated['race'],
                'price' => $validated['price'],
            ]);
    
            $image = $validated['image'];
            $imageName = time() . '.' . $image->extension();
            $imageUrl = $image->storeAs('custom_directory/product_images', $imageName, 'local');
    
            $productImage = new ProductImage([
                'image_url' => $imageUrl,
            ]);
            $product->productImages()->save($productImage);
    
            DB::commit();
    
            return response()->json(['message' => 'Product added successfully']);
        } catch (Exception $e) {
            DB::rollback();
            return response()->json(['error' => 'An error occurred while adding the product'], 500);
        }
    }
}
