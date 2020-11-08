<template>
   <v-row>
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
               filled
               outlined
            ></v-text-field>
         </v-card>
         <v-card width="20%" flat>
            <v-btn height="57px" outlined width="100%" @click="fetch_update()">Find</v-btn>
         </v-card>
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
      <v-col cols="12" style="border: 1px solid darkGrey;" v-show="data_arrived">
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
         data_arrived: false
      };
   },
   methods: {
      fetch_update() {
         alert('not set yet');
      }
   }
};
</script>
