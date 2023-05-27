<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class VirtualAccount extends Model
{
    use HasFactory;

    protected $fillable = [
        'external_id', 'name', 'amount', 'bank_code', 'virtual_account_number','expiration_date'
    ];

    public function transactions(): MorphMany
    {
        return $this->morphMany(Transaction::class, 'transactionable');
    }
}
