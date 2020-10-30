<template>
   <v-app>
      <v-app-bar absolute dense app>
         <v-btn
            @click="$store.commit('change_view_type', 'block'), reset()"
            text
            height="100%"
            class="font-weight-bold pa-0"
         >
            block
         </v-btn>
         <v-btn
            @click="$store.commit('change_view_type', 'list'), reset()"
            text
            height="100%"
            class="font-weight-bold"
         >
            list
         </v-btn>
         <v-btn
            @click="$store.commit('change_view_type', 'calendar'), reset()"
            text
            height="100%"
            class="font-weight-bold"
         >
            calendar
         </v-btn>

         <v-spacer></v-spacer>

         <v-tooltip bottom>
            <template v-slot:activator="{ on }">
               <v-btn
                  text
                  class="hidden-xs-only"
                  height="100%"
                  v-on="on"
                  @click="admin = true"
               >
                  <v-icon height="100%">mdi-shield-account-outline</v-icon>
               </v-btn>
            </template>
            <span>Admin</span>
         </v-tooltip>
      </v-app-bar>

      <v-main>
         <Main v-show="!admin" />
         <Admin v-show="admin" />
      </v-main>
   </v-app>
</template>

<script>
import Main from "./views/Main.vue";
import Admin from "./views/Admin.vue";

export default {
   name: "App",
   components: {
      Main,
      Admin
   },
   data() {
      return {
         admin: false
      };
   },
   computed: {
      content() {
         return this.$store.state.notes;
      }
   },
   methods: {
      reset() {
         this.content.forEach(val => (val.show = true));
         this.admin = false;
      }
   },
   mounted() {
      this.$store.dispatch("fetchNotes");

      if (localStorage.theme !== undefined) {
         this.$vuetify.theme.dark = localStorage.theme;
      }
   }
};
</script>

<style>
/* width */
::-webkit-scrollbar {
   width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
   background: #101010;
}

/* Handle */
::-webkit-scrollbar-thumb {
   background: #888;
}
</style>