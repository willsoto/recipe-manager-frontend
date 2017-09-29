import { schema } from 'normalizr';

export const ingredientSchema = new schema.Entity(
  'ingredients',
  {},
  {
    idAttribute: 'ingredient_id'
  }
);

export const instructionSchema = new schema.Entity(
  'instructions',
  {},
  {
    idAttribute: 'instruction_id'
  }
);

export const tagSchema = new schema.Entity(
  'tags',
  {},
  {
    idAttribute: 'tag_id'
  }
);

export const recipeSchema = new schema.Entity(
  'recipes',
  {
    ingredients: [ingredientSchema],
    instructions: [instructionSchema],
    tags: [tagSchema]
  },
  {
    idAttribute: 'recipe_id'
  }
);
