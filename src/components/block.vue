<template>
   <v-container>
      <v-row class="text-center block_bg rounded-md">
         <v-col cols="11"><h2>Sort By</h2></v-col>
         <v-col cols="1" class="pa-0">
            <v-menu 
            offset-y
            transition="slide-y-transition"
            :close-on-content-click='closeClick'>
               <template v-slot:activator="{ on, attrs }">
                  <v-btn
                     text
                     height="100%"
                     class="ma-0 rounded-circle"
                     v-bind="attrs"
                     v-on="on"
                  >
                     <v-icon x-large style="color:silver;"
                        >mdi-dots-vertical-circle</v-icon
                     >
                  </v-btn>
               </template>
               <v-list>
                  <v-list-item 
                  v-for="(all, indd) in content_vuetify" :key="indd">
                     <v-btn 
                     text
                     width='100%'
                     elevation='3'
                     :retain-focus-on-click='closeClick'
                     :class="all.content.toLowerCase()"
                     @click="toggleShow($event, indd)">
                        {{ all.name }}
                     </v-btn>
                  </v-list-item>
               </v-list>
            </v-menu>
         </v-col>
      </v-row>
      <v-row class="d-flex justify-center rounded block_bg">
         <v-card
            v-for="(all, ind) in content"
            :key="all.uniqueIdMatch"
            v-show="all.show"
            width="50px"
            height="50px"
            style='font-size:20px; cursor:default; font-family: "Nunito", sans-serif;'
            @mouseenter="animateAdd($event)"
            @click="$store.commit('change_render_index', ind)"
            :class="all.content.toLowerCase()"
            class="
               ma-2
               d-flex
               justify-center
               align-center
               font-weight-bold
               animate__animated
            "
         >
            {{ ind + 1 }}
         </v-card>
      </v-row>
   </v-container>
</template>

<script>
import contents from "./contents.js";
import content_vuetify from "./content-vuetify.js"

export default {
   name: "blockComp",
   data() {
      return {
         content: contents,
         closeClick: false,
         content_vuetify: content_vuetify
      };
   },
   methods: {
      animateAdd(e) {
         e.target.classList.add("animate__jello");
         e.target.addEventListener("animationend", () => {
            e.target.classList.remove("animate__jello");
         });
      },
      toggleShow(e, ind){
         this.content_vuetify[ind].show = !this.content_vuetify[ind].show;
         this.content.forEach( item => {
            if (item.content === this.content_vuetify[ind].content){
               this.content.findIndex( indexes => {
                  console.log(indexes);
               });
            }
         });
      }
   }
};
</script>

<style>
</style>