<template>
   <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      fixed
      small
      bottom
      right
      @click="$vuetify.goTo(0)"
   >
      <v-icon small>mdi-arrow-up</v-icon>
   </v-btn>
</template>

<script>
export default {
   name: "scrollButton",
   data(){
      return {
         fab: false
      }
   },
   methods: {
      onScroll(e){
         if (typeof window === 'undefined') return
         const top = window.pageYOffset || e.target.scrollTop || 0;
         this.fab = top > 20;
      }
   }
};
</script>

<style>
</style>