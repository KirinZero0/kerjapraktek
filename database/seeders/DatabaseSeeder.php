<?php

namespace Database\Seeders;

use App\Models\Buyer;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Buyer::create([
            "codename" => "mk01ade",
            "name" => "Adewale",
            "password" => Hash::make("jackdaw00"),
        ]);
    }
}
