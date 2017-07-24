<template>
  <div id="recipe-list">
    <div v-if="loading">
      <v-progress-circular indeterminate class="primary--text"></v-progress-circular>
    </div>

    <div v-if="recipes">
      <v-data-table v-bind:headers="headers" :items="recipes" hide-actions class="elevation-1">
        <template slot="items" scope="props">
          <td><router-link :to="{ name: 'view', params: { recipe_id: props.item.recipe_id }}">{{ props.item.name }}</router-link></td>
          <td>{{ props.item.updated_at }}</td>
        </template>
      </v-data-table>
    </div>

    <v-btn fixed bottom right dark fab class="pink" href="/recipes/new">
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { Api } from '@/common/api';

export default {
  name: 'recipe-list',
  data() {
    return {
      headers: [{
        text: 'Name',
        align: 'left',
        sortable: true,
        value: 'name'
      }, {
        text: 'Last updated',
        align: 'left',
        sortable: true,
        value: 'updated_at'
      }],
      loading: false,
      recipes: null
    };
  },
  created() {
    this.getRecipes();
  },
  methods: {
    async getRecipes() {
      this.loading = true;

      const result = await Api.get('/recipes');

      this.recipes = result.data;
      this.loading = false;
    }
  }
};
</script>
