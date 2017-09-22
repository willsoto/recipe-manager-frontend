<template>
  <v-container fluid>
    <v-layout column class="mb-5">
      <h4>New Recipe</h4>
      <v-divider></v-divider>
    </v-layout>
    <recipe-form v-bind:recipe="recipe"></recipe-form>
  </v-container>
</template>

<script src="./new.js"></script>
