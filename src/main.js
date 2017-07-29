// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';

import { Api } from './common/api';

import App from './App';
import router from './router';

import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;
Vue.use(Vuetify);

// eslint-disable-next-line no-console
Api.get('/users/me').then(response => console.log(response.data));

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
