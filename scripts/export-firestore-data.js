import { env } from '../src/app/core/environments/environment.prod';

const firestoreService = require('firestore-export-import');
const serviceAccount = require('./serviceAccountKey.json');

firestoreService.initializeApp(serviceAccount, env.databaseURL);

firestoreService
  .backup('radios')
  .then(data => console.log(JSON.stringify(data)))