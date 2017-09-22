import { schema } from 'normalizr';

export const ingredient = new schema.Entity(
  'ingredients',
  {},
  {
    idAttribute: 'ingredient_id'
  }
);

export const instruction = new schema.Entity(
  'instructions',
  {},
  {
    idAttribute: 'instruction_id'
  }
);

export const tag = new schema.Entity(
  'tags',
  {},
  {
    idAttribute: 'tag_id'
  }
);

export const recipe = new schema.Entity(
  'recipes',
  {
    ingredients: [ingredient],
    instructions: [instruction],
    tags: [tag]
  },
  {
    idAttribute: 'recipe_id'
  }
);
