<template>
   <v-container>
      <v-row class="d-flex justify-center green rounded">
         <v-card
            v-for="(all, ind) in content"
            :key="all.uniqueIdMatch"
            width="50px"
            height="50px"
            style='font-size:20px;'
            class="
               primary 
               ma-2 
               d-flex
               justify-center 
               align-center
               font-weight-bold
            "
         >
            {{ ind }}
         </v-card>
      </v-row>
   </v-container>
</template>

<script>
import contents from "./contents.js";

export default {
   name: "blockComp",
   data() {
      return {
         content: contents
      };
   }
};
</script>

<style>
</style>