<template>
   <v-container>
      <v-row class="text-center block_bg rounded-md">
         <v-col cols="11"><h2>Sort By</h2></v-col>
         <v-col cols="1" class="pa-0">
            <v-menu
               offset-y
               transition="slide-y-transition"
               :close-on-content-click="false"
            >
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
                     v-for="(all, indd) in content_vuetify"
                     :key="indd"
                  >
                     <v-btn
                        text
                        width="100%"
                        :elevation="all.elevate"
                        :retain-focus-on-click="false"
                        :class="all.content.toLowerCase()"
                        @click="toggleShow($event, indd)"
                     >
                        <div
                           :style="{
                              opacity: all.overlay,
                              width: '100%',
                              height: '100%'
                           }"
                        >
                           {{ all.name }}
                        </div>
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
            width="50px"
            height="50px"
            style='font-size:20px; cursor:default; font-family: "Nunito", sans-serif;'
            @mouseenter="animateAdd($event)"
            @click="$store.commit('change_render_index', ind)"
            :class="[
               all.content.toLowerCase(),
               { 'd-flex': all.show, 'd-none': !all.show }
            ]"
            class="
               ma-2
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
import content_vuetify from "./content-vuetify.js";

export default {
   name: "blockComp",
   data() {
      return {
         content: contents,
         content_vuetify: content_vuetify,
         elevate_block: 5
      };
   },
   methods: {
      animateAdd(e) {
         // Animation on hover.
         e.target.classList.add("animate__jello");
         e.target.addEventListener("animationend", () => {
            e.target.classList.remove("animate__jello");
         });
      },
      toggleShow(e, indd) {
         // Sort by function with style toggle.
         this.content.forEach(item => {
            if (
               item.name.toLowerCase() ===
               content_vuetify[indd].name.toLowerCase()
            ) {
               item.show = !item.show;
               if (!item.show) {
                  this.content_vuetify[indd].elevate = 0;
                  this.content_vuetify[indd].overlay = 0.2;
               } else {
                  this.content_vuetify[indd].elevate = 5;
                  this.content_vuetify[indd].overlay = 1;
               }
            }
         });
      }
   }
};
</script>

<style>
</style>