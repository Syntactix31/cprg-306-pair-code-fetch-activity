"use client"
import { useEffect, useState } from "react";

function MealList({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!ingredient) return; // do nothing if no ingredient provided

    setIsLoading(true);
    setError("");
    setMeals([]);

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)

      .then(res => res.json())
      .then(data => {
        setMeals(data.meals || []); // handle null
        setIsLoading(false);
      })
      .catch(err => {
        setError("Failed to fetch meals");
        setIsLoading(false);
      });
  }, [ingredient]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (meals.length === 0) return <p>No meals found for {ingredient}.</p>;

  return (
    <ul>
      {meals.map(meal => (
        <li key={meal.idMeal}>{meal.strMeal}</li>
      ))}
    </ul>
  );
}

export default MealList;
