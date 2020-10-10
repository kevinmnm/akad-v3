<template>
   <v-container
      class="mb-12 pb-0"
      v-if="renderIndex || renderIndex === 0"
      :style="{ border: learnBorder }"
   >
      <v-tooltip bottom>
         <template v-slot:activator="{ on, attrs }">
            <v-avatar
               class="float-right ma-0 pa-0"
               style="cursor:default; z-index:10;"
               v-bind="attrs"
               v-on="on"
               tile
            >
               <v-icon
                  :class="content[renderIndex].content.toLowerCase()"
                  x-large
                  >{{ content[renderIndex].mdi }}
               </v-icon>
            </v-avatar>
         </template>
         <span class="font-weight-bold" style="font-size:18px;">{{
            content[renderIndex].name
         }}</span>
      </v-tooltip>

      <v-row class="text-center">
         <v-col
            cols="12"
            class="mt-0 pt-0 font-weight-light"
            style="font-family:monospace;"
         >
            {{ content[renderIndex].date }}
         </v-col>

         <v-col cols="12">
            <h1>{{ content[renderIndex].topic }}</h1>
         </v-col>

         <v-col cols="12">
            <v-alert
               border="left"
               colored-border
               :color="content[renderIndex].content.toLowerCase()"
               class="text-left"
               style="font-size:18px;"
            >
               {{ content[renderIndex].description }}
            </v-alert>
         </v-col>

         <v-col
            v-if="content[renderIndex].referenceLink1"
            class="pa-0 ma-0 d-flex align-stretch justify-center"
         >
            <v-btn @click="openWindow1()" text>LINK</v-btn>
         </v-col>
         <v-col
            v-if="content[renderIndex].referenceLink2"
            class="pa-0 ma-0 d-flex align-stretch justify-center"
         >
            <v-btn @click="openWindow2()" text>LINK</v-btn>
         </v-col>
      </v-row>

      <v-row>
         <v-col cols="1" class="ma-0 pa-0 hidden-sm-and-down">
            <v-btn
               class="d-flex justify-center align-center ma-0 pa-0"
               :class="content[renderIndex].content.toLowerCase()"
               height="100%"
               width="100%"
               @click="prev_content()"
            >
               <v-icon x-large class="ma-0 pa-0">mdi-arrow-left-thick</v-icon>
            </v-btn>
         </v-col>
         <v-col cols="12" class="ma-0 pa-0 col-md-10">
            <v-card
               height="100%"
               width="100%"
               class="pa-0 ma-0"
               v-html="content[renderIndex].codepenEmbed"
            >
            </v-card>
         </v-col>
         <v-col cols="1" class="ma-0 pa-0 hidden-sm-and-down">
            <v-btn
               class="d-flex justify-center align-center"
               :class="content[renderIndex].content.toLowerCase()"
               height="100%"
               width="100%"
               @click="next_content()"
            >
               <v-icon x-large class="ma-0 pa-0">mdi-arrow-right-thick</v-icon>
            </v-btn>
         </v-col>
      </v-row>
   </v-container>
</template>

<script>
import contents from "@/components/contents.js";

export default {
   name: "learnedComp",
   data() {
      return {
         content: contents,
         learnBorder: `2px solid lightGrey`
      };
   },
   computed: {
      renderIndex() {
         return this.$store.state.render_index;
      }
   },
   methods: {
      openWindow1() {
         window.open(this.content[this.renderIndex].referenceLink1);
      },
      openWindow2() {
         window.open(this.content[this.renderIndex].referenceLink2);
      },
      prev_content() {
         this.$store.state.render_index--;
      },
      next_content() {
         this.$store.state.render_index++;
      }
   }
};
</script>

<style>
</style>