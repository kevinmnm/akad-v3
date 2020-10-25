<template>
   <v-container>
      <v-row class="justify-center">
         <v-col cols='12' class='text-center'>
            <h3>Admin Database Access</h3>
         </v-col>
         <v-col cols="12" class="col-sm-8 col-md-6">
            <v-form action="http://localhost:5500/login" method="POST">
               <v-text-field
                  placeholder="ID"
                  type="email"
                  name="username"
                  autocomplete='false'
                  filled
                  required
               ></v-text-field>
               <v-text-field
                  placeholder="Password"
                  type="password"
                  name="password"
                  autocomplete='false'
                  filled
                  required
               ></v-text-field>
               <v-btn type="submit">Login</v-btn>
            </v-form>
         </v-col>
      </v-row>
      <ThemeButton />
   </v-container>
</template>

<script>
import ThemeButton from "@/components/theme-button.vue";

export default {
   name: "Admin",
   components: {
      ThemeButton
   },
   data() {
      return {};
   }
};
</script>

<style>
</style>