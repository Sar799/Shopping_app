import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyA4Rjn8gG38H6TiPUhfYpAlqAwwwTXR-ag",
  authDomain: "shoppingapp-11dbd.firebaseapp.com",
  databaseURL: "https://shoppingapp-11dbd-default-rtdb.firebaseio.com",
  projectId: "shoppingapp-11dbd",
  storageBucket: "shoppingapp-11dbd.appspot.com",
  messagingSenderId: "179986484106",

})

export const auth = app.auth()
export default app
