<template>
   <v-container class="loading-page" fluid>
   <v-sheet class="d-flex justify-center align-center text-center" width="100%" height="100%">
      <v-progress-circular
         :size="70"
         :width="7"
         color="primary"
         indeterminate
      ></v-progress-circular>
   </v-sheet>
   </v-container>
</template>

<script>
export default {
   name: "loadingPageComp"
};
</script>

<style scoped>

.loading-page {
   position: absolute;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   z-index: 10;
}

</style>