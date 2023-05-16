import { getDocs, collection } from "firebase/firestore"; 
import { doc, getDoc } from "firebase/firestore";
import { getDb } from "./db";
import { query, where, orderBy, limit } from "firebase/firestore";

const collection_name = "articles"

export const findAll = async () => {
    const collection_ref = collection(getDb(), collection_name);
    //const q = query(collection_ref, where("isPublish", "==", true), where("drama", "==", true), where("comedy", "==", true), limit(5)); needs to create index (click on link in console)
    const q = query(collection_ref, orderBy("created", "desc"), limit(5));
    //const q = query(collection_ref, orderBy("created", "desc"), startAt(doc_refs));
    //const q = query(collection_ref, where("isPublish", "==", true), orderBy("created", "desc")); needs to create index (click on link in console)
    const doc_refs = await getDocs(q);

    const res = []

    doc_refs.forEach(articles => {
        res.push({
            id: articles.id, 
            ...articles.data()
        })
    })

    return res
};

export const findOne = async id => {
    const d = await getDoc(doc(getDb(), collection_name, id)) 
    return d.data()
};



