<template>
   <v-container>
      <v-row>
         <v-col>
            <v-sheet>
               <v-toolbar flat outlined class="pa-0 ma-0" width='100%'>
                  <v-btn @click="prev()" height='100%' class="ma-0" text>
                     <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>

                  <v-spacer></v-spacer>

                  <v-toolbar-title v-if="$refs.calendar">
                     <v-btn 
                        tile 
                        x-large
                        :ripple="false" 
                        text 
                        large
                     >
                        {{  
                           $vuetify.breakpoint.xsOnly ? $refs.calendar.title.replace(' 2020','') : $refs.calendar.title
                        }}
                     </v-btn>
                  </v-toolbar-title>

                  <v-spacer></v-spacer>

                  <v-btn @click="next()" height='100%' class="ma-0" text>
                     <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
               </v-toolbar>
               <v-calendar
                  ref="calendar"
                  type="month"
                  v-model="calendar"
                  :events="events"
                  @click:day="renderer($event)"
                  :event-color="getEventColor"
                  event-text-color="txt"
                  color="primary"
                  :event-height='80'
                  :event-margin-bottom='0'
                  white-space
               >
               </v-calendar>
            </v-sheet>
         </v-col>
      </v-row>
   </v-container>
</template>

<script>
import contents from "./contents.js";

export default {
   name: "calendarComp",
   data() {
      return {
         content: contents,
         calendar: "",
         events: []
      };
   },
   methods: {
      prev() {
         this.$refs.calendar.prev();
      },
      next() {
         this.$refs.calendar.next();
      },
      renderer(e) {
         let indexx = this.content.findIndex(
            con => con.modified_date === e.date
         );
         this.$store.commit("change_render_index", indexx);

         this.$nextTick().then(() => {
            document.querySelector("#learned").scrollIntoView();
         });

         // let learned = document.querySelector('#learned');

         // if (learned){
         //    learned.scrollIntoView();
         // } else {
         //    function repeat(){
         //       learned.scrollIntoView();
         //       if (!learned.scrollIntoView()){
         //          return repeat();
         //       }
         //    }
         // }
      },
      getEventColor(event) {
         return event.color;
      }
   },
   mounted() {
      this.content.forEach(item => {
         let modified = item.date.split("");
         modified.splice(-5, 5);
         modified.unshift("2020-");
         item.modified_date = modified.join("").replace("/", "-");
      });

      this.content.forEach(item => {
         this.events.push({
            name: item.topic,
            start: item.modified_date,
            color: item.content.toLowerCase()
         });
      });

   }
};
</script>

<style lang="scss">
   @import '~vuetify/src/components/VCalendar/_variables.scss';

   .v-event{
      width: 100% !important;
   }
</style>

