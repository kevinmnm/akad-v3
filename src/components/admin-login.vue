<template>
   <v-row class="flex-column justify-center">
      <v-col cols="12" class="text-center">
         <h3>Admin Database Access</h3>
      </v-col>
      <v-col
         cols="12"
         class="col-sm-8 col-md-6 ma-auto"
         style="border: 1px solid grey; position: relative;"
      >
         <v-form autocomplete="off">
            <v-text-field
               label="Username"
               type="text"
               v-model="username_fetch"
               filled
               required
            ></v-text-field>
            <v-text-field
               label="Password"
               type="password"
               v-model="password_fetch"
               filled
               required
            ></v-text-field>
            <v-btn large @click="login()">Login</v-btn>
            <v-btn large absolute right @click="dialog = true">api</v-btn>
         </v-form>
         <v-dialog v-model="dialog" overlay-opacity="0.8" persistent>
            <v-card class="text-center d-flex flex-column">
               <v-card-title class="d-block"><u>API INFO</u></v-card-title>
               <v-card-text class="d-block">
                  <a
                     class="subtitle-1"
                     href="https://adakapi.herokuapp.com"
                     target="_blank"
                     >https://adakapi.herokuapp.com</a
                  >
               </v-card-text>
               <v-card-text
                  >This application is connected to an REST API that I made. The
                  API will provide notes list and authentication. This
                  application is using de-coupling + REST API method as it's
                  developed with Vue.js. Authentication is implemented with JWT.
               </v-card-text>
               <v-card-text>
                  <a href="https://github.com/kevinmnm" target="_blank"
                     >Creator: Kevin Song</a
                  >
               </v-card-text>
            </v-card>
            <v-btn @click="dialog = false" class="primary">close</v-btn>
         </v-dialog>
      </v-col>
      <v-col cols="12" class="col-sm-8 col-md-6 ma-auto">
         <v-progress-linear
            indeterminate
            rounded
            v-show="loader"
            height="6"
            width="50%"
         ></v-progress-linear>
      </v-col>
   </v-row>
</template>

<script>
export default {
   name: "adminLoginComp",
   data() {
      return {
         username_fetch: "",
         password_fetch: "",
         dialog: false,
         loader: false
      };
   },
   methods: {
      async login() {
         this.loader = true;
         let response = await fetch(this.$store.state.fetch_url + "/login", {
            headers: {
               "Content-Type": "application/json"
            },
            // credentials: 'include',
            method: "POST",
            body: JSON.stringify({
               username: this.username_fetch,
               password: this.password_fetch
            })
         });
         this.loader = false;
         if (response.status === 401)
            return response.json().then(data => alert(data));
         response
            .json()
            .then(data => {
               localStorage.token = data.token;
               localStorage.userId = data.userId;
            })
            .then(() => {
               this.$store.dispatch("fetchAuth");
            });
      },
      openTab(arg) {
         window.open(arg);
      }
   }
};
</script>

<style>
</style>