import { useState, useEffect } from "react"

const useLocalStorage = key => {
  const [value, setValue] = useState(
    () => new Map(JSON.parse(window.localStorage.getItem(key)))
  )

  useEffect(() => {
    window.localStorage.setItem(
      key,
      JSON.stringify(Array.from(value.entries()))
    )
  }, [value])

  return [value, setValue]
}

const useRecipes = () => {
  const [recipes, setRecipes] = useLocalStorage("recipes", new Map())

  const addRecipe = (name, ingredients) => {
    recipes.set(name, ingredients)
    setRecipes(new Map(recipes))
  }
  const editRecipe = (name, ingredients) => {
    recipes.set(name, ingredients)
    setRecipes(new Map(recipes))
  }
  const deleteRecipe = key => {
    recipes.delete(key)
    setRecipes(new Map(recipes))
  }

  return { recipes, setRecipes, addRecipe, deleteRecipe, editRecipe }
}

export { useRecipes, useLocalStorage }
