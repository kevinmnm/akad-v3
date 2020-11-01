<template>
  <v-row class="justify-center">
         <v-col cols='12' class='text-center'>
            <h3>Admin Database Access</h3>
         </v-col>
         <v-col cols="12" class="col-sm-8 col-md-6">
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
               <v-btn @click="login()">Login</v-btn>
            </v-form>
         </v-col>
      </v-row>
</template>

<script>
export default {
   name: "adminLoginComp",
   data() {
      return {
         username_fetch: '',
         password_fetch: ''
      }
   },
   methods: {
      async login(){
         let response = await fetch(this.$store.state.fetch_url + '/login', {
            headers: {
               'Content-Type': 'application/json'
            },
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify({
               username: this.username_fetch,
               password: this.password_fetch
            })
         });
         if (response.status === 401) return response.json().then( data => alert(data) );
         response.json()
            .then( data => {
               this.$store.commit('FETCH_AUTH', data.isLoggedIn);
               console.log(data.isLoggedIn);
            });
      }
   }
}
</script>

<style>

</style>