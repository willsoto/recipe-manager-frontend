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

<script src="./view.js"></script>
