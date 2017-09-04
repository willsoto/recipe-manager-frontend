<template>
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
      <v-divider dark class="my-4"></v-divider>
      <v-list-tile v-if="current_user" to="/auth/logout" replace>
        Sign out ({{ current_user.email }})
      </v-list-tile>
      <v-list-tile v-if="!current_user" to="/auth/google" replace>
        Sign In
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script src="./navigation.js"></script>
