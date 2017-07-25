<template>
  <div id="recipe-list">
    <div v-if="loading">
      <v-progress-circular indeterminate class="primary--text"></v-progress-circular>
    </div>

    <div v-if="recipes">
      <v-data-table v-bind:headers="headers" :items="recipes" hide-actions class="elevation-1">
        <template slot="items" scope="props">
          <td><router-link :to="{ name: 'view', params: { recipe_id: props.item.recipe_id }}">{{ props.item.name }}</router-link></td>
          <td>{{ props.item.ingredients.length }}</td>
          <td>{{ humanizeDate(props.item.updated_at) }}</td>
          <td class="text-xs-right">
            <v-btn light small :to="{ name: 'edit', params: { recipe_id: props.item.recipe_id }}">Edit</v-btn>
          </td>
        </template>
      </v-data-table>
    </div>

    <v-btn fixed bottom right dark fab class="pink" href="/recipes/new">
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>

<script src="./list.js"></script>
