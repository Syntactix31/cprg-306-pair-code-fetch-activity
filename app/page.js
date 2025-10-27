"use client"

import { useState } from 'react'
import './globals.css'
import IngredientSelect from './Navigator/IngredientSelector';
import MealList from './Navigator/MealList';
//import MealCard from './Navigator/MealCard';

export default function Home() {
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  const handleSelectIngredient = (ingredientName) => {
    setSelectedIngredient(ingredientName);
  }

  return (
    <div>
      <main>
        <header>
          <h1>Pair Programming Fetch Activity</h1>
        </header>
      </main>
      <section>
        <header>
          <h2>List of Ingredients</h2>
        </header>
        <IngredientSelect
          selectedIngredient={selectedIngredient}
          onSelectIngredient={handleSelectIngredient}
        />
      </section>
      <section>
        <header>
          <h2>Display Potential recipes</h2>
          <MealList ingredient={selectedIngredient}/>
        </header>
      </section>
      <footer>
        <p>&copy; 2025 Levi & Mat</p>
      </footer>
    </div>
  );
}
