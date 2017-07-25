import _ from 'lodash';

import { Api } from '@/common/api';

export default {
  name: 'recipe-form',
  props: ['recipe'],
  data() {
    return {
      allTags: [],
      allUnits: [],
      tagsById: {}
    };
  },
  created() {
    this.getTags();
    this.getUnits();

    if (!this.recipe.recipe_id) {
      this.addIngredient();
    }
  },
  methods: {
    async getTags() {
      const result = await Api.get('/tags');

      this.allTags = _.map(result.data, tag => {
        return {
          text: tag.name,
          value: tag.tag_id
        };
      });

      this.tagsById = _.keyBy(result.data, 'tag_id');
    },
    async saveRecipe() {
      let result;

      this.recipe.tags = _.map(this.recipe.tags, id => this.tagsById[id]);

      if (!this.recipe.recipe_id) {
        result = await Api.post('/recipes', this.recipe);
      } else {
        result = await Api.put(`/recipes/${this.recipe.recipe_id}`, this.recipe);
      }

      if (result.status === 200) {
        this.$router.push('list');
      }
    },
    async getUnits() {
      const result = await Api.get('/ingredients/units');

      this.allUnits = result.data;
    },
    addIngredient() {
      this.recipe.ingredients.push({
        name: null,
        quanity: 0,
        unit: null
      });
    }
  }
};
