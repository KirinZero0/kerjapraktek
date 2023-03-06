<?php

namespace Database\Seeders;

use App\Models\Slave;
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
        Slave::create([
            "codename" => "mk01ade2",
            "name" => "Adewale",
            "owner_name" => "Edward Kenway",
            "password" => Hash::make("jackdaw001"),
        ]);
    }
}
