<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Retail extends Model
{
    use HasFactory;

    protected $fillable = [
        'external_id', 'name', 'retail_outlet', 'amount', 'payment_code', 'expiration_date'
    ];

    public function transactions(): MorphMany
    {
        return $this->morphMany(Transaction::class, 'transactionable');
    }
}
