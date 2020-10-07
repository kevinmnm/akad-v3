<template>
   <v-app>
      <v-app-bar absolute shaped dense app>
         <v-btn @click="$store.commit('change_view_type', 'block')">block</v-btn>
         <v-btn @click="$store.commit('change_view_type', 'list')">list</v-btn>
         <v-btn @click="$store.commit('change_view_type', 'calendar')">calendar</v-btn>

         <v-spacer></v-spacer>
      </v-app-bar>

      <v-main>
         <Main />
      </v-main>

   </v-app>
</template>

<script>
import Main from "./views/Main.vue";

export default {
   name: "App",
   components: {
      Main
   },
   data: () => ({})
};
</script>
