var admin = require("firebase-admin");

var serviceAccount = require("./safabot-key-firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://safabot-88835.firebaseio.com"
});

module.exports = admin.firestore()