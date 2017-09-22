import { Api } from '@/common/api';

import RecipeForm from '../common/RecipeForm';

export default {
  name: 'recipe-edit',
  props: ['recipe_id'],
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
  },
  created() {
    this.getRecipe(this.recipe_id);
  },
  methods: {
    async getRecipe(recipe_id) {
      const result = await Api.get(`/recipes/${recipe_id}`);

      this.recipe = Object.assign({}, this.recipe, result.data);
    }
  }
};
