<template>
  <v-card class="grey lighten-4 elevation-0">
    <v-card-text>
      <v-container fluid>
        <v-layout column class="mb-5">
          <h4>New Recipe</h4>
          <v-divider></v-divider>
        </v-layout>
        <v-layout row>
          <v-flex xs4>
            <v-text-field label="Name" v-model="recipe.name"></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-btn primary dark v-on:click="saveRecipe">Save</v-btn>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { Api } from '@/common/api';

export default {
  name: 'recipe-new',
  data() {
    return {
      recipe: {
        name: null
      }
    }
  },
  methods: {
    async saveRecipe() {
      const result = await Api.post('/recipes', this.recipe);

      this.recipe = Object.assign({}, this.recipe, result.data);
    }
  }
}
</script>
