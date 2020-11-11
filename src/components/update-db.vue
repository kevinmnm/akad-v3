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
                  <pre style="white-space:pre-wrap; word-wrap:break-word;">{{
                     JSON.stringify(this.retrieved_data, null, 4)
                  }}</pre>
               </v-card-subtitle>
            </v-card>
         </v-sheet>
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
         <v-card v-show="data_arrived">
            <v-btn
               color="primary"
               @click="enable_edits()"
               v-show="show_enable_button"
               >Enable Edits</v-btn
            >
            <v-btn
               color="error"
               @click="disable_edits()"
               v-show="!show_enable_button"
               >Disable Edits</v-btn
            >
         </v-card>
      </v-col>
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
                  :disabled="disabler[0].topic"
                  :append-icon="
                     disabler[0].topic ? 'mdi-pencil-off' : 'mdi-pencil'
                  "
               ></v-text-field>
            </v-col>
            <v-col cols="12" class="col-sm-4 pa-1">
               <v-text-field
                  label="Date"
                  type="text"
                  v-model="date_value"
                  filled
                  outlined
                  required
                  :disabled="disabler[0].date"
                  :append-icon="
                     disabler[0].date ? 'mdi-pencil-off' : 'mdi-pencil'
                  "
               ></v-text-field>
            </v-col>
            <v-col cols="12" class="col-sm-4 pa-1">
               <v-text-field
                  label="Unique ID"
                  type="text"
                  v-model="uniqueIdMatch_value"
                  filled
                  outlined
                  required
                  :disabled="disabler[0].uniqueIdMatch"
                  :append-icon="
                     disabler[0].uniqueIdMatch ? 'mdi-pencil-off' : 'mdi-pencil'
                  "
               ></v-text-field>
            </v-col>
            <v-col cols="12" class="col-sm-4 pa-1">
               <v-select
                  label="Language"
                  :items="languages"
                  v-model="languages_value"
                  filled
                  outlined
                  required
                  :disabled="disabler[0].languages"
                  :append-icon="
                     disabler[0].languages ? 'mdi-pencil-off' : 'mdi-pencil'
                  "
               ></v-select>
            </v-col>
            <v-col cols="12" class="pa-1">
               <v-textarea
                  label="Description"
                  v-model="description_value"
                  filled
                  outlined
                  no-resize
                  :disabled="disabler[0].description"
                  :append-icon="
                     disabler[0].description ? 'mdi-pencil-off' : 'mdi-pencil'
                  "
               ></v-textarea>
            </v-col>
            <v-col cols="12" class="pa-1">
               <v-text-field
                  label="Reference Link #1"
                  v-model="referenceLink1_value"
                  filled
                  outlined
                  :disabled="disabler[0].referenceLink1"
                  :append-icon="
                     disabler[0].referenceLink1
                        ? 'mdi-pencil-off'
                        : 'mdi-pencil'
                  "
               ></v-text-field>
               <v-text-field
                  label="Reference Link #2"
                  v-model="referenceLink2_value"
                  filled
                  outlined
                  :disabled="disabler[0].referenceLink2"
                  :append-icon="
                     disabler[0].referenceLink2
                        ? 'mdi-pencil-off'
                        : 'mdi-pencil'
                  "
               ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-1">
               <v-text-field
                  label="Image"
                  v-model="img_value"
                  filled
                  outlined
                  :append-icon="
                     disabler[0].img ? 'mdi-pencil-off' : 'mdi-pencil'
                  "
                  :disabled="disabler[0].img"
               ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-1">
               <v-textarea
                  label="Codepen (Iframe)"
                  v-model="codepenEmbed_value"
                  filled
                  outlined
                  no-resize
                  auto-grow
                  :append-icon="
                     disabler[0].codepenEmbed ? 'mdi-pencil-off' : 'mdi-pencil'
                  "
                  :disabled="disabler[0].codepenEmbed"
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
            @click="confirm_dialog = true"
            >update</v-btn
         >
      </v-col>
      <v-dialog v-model="confirm_dialog" persistent>
         <v-card class="d-flex flex-column align-center">
            <v-card-title>New Data</v-card-title>
            <pre
               class="text-left pa-2 mb-3"
               style="width:80%; background:black; border-radius:5px; white-space:pre-wrap; word-wrap:break-word;"
               >{{
                  JSON.stringify(
                     {
                        action: "UPDATE_DB",
                        topic: this.topic_value,
                        uniqueIdMatch: this.uniqueIdMatch_value,
                        date: this.date_value,
                        content: this.languages_value,
                        description: this.description_value,
                        referenceLink1: this.referenceLink1_value,
                        referenceLink2: this.referenceLink2_value,
                        img: this.img_value,
                        codepenEmbed: this.codepenEmbed_value
                     },
                     null,
                     4
                  )
               }}</pre
            >
            <v-sheet width="80%" class="pa-1 mb-2 d-flex flex-column flex-sm-row justify-space-between">
               <v-btn class="flex-grow-1 ma-1" color="primary" @click="fetch_update_db()">confirm</v-btn>
               <v-btn class="flex-grow-1 ma-1" color="error" @click="confirm_dialog = false">cancel</v-btn>
            </v-sheet>
         </v-card>
      </v-dialog>
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
         disabler: [
            {
               topic: true,
               languages: true,
               date: true,
               uniqueIdMatch: true,
               description: true,
               referenceLink1: true,
               referenceLink2: true,
               img: true,
               codepenEmbed: true
            }
         ],
         topic_value: "",
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
         retrieved_json: false,
         show_enable_button: true,
         confirm_dialog: false
      };
   },
   methods: {
      enable_edits() {
         Object.keys(this.disabler[0]).forEach(item => {
            this.disabler[0][item] = false;
         });
         this.show_enable_button = false;
      },
      disable_edits() {
         Object.keys(this.disabler[0]).forEach(item => {
            this.disabler[0][item] = true;
         });
         this.show_enable_button = true;
      },
      async fetch_update() {
         this.content_uniqueIdMatch = this.$store.state.notes[
            Number(this.content_number) - 1
         ].uniqueIdMatch;
         const found = await fetch(this.$store.state.fetch_url + "/update", {
            headers: {
               "Content-Type": "application/json",
               Authorization: "Bearer " + localStorage.token
            },
            method: "POST",
            body: JSON.stringify({
               action: "PRE-UPDATE",
               contentNumber: this.content_number,
               uniqueIdMatch: this.content_uniqueIdMatch
            })
         });

         await found.json().then(data => {
            this.retrieved_data = data;
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
      async fetch_update_db() {
         const respon = await fetch(this.$store.state.fetch_url + "/update", {
            headers: {
               Authorization: "Bearer " + localStorage.token,
               "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
               action: "UPDATE_DB",
               topic: this.topic_value,
               uniqueIdMatch: this.uniqueIdMatch_value,
               date: this.date_value,
               content: this.languages_value,
               description: this.description_value,
               referenceLink1: this.referenceLink1_value,
               referenceLink2: this.referenceLink2_value,
               img: this.img_value,
               codepenEmbed: this.codepenEmbed_value
            })
         });

         respon.json().then(data => {
            console.log(data.msg);
            if (data.updated) {
               this.$store.dispatch("fetchNotes");
               this.$router.push("/");
            } else {
               alert(data.msg);
            }
         });
      }
   }
};
</script>
