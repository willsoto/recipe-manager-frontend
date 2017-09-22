import Vue from 'vue';
import Vuex from 'vuex';

import recipes from './recipes/store';

Vue.use(Vuex);

// eslint-disable-next-line import/no-named-as-default-member
export const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    recipes
  }
});
