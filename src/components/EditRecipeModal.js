import React, { useState } from "react";
import {
  Modal,
  ModalCard,
  ModalCardBody,
  Delete,
  ModalCardHeader,
  Field,
  Label,
  Control,
  Input,
  ModalCardTitle,
  TextArea,
  ModalCardFooter,
  Button
} from "bloomer";

const EditRecipeModal = ({ isActive, onClose, onSave, title, recipe }) => {
  const [ingredients, setIngredients] = useState(
    recipe ? recipe.ingredients : ""
  );
  const [name, setName] = useState(recipe ? recipe.name : "");

  const saveRecipe = e => {
    onSave(name, ingredients);
    onClose(e);
  };

  return (
    <Modal isActive={isActive}>
      <ModalCard>
        <ModalCardHeader>
          <ModalCardTitle>{title || "Modifying Recipe"}</ModalCardTitle>
          <Delete onClick={onClose} />
        </ModalCardHeader>
        <ModalCardBody>
          <Field>
            <Label>Recipe Name</Label>
            <Control>
              <Input
                type="text"
                placeholder="Recipe Name"
                onChange={e => setName(e.target.value)}
                value={name}
              />
            </Control>
          </Field>
          <Field>
            <Label>Ingredients</Label>
            <Control>
              <TextArea
                onChange={e => setIngredients(e.target.value)}
                value={ingredients}
              />
            </Control>
          </Field>
        </ModalCardBody>
        <ModalCardFooter>
          <Button isColor="warning" onClick={onClose}>
            Cancel
          </Button>
          <Button isColor="success" onClick={saveRecipe}>
            Save
          </Button>
        </ModalCardFooter>
      </ModalCard>
    </Modal>
  );
};

export default EditRecipeModal;
