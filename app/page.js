import Link from 'next/link';
// import MealCard from '../Navigator/MealCard.jsx';
import MealList from './Navigator/MealList.jsx';
import IngredientSelect from './Navigator/IngredientSelector.jsx';

export default function Home() {
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
      </section>
      <section>
        <header>
          <h2>Display Potential recipes</h2>
        </header>
      </section>
      <footer>
        <p>&copy; 2025 GROUP NAME</p>
      </footer>
    </div>
  );
}
