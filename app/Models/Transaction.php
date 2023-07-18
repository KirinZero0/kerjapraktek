<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'product_id', 'unit_price', 'quantity', 'subtotal', 'payment_id'
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function payments()
    {
        return $this->belongsTo(Payment::class, 'payment_id');
    }

    public function users()
    {
        return $this->belongsTo(Buyer::class, 'user_id');
    }

}
