<template>
  <v-container grid-list-xl class="pa-0 ma-0">
    <v-layout row wrap>
      <v-flex md6>
        <v-card class="mb-5">
          <v-card-text>
            <v-text-field label="Name" v-model="recipe.name"></v-text-field>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Instructions</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <v-layout column v-for="(instruction, index) in recipe.instructions" :key="index">
              <v-layout row>
                <v-flex md3>
                  <v-text-field label="Time" type="number" v-model="instruction.time"></v-text-field>
                </v-flex>
                <v-flex md4>
                  <v-select label="Duration" item-text="key" item-value="value" v-bind:items="durationValues" v-model="instruction.duration"></v-select>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex>
                  <v-text-field label="Text" type="text" multi-line v-model="instruction.text"></v-text-field>
                </v-flex>
              </v-layout>
            </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-btn flat v-on:click="addInstruction">Add Instruction</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex md6>
        <v-card class="mb-5">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Ingredients</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <v-layout row v-for="(ingredient, index) in recipe.ingredients" :key="index">
              <v-flex md3>
                <v-text-field label="Quantity" type="number" v-model="ingredient.quanity"></v-text-field>
              </v-flex>
              <v-flex md3>
                <v-select label="Unit" v-bind:items="allUnits" v-model="ingredient.unit"></v-select>
              </v-flex>
              <v-flex>
                <v-text-field label="Name" v-model="ingredient.name"></v-text-field>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-btn flat v-on:click="addIngredient">Add Ingredient</v-btn>
          </v-card-actions>
        </v-card>
        <v-layout row wrap>
          <v-flex>
            <v-card>
              <v-card-title>
                <div>
                  <h3 class="headline mb-0">Tags</h3>
                </div>
              </v-card-title>
              <v-card-text>
                <v-select label="Tags" v-bind:items="allTags" v-model="recipe.tags" multiple chips></v-select>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-divider class="mt-4 mb-4"></v-divider>
    <v-flex>
      <v-btn class="ma-0" primary dark v-on:click="saveRecipe">Save regular</v-btn>
      <v-btn class="ma-0" primary dark v-on:click="createRecipe">Save graphql</v-btn>
    </v-flex>
  </v-container>
</template>

<script src="./form.js"></script>
