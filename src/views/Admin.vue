<template>
   <v-container>
      <AdminLogin v-if="temp"></AdminLogin>
      <AdminData v-else></AdminData>
      <ThemeButton />
   </v-container>
</template>

<script>
import ThemeButton from "@/components/theme-button.vue";
import AdminLogin from "@/components/admin-login.vue";
import AdminData from "@/components/admin-data.vue";

export default {
   name: "AdminPage",
   data(){
      return {
         temp: true
      }
   },
   components: {
      ThemeButton,
      AdminLogin,
      AdminData
   }
};
</script>

<style>
</style>