<template>
  <div>
    <v-layout row>
      <v-flex xs4>
        <v-text-field label="Name" v-model="recipe.name"></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row v-for="(ingredient, index) in recipe.ingredients" :key="index">
      <v-flex xs1>
        <v-text-field label="Quantity" type="number" v-model="ingredient.quanity"></v-text-field>
      </v-flex>
      <v-flex xs3>
        <v-select label="Unit" v-bind:items="allUnits" v-model="ingredient.unit"></v-select>
      </v-flex>
      <v-flex xs3>
        <v-text-field label="Name" v-model="ingredient.name"></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-btn primary dark v-on:click="addIngredient">Add Ingredient</v-btn>
    </v-layout>
    <v-layout row>
      <v-flex xs4>
        <v-select label="Tags" v-bind:items="allTags" v-model="recipe.tags" multiple chips></v-select>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-btn primary dark v-on:click="saveRecipe">Save</v-btn>
    </v-layout>
  </div>
</template>

<script src="./form.js"></script>
