<template>
   <v-container>
      <v-card class="text-center font-weight-bold">
         <v-container>
            <v-row>
               <v-col>
                  <v-autocomplete
                     dense
                     solo-inverted
                     clearable
                     filled
                     hint
                     label="Search"
                     :items="search_list"
                     :search-input.sync="search_input"
                  >
                     sdfsdf
                  </v-autocomplete>
               </v-col>
            </v-row>
         </v-container>
      </v-card>
      <v-row v-for="(all, ind) in content" :key="ind">
         <v-col class="red text-center">
            {{ all.topic }}
         </v-col>
      </v-row>
   </v-container>
</template>

<script>
import contents from "./contents.js";

export default {
   name: "listComp",
   data() {
      return {
         content: contents,
         search_input: null,
         search_list: null
      };
   },
   // computed: {
   //    search_list(){
   //       return (
   //          contents.forEach( item => {
   //             if (
   //                this.search_input
   //                &&
   //                (
   //                   this.stringer(item)
   //                   ===
   //                   this.search_input.replace(/ /g, '')
   //                   .toLowerCase()
   //                )
   //             ) {
   //                console.log(item.topic)
   //             }
   //          })
   //       )
   //    }
   // },
   methods: {
      stringer(val) {
         return (
            val.topic +
            val.name +
            val.date +
            val.content +
            val.description
         )
            .replace(/ /g, "")
            .toLowerCase();
      }
      // innerContent(){
      //    for (let x of contents){
      //       return (
      //          console.log((x.topic + x.name + x.date + x.content + x.description).replace(/ /g, ''))
      //       )
      //    }
      // }
   },
   watch: {
      search_input(newVal) {
         contents.forEach(item => {
            if (
               newVal.replace(/ /g, "").toLowerCase() 
               &&
               this.stringer(item).match(/newVal/g)
            ) {
               console.log(item.topic);
            } else {
               console.log('what');
            }
         });
      }
   }
};
</script>

<style>
</style>