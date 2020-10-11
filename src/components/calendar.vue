<template>
   <v-container>

      <v-row>
         <v-col>
            <h1>CALENDAR</h1>
         </v-col>
      </v-row>

      <v-row>
         <v-col>
            <v-sheet>
               <v-toolbar flat>
                  <v-btn @click="prev()">
                     <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-toolbar-title v-if="$refs.calendar">
                     <v-btn>{{ $refs.calendar.title }}</v-btn>
                  </v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn @click="next()">
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
                  color="gree"
                  event-margin-bottom='0'
                  event-height='50'
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
   data(){
      return {
         content: contents,
         calendar: '',
         events: []
      }
   },
   methods: {
      prev(){
         this.$refs.calendar.prev();
      },
      next(){
         this.$refs.calendar.next()
      },
      renderer(e){
         console.log(e.date);
         let indexx = this.content.findIndex( con => con.modified_date === e.date );
         this.$store.commit('change_render_index', indexx);
      },
      getEventColor(event){
         return event.color
      }
     
   },
   mounted(){
      this.content.forEach( item => {
         let modified = item.date.split('');
         modified.splice(-5,5);
         modified.unshift('2020-');
         item.modified_date = modified.join('').replace('/', '-');
      });

      this.content.forEach( item => {
         this.events.push({
            name: item.topic,
            start: item.modified_date,
            color: item.content.toLowerCase()
         });
      });
   }
};
</script>
