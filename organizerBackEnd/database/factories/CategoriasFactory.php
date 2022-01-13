<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CategoriasFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'idCategoria' => $this->faker->id()->unique(),
            'nomeCategoria' => $this->faker->name()
        ];
    }
}
