<template>
   <v-container>
      <AdminLogin v-if="!authen"></AdminLogin>
      <AdminData></AdminData>
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
   mounted() {
      fetch(this.$store.state.fetch_url, {
         headers: {
            Authorization: 'Bearer ' + localStorage.token
         }
      })
         .then( data => console.log(data) );
   }
   // methods: {
   //    dispatch_auth() {
   //       this.$store.dispatch("fetchAuth");
   //    }
   // },
   // watch: {
   //    authen() {
   //       this.dispatch_auth();
   //    }
   // },
   // mounted() {
   //    this.dispatch_auth();
   // }
};
</script>

<style>
</style>