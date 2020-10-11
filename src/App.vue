<template>
   <v-app>
      <v-app-bar absolute shaped dense app>
         <v-btn 
         @click="$store.commit('change_view_type', 'block'), reset()" 
         text
         height='100%'
         class='font-weight-bold'>
            block
         </v-btn>
         <v-btn @click="$store.commit('change_view_type', 'list'), reset()" 
         text
         height='100%'
         class='font-weight-bold'>
            list
         </v-btn>
         <v-btn @click="$store.commit('change_view_type', 'calendar'), reset()" 
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
import contents from "@/components/contents.js";

export default {
   name: "App",
   components: {
      Main
   },
   data(){
      return {
         content: contents
      }
   },
   methods: {
      reset(){
         this.content.forEach( val => val.show = true );
      }
   }
};
</script>
