<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id','transactionable_id', 'transactionable_type', 'product_id', 'quantity','status'
    ];

    public function transactionable(): MorphTo
    {
        return $this->morphTo();
    }
}
