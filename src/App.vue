<template>
   <v-app>
      <v-app-bar absolute dense app>
         <v-btn
            @click="$store.commit('change_view_type', 'block'), reset()"
            height="100%"
            :width="nav_width"
            class="font-weight-bold pa-0 ma-1"
            :to="{ name: 'Main' }"
            :color="!admin && main_view_type === 'block' ? 'info' : null"
            text
            dense
            tile
         >
            <span class="hidden-xs-only">block</span>
            <v-icon class="hidden-sm-and-up">mdi-square-rounded</v-icon>
         </v-btn>
         <v-btn
            @click="$store.commit('change_view_type', 'list'), reset()"
            :color="!admin && main_view_type === 'list' ? 'info' : null"
            height="100%"
            :width="nav_width"
            class="font-weight-bold ma-1"
            :to="{ name: 'Main' }"
            text
            tile
         >
            <span class="hidden-xs-only">list</span>
            <v-icon class="hidden-sm-and-up"
               >mdi-format-list-bulleted-square</v-icon
            >
         </v-btn>
         <v-btn
            @click="$store.commit('change_view_type', 'calendar'), reset()"
            :color="!admin && main_view_type === 'calendar' ? 'info' : null"
            height="100%"
            :width="nav_width"
            class="font-weight-bold ma-1"
            :to="{ name: 'Main' }"
            text
            tile
         >
            <span class="hidden-xs-only">calendar</span>
            <v-icon class="hidden-sm-and-up">mdi-calendar-month</v-icon>
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
                  :to="{ name: 'Admin' }"
               >
                  <v-icon height="100%">mdi-shield-account-outline</v-icon>
               </v-btn>
            </template>
            <span>Admin</span>
         </v-tooltip>
      </v-app-bar>

      <v-main>
         <router-view></router-view>
      </v-main>
   </v-app>
</template>

<script>
export default {
   name: "App",
   data() {
      return {
         admin: false
      };
   },
   computed: {
      content() {
         return this.$store.state.notes;
      },
      nav_width() {
         return this.$vuetify.breakpoint.name === "xs" ? "50px" : "100px";
      },
      main_view_type: {
         get() {
            return this.$store.state.main_view_type;
         }
      }
   },
   methods: {
      reset() {
         this.content.forEach(val => (val.show = true));
         this.admin = false;
      }
   },
   mounted() {
      if (process.env.NODE_ENV === 'production' && location.protocol !== "https:") {
         location.replace(
            `https:${location.href.substring(location.protocol.length)}`
         );
      }

      if (!localStorage.token) {
         localStorage.token = "cloaked";
      }
      this.$store.dispatch("fetchNotes");

      if (localStorage.theme !== undefined) {
         this.$vuetify.theme.dark = localStorage.theme;
      }

      // this.$store.dispatch('connectSocket');
   },
   beforeCreate() {
      this.$store.commit("DETECT_ENV");
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

u {
   text-underline-position: under;
}

a {
   text-decoration: none;
}
</style>