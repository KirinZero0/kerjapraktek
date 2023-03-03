<?php

namespace Database\Seeders;

use App\Models\Slaver;
use Illuminate\Database\Seeder;

class SlaverSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Slaver::create([
            "codename" => "kenway",
            "name" => "Haytham Kenway",
            "password" => bcrypt("templar00"),
        ]);
    }
}
