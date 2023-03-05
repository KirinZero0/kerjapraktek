<?php

namespace Database\Seeders;

use App\Models\Slaver;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

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
            "password" => Hash::make("templar00"),
        ]);
    }
}
