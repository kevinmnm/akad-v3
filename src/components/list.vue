<template>
   <v-container class='pa-0'>
         <v-container>
            <v-row class='pa-0'>
               <v-col class='pa-0 ma-0'>
                  <v-autocomplete
                     filled
                     dense
                     clearable
                     :search-input.sync="search_input"
                     :items="content"
                     item-color="green"
                     item-text="topic"
                     label="Search for topics"
                     append-icon="mdi-magnify"
                     class='ma-0'
                  >
                  </v-autocomplete>
               </v-col>
            </v-row>
         </v-container>

      <v-row>
         <v-col cols='6' class='gree text-left pl-5'><h2>List</h2></v-col>
         <v-col cols='6' class='text-right gree'>
            <v-menu offset-y transition="slide-y-transition">
               <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on" text dense>
                     <v-icon large>mdi-chevron-down</v-icon>
                  </v-btn>
               </template>
               <v-list>
                  <v-list-item>
                     <v-btn @click="show_all()" width='100%'>All</v-btn>
                  </v-list-item>
                  <v-list-item v-for="(all, ind) in lang" :key="all.name" >
                     <v-btn @click="sorting(ind)" class='ma-0' width='100%' :class="all.content.toLowerCase()">
                        {{ all.name }}
                     </v-btn>
                  </v-list-item>
               </v-list>
            </v-menu>
         </v-col>
      </v-row>

      <v-row 
         v-for="(all, ind) in content" 
         :key="ind"
      >
         <v-col class="pa-0 ma-0 font-weight-bold" style="font-size:18px;">
            <v-card
               hover
               outlined
               width="100%"
               height="100%"
               class="text-center pa-3 pa-sm-2"
               :class="all.content.toLowerCase()"
               v-show="all.show"
               @click="show_learned(ind)"
               style="cursor:pointer;"
               @mouseenter="show_snacker($event, ind)"
               @mouseleave="snacker = false"
            >
               {{ all.topic }}
            </v-card>
         </v-col>
      </v-row>

      <v-container>
         <v-snackbar 
            v-model="snacker" 
            fixed 
            bottom
         >
            {{ (snacker_ind || snacker_ind === 0) ? content[snacker_ind].description : null }}
         </v-snackbar>
      </v-container>
   </v-container>
</template>

<script>
import contents from "./contents.js";
import langs from "./content-vuetify.js";

export default {
   name: "listComp",
   data() {
      return {
         content: contents,
         lang: langs,
         search_input: null,
         snacker_ind: null,
         snacker: false
      };
   },
   methods: {
      sorting(ind) {
         this.content.forEach(conte => {
            conte.show = true;
            if (
               conte.name.toLowerCase() !== this.lang[ind].name.toLowerCase()
            ) {
               conte.show = false;
            }
         });
      },
      show_all() {
         this.content.forEach(conte => {
            conte.show = true;
         });
      },
      show_learned(ind) {
         this.$store.commit("change_render_index", ind);

         this.$nextTick().then(()=>{
            document.querySelector('#learned').scrollIntoView();
         });
      },
      show_snacker(e, ind) {
         this.snacker_ind = ind;
         this.snacker = true;
         e.target.style.backgroundColor = 'black';
      }
   },
   watch: {
      search_input(val) {
         if (val) {
            this.content.forEach(item => {
               if (item.topic === this.search_input) {
                  item.show = true;
               } else {
                  item.show = false;
               }
            })
         } else {
            this.content.forEach(item => item.show = true);
         }
      }
   }
};
</script>

<style lang="scss">
</style>