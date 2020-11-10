<template>
   <v-row class="mb-12">
      <v-col cols="12">
         <v-sheet class="text-center">
            <v-card-text>You can only delete last content!</v-card-text>
         </v-sheet>
      </v-col>
      <v-col cols="12" class="text-center">
         <v-btn color="primary" @click="get_last()">show last content</v-btn>
      </v-col>
      <v-col cols="12" v-show="retrieved_last_content">
         <learned></learned>
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
         <v-btn
            width="50%"
            color="error"
            v-show="retrieved_last_content"
            x-large
            @click="delete_confirm = true"
            >delete</v-btn
         >
      </v-col>

      <v-dialog persistent v-model="delete_confirm">
         <v-sheet class="d-flex flex-column justify-center align-center">
            <v-card class="d-flex justify-center">
               <v-card-title>Confirm Deletion</v-card-title>
            </v-card>
            <pre
               class="text-left pa-2 mb-3"
               style="width:80%; background:black; border-radius:5px; white-space:pre-wrap; word-wrap:break-word;"
               >{{ JSON.stringify(last_content, null, 4) }}</pre
            >
         </v-sheet>
         <v-sheet
            width="80%"
            class="pa-1 ma-auto mb-2 d-flex flex-column flex-sm-row justify-space-between"
         >
            <v-btn
               class="flex-grow-1 ma-1"
               color="primary"
               @click="fetch_delete()"
               >confirm</v-btn
            >
            <v-btn
               class="flex-grow-1 ma-1"
               color="error"
               @click="delete_confirm = false"
               >cancel</v-btn
            >
         </v-sheet>
      </v-dialog>
   </v-row>
</template>

<script>
import learned from "@/components/learned.vue";

export default {
   name: "deleteDbComp",
   components: {
      learned
   },
   data() {
      return {
         retrieved_last_content: false,
         delete_confirm: false,
         last_index: null,
         last_content: null
      };
   },
   methods: {
      async get_last() {
         this.last_index = (await this.$store.state.notes.length) - 1;
         this.$store.commit("change_render_index", this.last_index);
         this.retrieved_last_content = true;
         this.last_content = this.$store.state.notes[this.last_index];
      },
      async fetch_delete() {
         console.log(this.last_content.uniqueIdMatch);
         let response = await fetch(this.$store.state.fetch_url + '/delete', {
            headers: {
               Authorization: 'bearer ' + localStorage.token,
               'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(this.last_content)
         });

         response = await response.json();

         if (response.deleted) {
            console.log(response.msg);
            this.$store.dispatch("fetchNotes");
            this.$store.commit("change_render_index", null);
            this.$router.push('/');
         } else {
            alert(response.msg);
         }
      }
   }
};
</script>