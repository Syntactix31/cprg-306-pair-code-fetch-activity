"use client"
import React from "react";

export default function IngredientSelect({ ingredients, onSelectIngredient, selectedIngredient }) {
  
  return (
    <div>
      {ingredients.map((ingredient) => (
        <button
          key={ingredient}
          onClick={() => onSelectIngredient(ingredient)}
          style={{
            margin: "0.5rem",
            padding: "0.5rem 1rem",
            border: ingredient === selectedIngredient ? "2px solid green" : "1px solid gray",
            background: ingredient === selectedIngredient ? "#e0ffe0" : "#fff"
          }}
        >
          {ingredient}
        </button>
      ))}
    </div>

  );

}








