<template>
  <v-container fluid>
    <v-layout column class="mb-5">
      <h4>Editing {{ recipe.name }}</h4>
      <v-divider></v-divider>
    </v-layout>
    <recipe-form v-bind:recipe="recipe"></recipe-form>
  </v-container>
</template>

<script src="./edit.js"></script>
