import RecipeForm from '../common/RecipeForm';

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
