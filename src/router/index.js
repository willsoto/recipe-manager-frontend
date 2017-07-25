import Vue from 'vue';
import Router from 'vue-router';

import List from '@/recipes/List';
import New from '@/recipes/New';
import View from '@/recipes/View';
import Edit from '@/recipes/Edit';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/recipes'
    },
    {
      path: '/recipes',
      name: 'list',
      component: List
    },
    {
      path: '/recipes/new',
      name: 'new',
      component: New
    },
    {
      path: '/recipes/:recipe_id',
      name: 'view',
      component: View,
      props: true
    },
    {
      path: '/recipes/:recipe_id/edit',
      name: 'edit',
      component: Edit,
      props: true
    }
  ]
});
