const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const express = require('express');




MongoClient.connect('mongodb+srv://kevinmnm:A0oy5ORpoFE2AU2F@cluster0.4mqda.mongodb.net/ADAK?retryWrites=true&w=majority')
   .then(data => {
      getDB = data.db('ADAK');
   })
   .catch(err => {
      console.log(err);
   });


express().listen(8080);

// class Database {
//    constructor(
//       topic,
//       show,
//       selected,
//       uniqueIdMatch, 
//       date, 
//       content, 
//       mdi, 
//       name, 
//       description, 
//       referenceLink1, 
//       referenceLink2, 
//       codepenEmbed
//    ) {
//       this.topic = topic;
//       this.show = show;
//       this.selected = selected;
//       this.uniqueIdMatch = uniqueIdMatch;
//       this.date = date;
//       this.content = content;
//       this.mdi = mdi;
//       this.name = name;
//       this.description = description;
//       this.referenceLink1 = referenceLink1;
//       this.referenceLink2 = referenceLink2;
//       this.codepenEmbed = codepenEmbed;
//    }

   
// }


export default getDB;