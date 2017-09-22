import RecipeForm from '../common/recipe-form';

export default {
  name: 'recipe-new',
  components: {
    'recipe-form': RecipeForm
  },
  data() {
    return {
      recipe: {
        name: null,
        tags: [],
        ingredients: [],
        instructions: []
      }
    };
  }
};
