import { Api } from '@/common/api';

export default {
  name: 'recipe-view',
  props: ['recipe_id'],
  data() {
    return {
      recipe: {}
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
