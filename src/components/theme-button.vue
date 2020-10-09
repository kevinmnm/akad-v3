<template>
   <v-btn @click="$vuetify.theme.dark = !$vuetify.theme.dark" left bottom fixed small elevation="5">
      <v-icon dense>mdi-brightness-6</v-icon>
   </v-btn>
</template>

<script>
export default {
   name: "themeButton"
};
</script>

<style>
</style>