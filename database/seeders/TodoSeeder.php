<?php

namespace Database\Seeders;

use App\Models\Todo;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TodoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * Function creates 50 todos seed
     *
     * @return void
     */
    public function run()
    {
        Todo::factory()->count(10)->create();
    }
}
