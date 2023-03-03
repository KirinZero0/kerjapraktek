<?php

namespace Database\Seeders;

use App\Models\Slave;
use Illuminate\Database\Seeder;

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
            "code" => "mk01ade",
            "name" => "Adewale",
            "owner_name" => "Edward Kenway",
            "password" => bcrypt("jackdaw00"),
            "level" => "leader"
        ]);
    }
}
