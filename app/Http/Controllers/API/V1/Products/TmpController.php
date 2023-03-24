<?php

namespace App\Http\Controllers\Api\V1\Products;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TmpImage;
use Illuminate\Support\Facades\Session;

class TmpController extends Controller
{
    public function upload(Request $request)
    {
        $image = $request->file('image');
        $imageName = $image->hashName();
        $path = uniqid() . '-' . now()->timestamp;
        Session::put('path', $path);
        Session::put('tmp', $imageName);
        $image->storeAs('files/tmp/' . $path, $imageName);
        TmpImage::create([
            'tmp' => $imageName,
            'path' => $path
        ]);
        return $imageName;
    }

    // public function destroy(Request $request)
    // {
    //     $db = TmpImage::where('tmp', $request->tmp)->first();

    //     if($db){
    //         $path
    //     }
    // }
}
