<?php

namespace App\Http\Controllers\Api\V1\Products;

use App\Http\Controllers\Controller;
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
        $tmpFiles = session('tmp');
        
        foreach ($tmpFiles as $tmpFile) {
            $db = TmpImage::where('tmp', $tmpFile)->first();
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
        }
    
        return 'deleted';
    }
}
