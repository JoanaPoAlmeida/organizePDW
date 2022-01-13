<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class SubCategoriasFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'idSubCategoria' => $this->faker->id()->unique(),
            'nomeSubCategoria' => $this->faker->name()
        ];
    }
}
