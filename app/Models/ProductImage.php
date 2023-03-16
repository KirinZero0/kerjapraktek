<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class ProductImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'image',
    ];

    protected $guarded = [
        "id",
        "created_at",
        "updated_at",
    ];

    protected $hidden = [];

    public function imagePath($productId)
    {
        return 'products/' . $productId . '/images';
    }

    public function hasImage()
    {
        return !blank($this->image);
    }

    public function getImageUrl()  
    {
        if(!$this->hasImage()) return null;

        return Storage::disk('public')->url($this->imagePath($this->product_id) . '/' . $this->image);
    }
}
