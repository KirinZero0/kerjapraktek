<?php

namespace App\Http\Controllers\Api\V1\Products;

use App\Http\Controllers\Controller;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use App\Models\TmpImage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class TmpController extends Controller
{
    public function upload(Request $request)
    {
        $image = $request->file('image');
        $imageName = $image->hashName();
        $path = uniqid() . '-' . now()->timestamp;
        $image->storeAs('files/tmp/' . $path, $imageName);
        TmpImage::create([
            'tmp' => $imageName,
            'path' => $path
        ]);

        Session::push('path', $path);
        Session::push('tmp', $imageName);

        return $imageName;
    }

    public function destroy(Request $request)
    {
        $tmpFiles = $request->getContent();
    
            $db = TmpImage::where('tmp', $tmpFiles)->first();
            if ($db) {
                $path = storage_path() . '/app/files/tmp/' . $db->path . '/' . $db->tmp;
                if (File::exists($path)) {
                    File::delete($path);
                    rmdir(storage_path('/app/files/tmp/' . $db->path));
    
                    TmpImage::where([
                        'path' => $db->path,
                        'tmp' => $db->tmp
                    ])->delete();
                } else {
                    return 'not found';
                }
            }

    
        return 'deleted';
    }

    public function destroy2(Request $request)
    {
        $files = $request->getContent();


            $db0 = ProductImage::where('image', $files)->first();
            $db = TmpImage::where('tmp', $files)->first();
            if($db0) {
                $path0 = storage_path() . '/app/files/products/' . $db0->product_id . '/' . $db0->image;
                if (File::exists($path0)) {
                    File::delete($path0);
                    ProductImage::where([
                        'product_id' => $db0->product_id,
                        'image' => $db0->image,
                        'type' => $db0->type,
                        'size' => $db0->size
                    ])->delete();
                } else {
                    return 'not found';
                }
            }
            if ($db) {
                $path = storage_path() . '/app/files/tmp/' . $db->path . '/' . $db->tmp;
                if (File::exists($path)) {
                    File::delete($path);
                    rmdir(storage_path('/app/files/tmp/' . $db->path));
    
                    TmpImage::where([
                        'path' => $db->path,
                        'tmp' => $db->tmp
                    ])->delete();
                } else {
                    return 'not found';
                }
            }

    
        return 'deleted';
    }
}
