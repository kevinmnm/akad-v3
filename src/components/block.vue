<template>
   <v-container>
      <v-card raised rounded>
         <v-row class="text-center block_bg rounded-md">
            <v-col
               cols="9"
               class="col-sm-11 pa-0 ma-0 text-left pl-5"
               style="box-shadow:0 0 2px white;"
            >
               <h2>Sort By</h2>
            </v-col>
            <v-divider class="mb-2"></v-divider>
            <v-col
               cols="3"
               class="col-sm-1 pa-0 ma-0"
               style="box-shadow:0 0 2px white;"
            >
               <v-menu
                  offset-y
                  transition="slide-y-transition"
                  :close-on-content-click="false"
                  z-index="10"
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
                                 @mouseleave="total_block = 0"
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
                     snacker_index || snacker_index === 0
                        ? content[snacker_index].topic
                        : null
                  }}</v-col>
               </v-row>
            </v-container>
         </v-snackbar>

         <v-row
            class="d-flex justify-center rounded block_bg"
            style="box-shadow:0 0 2px white;"
         >
            <v-progress-circular
               indeterminate
               color="primary"
               class="ma-5"
               v-show="loading"
            ></v-progress-circular>
            <v-card
               hover
               v-for="(all, ind) in content"
               :key="all.uniqueIdMatch"
               width="35px"
               height="35px"
               style='cursor:default; font-family: "Nunito", sans-serif; user-select:none;'
               @mouseenter="animateAdd($event, ind), (snacker = true)"
               @mouseleave="snacker = false"
               @click="renderLearnedSection(ind)"
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
      </v-card>
   </v-container>
</template>

<script>
import content_vuetify from "./content-vuetify.js";

export default {
   name: "blockComp",
   data() {
      return {
         content_vuetify: content_vuetify,
         elevate_block: 5,
         total_block: 0,
         snacker: false,
         snacker_index: null,
         loading: false
      };
   },
   computed: {
      content() {
         return this.$store.state.notes;
      }
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
      renderLearnedSection(ind){
         this.$store.commit('change_render_index', ind);
         this.$nextTick().then(() => {
            document.querySelector("#learned").scrollIntoView();
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
      borderShow(e) {
         e.target.style.border = "2px solid blue";
      },
      borderHide(e) {
         e.target.sylle.border = "none";
      }
   },
   watch: {
      content(val){
         !val ? (this.loading = true) : (this.loading = false);
      }
   },
   mounted() {
      this.content ? this.loading = false : this.loading = true;
   }
};
</script>
