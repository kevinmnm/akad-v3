<template>
   <v-row class="justify-center">
      <v-col class="text-center" cols="12" style="font-weight:bold;">
         TOTAL:
         <span class="greenText--text">
            {{ $store.state.notes.length }}
         </span>
      </v-col>
      <v-col cols="12" class="d-flex justify-start pl-0">
         <v-card class="ma-0 font-weight-bold" flat>ADD NOTE</v-card>
      </v-col>
      <v-col cols="12" style="border: 1px solid darkGrey;">
         <v-form autocomplete="off" class="d-flex flex-row flex-wrap">
            <v-col cols="12" class="pa-1">
               <v-text-field
                  label="Topic"
                  type="text"
                  v-model="topic"
                  :error="topic_error"
                  filled
                  outlined
                  required
               ></v-text-field>
            </v-col>
            <v-col cols="12" class="col-sm-4 pa-1">
               <v-text-field
                  label="Date"
                  type="text"
                  v-model="date"
                  :error="date_error"
                  filled
                  outlined
                  required
                  :hint="
                     'Last Date: ' +
                        $store.state.notes[$store.state.notes.length - 1].date
                  "
               ></v-text-field>
            </v-col>
            <v-col cols="12" class="col-sm-4 pa-1">
               <v-text-field
                  label="Unique ID"
                  type="text"
                  v-model="uniqueIdMatch"
                  :error="uniqueIdMatch_error"
                  :hint="
                     'Last ID: ' +
                        $store.state.notes[$store.state.notes.length - 1]
                           .uniqueIdMatch
                  "
                  filled
                  outlined
                  required
               ></v-text-field>
            </v-col>
            <v-col cols="12" class="col-sm-4 pa-1">
               <v-select
                  label="Language"
                  :items="languages"
                  v-model="content_setter"
                  :error="content_setter_error"
                  filled
                  outlined
                  required
               ></v-select>
            </v-col>
            <v-col cols="12" class="pa-1">
               <v-textarea
                  label="Description"
                  v-model="description"
                  :error="description_error"
                  filled
                  outlined
                  no-resize
               ></v-textarea>
            </v-col>
            <v-col cols="12" class="pa-1">
               <v-text-field
                  label="Reference Link #1"
                  hint="Optional"
                  v-model="referenceLink1"
                  filled
                  outlined
               ></v-text-field>
               <v-text-field
                  label="Reference Link #2"
                  hint="Optional"
                  v-model="referenceLink2"
                  filled
                  outlined
               ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-1">
               <v-text-field
                  label="Image"
                  hint="ex) profile.png"
                  v-model="img"
                  filled
                  outlined
               ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-1">
               <v-textarea
                  label="Codepen (Iframe)"
                  hint="Optional"
                  v-model="codepenEmbed"
                  filled
                  outlined
                  no-resize
               ></v-textarea>
            </v-col>
         </v-form>
      </v-col>
      <v-btn class="ma-4 pa-4 primary" style="font-size:20px;" @click="show_dialog()">
         POST
      </v-btn>

      <v-dialog v-model="dialog" persistent>
         <v-card
            width="50%"
            height="50%"
            class="ma-auto pa-5 white black--text"
         >
            <v-card-title>Submitting following data</v-card-title>
            <v-card-text class="black--text">
               <pre>{{ final_data }}</pre>
            </v-card-text>
            <v-btn block bottom class="success mb-3" @click="posting()">Confirm</v-btn>
            <v-btn block bottom class="error" @click="dialog = false">Cancel</v-btn>
         </v-card>
      </v-dialog>
   </v-row>
</template>

<script>
import content_vuetify from "./content-vuetify.js";

export default {
   name: "adminDataComp",
   data() {
      return {
         topic_error: false,
         date_error: false,
         uniqueIdMatch_error: false,
         content_setter_error: false,
         description_error: false,
         languages: [],
         dialog: false,
         topic: "",
         uniqueIdMatch: "",
         date: "",
         content_setter: "",
         content: "",
         mdi: "",
         name: "",
         description: "",
         referenceLink1: "",
         referenceLink2: "",
         img: "",
         codepenEmbed: "",
         final_data: ""
      };
   },
   methods: {
      async posting(){
         // let finalized = JSON.stringify(this.final_data.replace(/\n/g));

         let resp = await fetch('http://localhost:5500/add', {
            headers: { 
               'Content-Type': 'application/json' 
            },
            method: 'POST',
            body: JSON.stringify(this.final_data)
         });

         resp.json().then( res =>  console.log(res) );
      },
      show_dialog(){
         // this.final_data = `{\n topic: "${this.topic}" \n show: true \n selected: false \n uniqueIdMatch: ${this.uniqueIdMatch} \n date: "${this.date}" \n content: "${this.content}" \n mdi: "${this.mdi}" \n name: ${this.name} \n description: ${this.description} \n referenceLink1: "${this.referenceLink1}" \n referenceLink2: "${this.referenceLink2}" \n img: "${this.img}" \n codepenEmbed: "${this.codepenEmbed}" \n}`;

         this.final_data = new Object();
         this.final_data.topic = this.topic;
         this.final_data.uniqueIdMatch = this.uniqueIdMatch;
         this.final_data.date =  this.date;
         this.final_data.content = this.content;
         this.final_data.mdi = this.mdi;
         this.final_data.name = this.name;
         this.final_data.description = this.description;
         this.final_data.referenceLink1 = this.referenceLink1;
         this.final_data.referenceLink2 = this.referenceLink2;
         this.final_data.img = this.img;
         this.final_data.codepenEmbed = this.codepenEmbed;

         console.log(typeof this.final_data);
         console.log(this.final_data);

         this.dialog = true;

         this.topic_error = false;
         this.date_error = false;
         this.uniqueIdMatch_error = false;
         this.description_error = false;
         this.content_setter_error = false;

         if (!this.topic) {this.topic_error = true; this.dialog = false;}
         if (!this.date) {this.date_error = true; this.dialog = false;}
         if (!this.uniqueIdMatch) {this.uniqueIdMatch_error = true; this.dialog = false;}
         if (!this.description) {this.description_error = true; this.dialog = false;}
         if (!this.content_setter) {this.content_setter_error = true; this.dialog = false;}
      }
   },
   watch: {
      content_setter(val) {
         if (val === 'CSS') {this.content = 'CSS'; this.name = 'CSS'; this.mdi = 'mdi-language-css3';}
         if (val === 'JAVASCRIPT') {this.content = 'JS'; this.name = 'JavaScript'; this.mdi = 'mdi-language-javascript'; }
         if (val === 'VUE') {this.content = 'Vue'; this.name = 'Vue'; this.mdi = 'mdi-vuejs'; }
         if (val === 'REACT') {this.content = 'React'; this.name = 'React'; this.mdi = 'mdi-react'; }
         if (val === 'NODE') {this.content = 'Node'; this.name = 'Node'; this.mdi = 'mdi-nodejs'; }
         if (val === 'EXPRESS') {this.content = 'Express'; this.name = 'Express'; this.mdi = 'mdi-nodejs'; }
         if (val === 'MONGODB') {this.content = 'Mongo'; this.name = 'MongoDB'; this.mdi = 'mdi-leaf'; }
         if (val === 'MYSQL') {this.content = 'Mysql'; this.name = 'MySQL'; this.mdi = 'mdi-database-search'; }
         if (val === 'FIREBASE') {this.content = 'Firebase'; this.name = 'Firebase'; this.mdi = 'mdi-firebase'; }
         if (val === 'OTHER') {this.content = 'Other'; this.name = 'Other'; this.mdi = 'mdi-unfold-more-vertical'; }
      }
   },
   mounted() {
      for (let all of content_vuetify) {
         this.languages.push(all.name);
      }
   }
};
</script>