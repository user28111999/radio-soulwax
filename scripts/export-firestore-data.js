const firestoreService = require('firestore-export-import');
const serviceAccount = require('./serviceAccountKey.json');
const databaseURL = require('./databaseURL.json');

firestoreService.initializeApp(serviceAccount, databaseURL);

firestoreService
  .backup('radios')
  .then(data => console.log(JSON.stringify(data)))