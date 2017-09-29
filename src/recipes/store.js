import { normalize, denormalize } from 'normalizr';
import gql from 'graphql-tag';

import { apolloClient } from '@/common/api';

import { recipeSchema } from './schema';

const recipeListSchema = [recipeSchema];

const SET_LOADING = 'SET_LOADING';
const SET_RECIPES = 'SET_RECIPES';
const SET_RECIPE = 'SET_RECIPE';

const state = {
  loading: false
};

const getters = {
  getLoading: state => state.loading,
  getRecipes: state => {
    if (state.loading) {
      return [];
    }

    const result = denormalize(state.result, recipeListSchema, state.entities);

    return result;
  },
  getRecipe: state => recipe_id => {
    if (state.loading) {
      return {};
    }

    const result = denormalize(state.result, recipeSchema, state.entities);

    return result;
  }
};

const actions = {
  async fetchRecipes({ commit }) {
    commit(SET_LOADING, {
      loading: true
    });

    const response = await apolloClient.query({
      query: gql`
        {
          recipes {
            recipe_id
            name
            updated_at
            ingredients {
              ingredient_id
              name
            }
          }
        }
      `
    });

    const { recipes } = response.data;

    commit(SET_RECIPES, {
      recipes
    });
    commit(SET_LOADING, {
      loading: false
    });
  },
  async fetchRecipe({ commit }, recipe_id) {
    commit(SET_LOADING, {
      loading: true
    });

    const response = await apolloClient.query({
      query: gql`
        query Recipe($recipe_id: ID) {
          recipe(recipe_id: $recipe_id) {
            recipe_id
            name
          }
        }
      `,
      variables: {
        recipe_id: recipe_id
      }
    });

    const { recipe } = response.data;

    commit(SET_RECIPE, {
      recipe
    });
    commit(SET_LOADING, {
      loading: false
    });
  }
};

const mutations = {
  [SET_RECIPES](state, { recipes }) {
    const normalizedRecipes = normalize(recipes, recipeListSchema);

    state.entities = {
      ...state.entities,
      ...normalizedRecipes.entities
    };
    state.result = {
      ...state.result,
      ...normalizedRecipes.result
    };
  },
  [SET_RECIPE](state, { recipe }) {
    const normalizedRecipe = normalize(recipe, recipeSchema);

    state.entities = normalizedRecipe.entities;
    state.result = normalizedRecipe.result;
  },
  [SET_LOADING](state, { loading }) {
    state.loading = loading;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
