import './globals.css';
import IngredientSelect from './Navigator/IngredientSelector';
import MealList from './Navigator/MealList';

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
        <IngredientSelect />
      </section>
      <section>
        <header>
          <h2>Display Potential recipes</h2>
          <MealList />
        </header>
      </section>
      <footer>
        <p>&copy; 2025 Levi & Mat</p>
      </footer>
    </div>
  );
}
