import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) || initialValue
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  });

  return [value, setValue];
};

const useList = (initialValue = []) => {
  const [list, setList] = useState(Map(initialValue));

  const add = (key, value) => list.set(key, value);

  const edit = (key, value) => list.set(key, value);

  const remove = key => list.delete(key);

  return { list, add, remove, edit };
};

const useRecipes = () => {
  const [recipes, setRecipes] = useLocalStorage("recipes", []);

  const addRecipe = (name, ingredients) =>
    setRecipes([...recipes, { name, ingredients }]);

  const editRecipe = (name, ingredients) => {
    setRecipes(
      recipes.map(recipe =>
        recipe.name === name ? { name, ingredients } : recipe
      )
    );
  };

  const deleteRecipe = value => {
    setRecipes(recipes.filter(({ name }) => name !== value));
  };

  return { recipes, setRecipes, addRecipe, deleteRecipe, editRecipe };
};

export { useRecipes, useLocalStorage, useList };
