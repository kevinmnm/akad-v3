<template>
   <v-app>
      <v-app-bar absolute shaped dense app>
         <v-btn 
         @click="$store.commit('change_view_type', 'block')" 
         text
         height='100%'
         class='font-weight-bold'>
            block
         </v-btn>
         <v-btn @click="$store.commit('change_view_type', 'list')" 
         text
         height='100%'
         class='font-weight-bold'>
            list
         </v-btn>
         <v-btn @click="$store.commit('change_view_type', 'calendar')" 
         text
         height='100%'
         class='font-weight-bold'>
            calendar
         </v-btn>

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
