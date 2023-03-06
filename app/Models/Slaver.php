<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Slaver extends Authenticatable
{
    use HasFactory,SoftDeletes,HasApiTokens;

    protected $table = 'slavers';

    protected $fillable = [
        'codename',
        'name',
        'password',
    ];

    protected $guarded = [
        "id",
        "created_at",
        "updated_at",
    ];
    protected $hidden = [];
}

