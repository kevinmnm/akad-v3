<template>
   <v-btn
      @click="themeChanger()"
      left
      bottom
      fixed
      small
      elevation="5"
      class="animate__animated"
      :class="{'animate__bounce': bouncer}"
   >
      <v-icon dense>mdi-brightness-6</v-icon>
   </v-btn>
</template>

<script>
export default {
   name: "themeButton",
   data(){
      return {
         bouncer: false
      }
   },
   methods: {
      themeChanger(){
         this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
         localStorage.theme = this.$vuetify.theme.dark;
         console.log('Dark Mode: '+localStorage.theme);
      }
   },
   mounted() {
      setTimeout(()=>this.bouncer = true,1000);
   }
};
</script>

<style>
</style>