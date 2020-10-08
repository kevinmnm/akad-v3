<template>
   <v-container>
      <v-card class='text-center font-weight-bold'>Search Bar Here</v-card>
      <v-row v-for="(all, ind) in content" :key="ind">
         <v-col class="red text-center">
            {{ all.topic }}
         </v-col>
      </v-row>
   </v-container>
</template>

<script>
import contents from "./contents.js";

export default {
   name: "listComp",
   data() {
      return {
         content: contents
      };
   }
};
</script>

<style>
</style>