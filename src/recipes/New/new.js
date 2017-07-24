import _ from 'lodash';

import { Api } from '@/common/api';

export default {
  name: 'recipe-new',
  data() {
    return {
      recipe: {
        name: null,
        tags: []
      },
      allTags: [],
      tagsById: {}
    };
  },
  created() {
    this.getTags();
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
      this.recipe.tags = _.map(this.recipe.tags, id => this.tagsById[id]);
      const result = await Api.post('/recipes', this.recipe);

      if (result.status === 200) {
        this.recipe = Object.assign({}, this.recipe, result.data);
      }
    }
  }
};
