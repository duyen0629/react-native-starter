import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  const favoritesContext = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) => favoritesContext.ids.includes(meal.id));
  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;
