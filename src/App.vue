<template>
  <v-app id="app" standalone>
    <v-navigation-drawer persistent v-model="drawer">
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar tag="ul">Recipe Manager</v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-tile v-for="route in routes" :key="route.title" :to="route.path" replace>
          <v-list-tile-action>
            <v-icon>{{ route.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ route.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
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
export default {
  name: 'app',
  data() {
    return {
      drawer: false,
      routes: [
        {
          path: '/recipes',
          title: 'Recipes',
          icon: 'dashboard'
        },
        {
          path: '/recipes/new',
          title: 'New Recipe',
          icon: 'add'
        }
      ]
    };
  }
};
</script>
