<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class EWallet extends Model
{
    use HasFactory;

    protected $fillable = [
        'reference_id', 'name', 'amount', 'channel_code', 'checkout_url','status'
    ];

    public function transactions(): MorphMany
    {
        return $this->morphMany(Transaction::class, 'transactionable');
    }
}
