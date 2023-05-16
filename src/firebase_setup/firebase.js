import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyB0lKcLgU2tQf_GZMWNkdRbxl9arcpvL0c",
  authDomain: "mangagate-8b765.firebaseapp.com",
  projectId: "mangagate-8b765",
  storageBucket: "mangagate-8b765.appspot.com",
  messagingSenderId: "350597949448",
  appId: "1:350597949448:web:619a906f1afc130dd0c9bd",
  databaseURL: "https://manga_gate.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export const db = getFirestore(app);
export const auth = getAuth(app);


