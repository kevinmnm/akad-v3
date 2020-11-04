<template>
   <v-app>
      <v-sheet
         class="pa-3"
      >
         <v-skeleton-loader
            class="mx-auto"
            max-width="300"
            type="card"
         ></v-skeleton-loader>
      </v-sheet>
   </v-app>
</template>

<script>
export default {
   name: "loadingComp"
};
</script>

<style>
</style>