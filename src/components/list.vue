<template>
  <v-container>
     <v-row v-for='(all, ind) in content' :key='ind'>
        <v-col>{{all.topic}}</v-col>
     </v-row>
  </v-container>
</template>

<script>
import contents from './contents.js';

export default {
   name: "listComp",
   data(){
      return {
         content: contents
      }
   }
}
</script>

<style>

</style>