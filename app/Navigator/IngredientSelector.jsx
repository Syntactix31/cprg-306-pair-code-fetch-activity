"use client";
import React from "react";
import ingredientsData from "../data/ingredients.json";

export default function IngredientSelect({ onSelectIngredient, selectedIngredient }) {
  return (
    <div>
      {ingredientsData.map((ingredient) => (
        <button
          key={ingredient.id}
          onClick={() => onSelectIngredient(ingredient.name)}
          style={{
            margin: "0.5rem",
            padding: "0.5rem 1rem",
            border: ingredient.name === selectedIngredient ? "2px solid green" : "1px solid gray",
            background: ingredient.name === selectedIngredient ? "#e0ffe0" : "#fff",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "1rem"
          }}
        >
          {ingredient.emoji} {ingredient.name}
        </button>
      ))}
    </div>
  );
}
