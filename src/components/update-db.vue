<template>
   <v-row class="mb-12">
      <v-col
         cols="12"
         class="d-flex flex-row justify-space-between"
         style="border: 1px solid darkGrey;"
      >
         <v-card width="80%" class="pa-0 ma-0" flat>
            <v-text-field
               type="text"
               :hint="'1 ~ ' + $store.state.notes.length"
               placeholder="Content #"
               class="ma-0 pa-0"
               height="50px"
               v-model="content_number"
               filled
               outlined
            ></v-text-field>
         </v-card>
         <v-card width="20%" flat>
            <v-btn height="57px" outlined width="100%" @click="fetch_update()"
               >Find</v-btn
            >
         </v-card>
      </v-col>
      <v-col
         cols="12"
         v-show="data_arrived"
         style="border: 1px solid darkGrey;"
         class="pa-0"
      >
         <v-sheet
            color="success"
            class="white--text ma-0 pa-2 d-flex flex-column"
            outlined
         >
            <v-card>
               <v-card-title class="pa-0">
                  <v-btn
                     height="100%"
                     width="100%"
                     class="ma-0 pa-3"
                     @click="retrieved_json = !retrieved_json"
                     >retrieved json</v-btn
                  >
               </v-card-title>
            </v-card>
            <v-card v-show="retrieved_json">
               <v-card-subtitle>
                  <pre style="white-space:pre-wrap; word-wrap:break-word;">
                  {{ JSON.stringify(this.retrieved_data, null, 4) }}
               </pre
                  >
               </v-card-subtitle>
            </v-card>
         </v-sheet>
      </v-col>
      <!-- <v-col
         cols="12"
         style="border: 1px solid darkGrey;"
      >
         <v-card class="d-flex flex-row">
            <v-card-title style="background: red;">Topic</v-card-title>
            <v-text-field style="background: green;"></v-text-field>
         </v-card>
      </v-col> -->
      <v-col
         cols="12"
         style="border: 1px solid darkGrey;"
         v-show="data_arrived"
      >
         <v-form autocomplete="off" class="d-flex flex-row flex-wrap">
            <v-col cols="12" class="pa-1">
               <v-text-field
                  label="Topic"
                  type="text"
                  v-model="topic_value"
                  filled
                  outlined
                  required
               ></v-text-field>
            </v-col>
            <v-col cols="12" class="col-sm-4 pa-1">
               <v-text-field
                  label="Date"
                  type="text"
                  v-model="date_value"
                  :error="date_error"
                  filled
                  outlined
                  required
               ></v-text-field>
            </v-col>
            <v-col cols="12" class="col-sm-4 pa-1">
               <v-text-field
                  label="Unique ID"
                  type="text"
                  v-model="uniqueIdMatch_value"
                  :error="uniqueIdMatch_error"
                  filled
                  outlined
                  required
               ></v-text-field>
            </v-col>
            <v-col cols="12" class="col-sm-4 pa-1">
               <v-select
                  label="Language"
                  :items="languages"
                  v-model="languages_value"
                  :error="languages_error"
                  filled
                  outlined
                  required
               ></v-select>
            </v-col>
            <v-col cols="12" class="pa-1">
               <v-textarea
                  label="Description"
                  v-model="description_value"
                  :error="description_error"
                  filled
                  outlined
                  no-resize
               ></v-textarea>
            </v-col>
            <v-col cols="12" class="pa-1">
               <v-text-field
                  label="Reference Link #1"
                  v-model="referenceLink1_value"
                  filled
                  outlined
               ></v-text-field>
               <v-text-field
                  label="Reference Link #2"
                  v-model="referenceLink2_value"
                  filled
                  outlined
               ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-1">
               <v-text-field
                  label="Image"
                  v-model="img_value"
                  filled
                  outlined
               ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-1">
               <v-textarea
                  label="Codepen (Iframe)"
                  v-model="codepenEmbed_value"
                  filled
                  outlined
                  no-resize
               ></v-textarea>
            </v-col>
         </v-form>
      </v-col>
      <v-col cols="12" v-show="data_arrived" class="pa-0 mt-1">
         <v-btn
            color="success"
            outlined
            x-large
            width="100%"
            height="100%"
            class="ma-0 pa-5"
            @click="fetch_update_db"
            >update</v-btn
         >
      </v-col>
      <v-spacer></v-spacer>
   </v-row>
</template>

<script>
export default {
   name: "updateDbComp",
   data() {
      return {
         languages: [
            "CSS",
            "JAVASCRIPT",
            "VUE",
            "REACT",
            "NODE",
            "EXPRESS",
            "MONGODB",
            "MYSQL",
            "FIREBASE",
            "OTHER"
         ],
         languages_value: "",
         date_value: "",
         uniqueIdMatch_value: "",
         description_value: "",
         referenceLink1_value: "",
         referenceLink2_value: "",
         img_value: "",
         codepenEmbed_value: "",
         data_arrived: false,
         content_number: "",
         content_uniquIdMatch: "",
         retrieved_data: "",
         retrieved_json: false
      };
   },
   methods: {
      async fetch_update() {
         console.log(Number(this.content_number));
         this.content_uniqueIdMatch = this.$store.state.notes[
            Number(this.content_number) - 1
         ].uniqueIdMatch;
         console.log(this.content_uniqueIdMatch);
         const found = await fetch(this.$store.state.fetch_url + "/update", {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({
               contentNumber: this.content_number,
               uniqueIdMatch: this.content_uniqueIdMatch
            })
         });

         await found.json().then(data => {
            this.retrieved_data = data;
            console.log(data);
            this.data_arrived = true;
            this.topic_value = data.topic;
            this.uniqueIdMatch_value = data.uniqueIdMatch;
            this.date_value = data.date;
            this.description_value = data.description;
            this.referenceLink1_value = data.referenceLink1;
            this.referenceLink2_value = data.referenceLink2;
            this.img_value = data.img;
            this.codepenEmbed_value = data.codepenEmbed;
            if (data.content.toUpperCase() === "JS")
               return (this.languages_value = "JAVASCRIPT");
            return (this.languages_value = data.content.toUpperCase());
         });
      },
      fetch_update_db() {
         
      }
   }
};
</script>
