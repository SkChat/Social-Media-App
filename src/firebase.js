import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBlM_D-XyrVJCXYdlJa2llhwfa8DOpXiB8",
  authDomain: "facebook-clone-51d3e.firebaseapp.com",
  projectId: "facebook-clone-51d3e",
  storageBucket: "facebook-clone-51d3e.appspot.com",
  messagingSenderId: "823222952933",
  appId: "1:823222952933:web:648dff3ed210168237450c",
  measurementId: "G-9X70KKHDQB",
};
//connect our react frontend to our firebase backend
const firebaseApp = firebase.initializeApp(firebaseConfig);

//to get access to the database
const db = firebaseApp.firestore();

//to setup authentication i.e. allows us to login n all
const auth = firebase.auth();

//tells firebase that we want google login service
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
