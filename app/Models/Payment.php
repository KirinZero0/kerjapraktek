<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'payable_type', 'payable_id', 'amount', 'status'
    ];

    
    public function payable(): MorphTo
    {
        return $this->morphTo();
    }

}
