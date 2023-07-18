<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Retail extends Model
{
    use HasFactory;

    protected $fillable = [
        'reference_id', 'name', 'retail_outlet', 'amount', 'payment_code', 'expiration_date'
    ];

    public function payments(): MorphMany
    {
        return $this->morphMany(Payment::class, 'payable');
    }
}
