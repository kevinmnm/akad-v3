<template>
   <v-container class='red'>
      <v-row class='text-center'>
         <v-col cols='12'>
            <h1>{{renderIndex ? content[renderIndex].topic : null}}</h1>
         </v-col>
      </v-row>
   </v-container>
</template>

<script>
import contents from '@/components/contents.js';

export default {
   name: "learnedComp",
   data(){
      return {
         content: contents
      }
   },
   computed: {
      renderIndex(){
         return this.$store.state.render_index;
      }
   }
};
</script>

<style>
</style>