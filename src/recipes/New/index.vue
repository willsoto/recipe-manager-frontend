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
          <v-flex xs4>
            <v-select label="Tags" v-bind:items="allTags" v-model="recipe.tags" multiple chips></v-select>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-btn primary dark v-on:click="saveRecipe">Save</v-btn>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script src="./new.js"></script>
