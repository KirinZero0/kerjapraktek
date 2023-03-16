<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = [
        'custom_id',
        'name',
        'description',
        'race',
        'price',
        // 'image_path',
    ];

    protected $guarded = [
        "product_id",
        "created_at",
        "updated_at",
    ];

    protected $hidden = [];

    public function productImages()
    {
        return $this->hasMany(ProductImage::class);
    }
}
