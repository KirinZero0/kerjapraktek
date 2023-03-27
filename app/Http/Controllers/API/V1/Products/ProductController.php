<?php

namespace App\Http\Controllers\Api\V1\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Products\ProductRequest;
use App\Http\Resources\Api\V1\Products\ProductResource;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\TmpImage;
use Exception;
use Facade\FlareClient\Stacktrace\File;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;


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

            
            if ($request->hasFile('image')) {
                $images = $request->file('image');
                foreach ($images as $key => $image) {
                    $imageName = $image->hashName();
                    $image->storeAs((new ProductImage())->imagePath($product->id), $imageName, 'public');
                    $product->productImages()->create([
                        'image' => $imageName,
                    ]);
                }
            }
    
            $tmpImages = TmpImage::all();
            foreach ($tmpImages as $tmpImage) {
                $tmpImagePath = storage_path('app/files/tmp/' . $tmpImage->path . '/' . $tmpImage->tmp);
                if (file_exists($tmpImagePath)) {
                    unlink($tmpImagePath);
                }
                rmdir(storage_path('app/files/tmp/' . $tmpImage->path));
                $tmpImage->delete();
            }
    
            Session::forget('path');
            Session::forget('tmp');

            return $this->success();
        });
    }
}
