import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { firebaseConfig } from "./firebase"; 

let db = false;

export const getDb = () => {
    if(!db){
        //firebaseConfig
        const app = initializeApp(firebaseConfig)
        db = getFirestore(app)
    }

    return db
}