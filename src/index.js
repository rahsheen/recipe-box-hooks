import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "bulma";
import { Container, Section, Button, Hero, HeroBody, Title } from "bloomer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRecipes } from "./hooks";
import Recipe from "./components/Recipe";
import EditRecipeModal from "./components/EditRecipeModal";
import "./styles.css";

function App() {
  const { recipes, addRecipe, deleteRecipe, editRecipe } = useRecipes([]);
  const [addingRecipe, setAddingRecipe] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(false);

  return (
    <>
      <Hero isColor="info" isSize="small">
        <HeroBody>
          <Container hasTextAlign="centered">
            <Title>Recipe Box</Title>
          </Container>
        </HeroBody>
      </Hero>
      <Section>
        <Button
          isColor="danger"
          onClick={() => setAddingRecipe(true)}
          isSize="large"
          className="fab"
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <Container>
          <ul>
            {recipes.length
              ? recipes.map(({ name, ingredients }) => (
                  <Recipe
                    key={ingredients}
                    name={name}
                    ingredients={ingredients}
                    onDelete={() => deleteRecipe(name)}
                    onEdit={() => setCurrentRecipe({ name, ingredients })}
                  />
                ))
              : "No Recipes"}
          </ul>
          {addingRecipe && (
            <EditRecipeModal
              isActive={addingRecipe}
              onClose={() => setAddingRecipe(false)}
              onSave={addRecipe}
            />
          )}
          {currentRecipe && (
            <EditRecipeModal
              isActive={!!currentRecipe}
              recipe={currentRecipe}
              onClose={() => setCurrentRecipe("")}
              onSave={editRecipe}
            />
          )}
        </Container>
      </Section>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
