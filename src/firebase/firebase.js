import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSEGAING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();

export { firebase , database as default };

  //   // child_removed
//   database.ref('expenses').on('child_removed', (snapshot) => {
//       console.log(snapshot.key, snapshot.val());
//   });

//   // child_changed
//   database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

  // database.ref('expenses').on('value', (snapshot) => {
  //   const expenses = [];

  //   snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //           id: childSnapshot.key,
  //           ...childSnapshot.val()
  //       });
  //   });
  //   console.log(expenses);
  // });


