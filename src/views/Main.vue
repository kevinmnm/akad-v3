<template>
   <v-container>

      <Block v-if="view_type === 'block'" />
      <List v-else-if="view_type === 'list'" />
      <Calendar v-else-if="view_type === 'calendar'" />

      <br />
      <v-divider></v-divider>
      <br />

      <Learned />
      
      <ThemeButton />
      <ScrollButton />

   </v-container>
</template>

<script>
import Block from '@/components/block.vue';
import List from '@/components/list.vue';
import Calendar from '@/components/calendar.vue';
import ThemeButton from '@/components/theme-button.vue';
import ScrollButton from '@/components/scroll-button.vue';
import Learned from '@/components/learned.vue';

export default {
   name: "Main",
   components: {
      Block,
      List,
      Calendar,
      ThemeButton,
      ScrollButton,
      Learned
   },
   data(){
      return {

      }
   },
   computed: {
      view_type(){
         return this.$store.state.main_view_type
      }
   }
};
</script>

<style>
</style>