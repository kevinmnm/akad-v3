<template>
   <v-container>
      <LoadingPage v-show="show_loading_page"></LoadingPage>
      <AdminLogin v-if="!authen"></AdminLogin>
      <AdminData v-else></AdminData>
      <ThemeButton />
   </v-container>
</template>

<script>
import LoadingPage from "@/components/loading-page.vue";
import ThemeButton from "@/components/theme-button.vue";
import AdminLogin from "@/components/admin-login.vue";
import AdminData from "@/components/admin-data.vue";

export default {
   name: "AdminPage",
   components: {
      LoadingPage,
      ThemeButton,
      AdminLogin,
      AdminData
   },
   data() {
      return {
         show_loading_page: true
      };
   },
   computed: {
      authen() {
         return this.$store.state.auth_status;
      }
   },
   methods: {
      async loading_page() {
         await this.$store.dispatch("fetchAuth");
         this.show_loading_page = false;
      }
   },
   mounted() {
      this.loading_page();
   }
};
</script>

<style>
</style>