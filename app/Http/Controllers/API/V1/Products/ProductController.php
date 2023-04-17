<?php

namespace App\Http\Controllers\Api\V1\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Products\ProductRequest;
use App\Http\Resources\Api\V1\Products\ProductCollection;
use App\Http\Resources\Api\V1\Products\ProductResource;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\TmpImage;
use Exception;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;


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
                    $imageSize = $image->getSize();
                    $imageType = $image->getClientOriginalExtension();
                    $image->storeAs((new ProductImage())->imagePath($product->id), $imageName, 'public');
                    $product->productImages()->create([
                        'image' => $imageName,
                        'type' => $imageType,
                        'size' => $imageSize
                    ]);
                }
            }
    
            $tmpFiles = session('tmp');
            
            foreach ($tmpFiles as $tmpFile) {
                $db = TmpImage::where('tmp', $tmpFile)->first();
                if ($db) {
                    $path = storage_path() . '/app/files/tmp/' . $db->path . '/' . $db->tmp;
                    if (File::exists($path)) {
                        unlink($path);
                        rmdir(storage_path('/app/files/tmp/' . $db->path));
        
                        TmpImage::where([
                            'path' => $db->path,
                            'tmp' => $db->tmp
                        ])->delete();
                    } 
                }
            }

            Session::forget('path');
            Session::forget('tmp');
            
            return $this->success();
        });
    }

    public function edit (Request $request, $id){

        $product = Product::findOrFail($id);
        // dd($request->all());

        $product->update([
            'name' => $request->name,
            'description' => $request->description,
            'race' => $request->race,
            'price' => $request->price,
        ]);



        
        return $this->success();
        
    }

    public function updateImage(Request $request, $id){

        $product = Product::findOrFail($id);

        if ($request->hasFile('image')) {
            $images = $request->file('image');
            foreach ($images as $key => $image) {
                $imageName = $image->hashName();
                $imageSize = $image->getSize();
                $imageType = $image->getClientOriginalExtension();
                $image->storeAs((new ProductImage())->imagePath($product->id), $imageName, 'public');
                $product->productImages()->create([
                    'image' => $imageName,
                    'type' => $imageType,
                    'size' => $imageSize
                ]);
            }
        }

        $tmpFiles = session('tmp');

        foreach ($tmpFiles as $tmpFile) {
            $db = TmpImage::where('tmp', $tmpFile)->first();
            if ($db) {
                $path = storage_path() . '/app/files/tmp/' . $db->path . '/' . $db->tmp;
                if (File::exists($path)) {
                    unlink($path);
                    rmdir(storage_path('/app/files/tmp/' . $db->path));
    
                    TmpImage::where([
                        'path' => $db->path,
                        'tmp' => $db->tmp
                    ])->delete();
                } 
            }
        }

        
        Session::forget('path');
        Session::forget('tmp');

        return $this->success();
    }

    public function show()
    {
        $products = Product::with('productImages')->get();

        return new ProductCollection($products);
    }

    public function showProduct(Product $custom_id)
    {
        

        return new ProductResource($custom_id);
    }


    public function deleteImage($id)
    {
        
            $db = ProductImage::find($id);
            if($db) {
                $path0 = storage_path() . '/app/public/products/' . $db->product_id . '/images/' . $db->image;

                if (File::exists($path0)) {
                    File::delete($path0);
                } 
                $db->delete();
            }
            return 'deleted';
    }
}
