<template>
   <v-container>
      <AdminLogin v-if="!authen"></AdminLogin>
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
   components: {
      ThemeButton,
      AdminLogin,
      AdminData
   },
   data() {
      return {};
   },
   computed: {
      authen() {
         return this.$store.state.auth_status;
      }
   },
   beforeMount() {
      this.$store.dispatch('fetchAuth');
   },
   // mounted() {
   //    this.$store.dispatch('fetchAuth');
   // }
};
</script>

<style>
</style>