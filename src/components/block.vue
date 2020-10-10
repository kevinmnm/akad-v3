<template>
   <v-container>
      <h2 class='hidden-sm-and-down'>BLOCK</h2>
      <v-divider class='mb-4'></v-divider>
      <v-row class="text-center block_bg rounded-md">
         <v-col cols="9" class="col-sm-11 pa-0 ma-0">
            <h2>Sort By</h2>
         </v-col>
         <v-divider class='mb-2'></v-divider>
         <v-col cols="3" class="col-sm-1 pa-0 ma-0">
            <v-menu
               offset-y
               transition="slide-y-transition"
               :close-on-content-click="false"
            >
               <template v-slot:activator="{ on, attrs }">
                  <v-btn
                     text
                     small
                     height="100%"
                     class="ma-0 rounded-circle"
                     v-bind="attrs"
                     v-on="on"
                  >
                     <v-icon class="x-large" style="color:silver;"
                        >mdi-dots-vertical-circle</v-icon
                     >
                  </v-btn>
               </template>
               <v-list>
                  <v-list-item
                     v-for="(all, indd) in content_vuetify"
                     :key="indd"
                  >
                     <v-tooltip left>
                        <template v-slot:activator="{ on, attrs }">
                           <v-btn
                              text
                              width="100%"
                              :elevation="all.elevate"
                              :retain-focus-on-click="false"
                              :class="all.content.toLowerCase()"
                              @click="toggleShow($event, indd)"
                              @mouseenter="detectTotal(indd)"
                              @mouseleave="total_block = 0;"
                              v-bind="attrs"
                              v-on="on"
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
                        </template>
                        <span
                           >Total: <b>{{ total_block }}</b></span
                        >
                     </v-tooltip>
                  </v-list-item>
               </v-list>
            </v-menu>
         </v-col>
      </v-row>

      <v-snackbar
         app
         fixed
         v-model="snacker"
         timeout="-1"
         multi-line
         height="100%"
         width="100%"
         bottom
         z-index="2"
         max-height="100%"
         content-class="
            text-center
            font-weight-bold
            white--text
            pa-0
            ma-0
         "
      >
         <v-container absolute width="100%" height="100%" class="ma-0">
            <v-row>
               <v-col style="font-size: 20px;">{{
                  snacker_index || snacker_index === 0 ? content[snacker_index].topic : null
               }}</v-col>
            </v-row>
         </v-container>
      </v-snackbar>

      <v-row class="d-flex justify-center rounded block_bg">
         <v-card
            hover
            v-for="(all, ind) in content"
            :key="all.uniqueIdMatch"
            width="35px"
            height="35px"
            style='cursor:default; font-family: "Nunito", sans-serif;'
            @mouseenter="animateAdd($event, ind), (snacker = true)"
            @mouseleave="snacker = false"
            @click="$store.commit('change_render_index', ind)"
            :class="[
               all.content.toLowerCase(),
               { 'd-flex': all.show, 'd-none': !all.show }
            ]"
            class="
                     ma-1
                     ma-md-2
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
         elevate_block: 5,
         total_block: 0,
         snacker: false,
         snacker_index: null
      };
   },
   methods: {
      // Animation on hover.
      animateAdd(e, ind) {
         this.snacker_index = ind;
         e.target.classList.add("animate__jello");
         e.target.addEventListener("animationend", () => {
            e.target.classList.remove(
               "animate__jello",
               "animate__bounceIn",
               "animate__bounceOut"
            );
         });
      },
      toggleShow(e, indd) {
         // Sort by function with style toggle.
         this.content.forEach(item => {
            if (
               item.name.toLowerCase() ===
               content_vuetify[indd].name.toLowerCase()
            ) {
               if (!item.show) {
                  item.show = true;
                  this.content_vuetify[indd].elevate = 5;
                  this.content_vuetify[indd].overlay = 1;
               } else {
                  item.show = false;
                  this.content_vuetify[indd].elevate = 0;
                  this.content_vuetify[indd].overlay = 0.3;
               }
            }
         });
      },
      detectTotal(indd) {
         this.content.forEach(item => {
            if (
               item.name.toLowerCase() ===
               content_vuetify[indd].name.toLowerCase()
            ) {
               this.total_block++;
            }
         });
      },
      borderShow(e){
         e.target.style.border = '2px solid blue';
      },
      borderHide(e){
         e.target.sylle.border = 'none';
      }
   }
};
</script>
