import { normalize, denormalize } from 'normalizr';

import { Api } from '@/common/api';

import { recipe } from './schema';

const recipeListSchema = [recipe];

const SET_LOADING = 'SET_LOADING';
const SET_RECIPES = 'SET_RECIPES';

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
  }
};

const actions = {
  async fetchRecipes({ commit }) {
    commit(SET_LOADING, {
      loading: true
    });

    const response = await Api.get('/recipes');
    const recipes = response.data;

    commit(SET_RECIPES, {
      recipes
    });
    commit(SET_LOADING, {
      loading: false
    });
  }
};

const mutations = {
  [SET_RECIPES](state, { recipes }) {
    const normalizedRecipes = normalize(recipes, recipeListSchema);

    state.entities = normalizedRecipes.entities;
    state.result = normalizedRecipes.result;
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
