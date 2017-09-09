// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueApollo from 'vue-apollo';

import App from './App';
import router from './router';
import { apolloClient } from './common/api';

import 'vuetify/dist/vuetify.min.css';

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueApollo);

new Vue({
  el: '#app',
  router,
  apolloProvider,
  template: '<App/>',
  components: { App }
});
