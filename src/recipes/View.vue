<template>
  <div id="recipe-view">
    <v-card class="grey lighten-4 elevation-0">
      <v-card-text>
        <v-container fluid>
          <v-layout column class="mb-5">
            <h4>{{ recipe.name }}</h4>
            <v-divider></v-divider>
          </v-layout>
          <v-layout row>
            <v-flex xs4>
              <code>{{ recipe }}</code>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { Api } from '@/common/api';

export default {
  name: 'recipe-view',
  props: ['recipe_id'],
  data() {
    return {
      recipe: {}
    }
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
}
</script>
