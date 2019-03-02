import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) || initialValue
  );

  useEffect(() => window.localStorage.setItem(key, JSON.stringify(value)), [
    value
  ]);

  return [value, setValue];
};

const useRecipes = () => {
  const [recipes, setRecipes] = useLocalStorage("recipes", new Map());

  const addRecipe = (name, ingredients) =>
    setRecipes(recipes.set(name, ingredients));
  const editRecipe = (name, ingredients) =>
    setRecipes(recipes.set(name, ingredients));
  const deleteRecipe = key => {
    recipes.delete(key);
    setRecipes(recipes);
  };

  return { recipes, setRecipes, addRecipe, deleteRecipe, editRecipe };
};

export { useRecipes, useLocalStorage };
