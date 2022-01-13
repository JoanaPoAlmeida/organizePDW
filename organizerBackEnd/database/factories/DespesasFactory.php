<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class DespesasFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'idDespesa' => $this->faker->id()->unique(),
            'nomeDespesa' => $this->faker->name(),
            'valor' => $this->faker->integer(),
            'date' =>$this->faker->date()
        ];
    }
}
