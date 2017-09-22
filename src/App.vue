<template>
  <v-app id="app" standalone>
    <navigation v-bind:drawer="drawer"></navigation>
    <v-toolbar class="indigo" dark>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import Navigation from '@/common/navigation';

export default {
  name: 'app',
  components: {
    navigation: Navigation
  },
  data() {
    return {
      drawer: false
    }
  }
};
</script>
