import React, { useState, useEffect } from "react";
import { query, where, orderBy, limit, endBefore, startAfter, limitToLast } from "firebase/firestore";
import { getDocs, collection, docs, doc, getCountFromServer } from "firebase/firestore"; 
import { getDb } from "../../../firebase_setup/db";
import NewSectionList from "./NewSectionList";

const collection_name = "articles";
const limitNumber = 2;
// const collection_ref = collection(getDb(), collection_name);
// const q2 = query(collection_ref, where("isPublish", "==", true));
// const snapshot = await getCountFromServer(q2);
// const lastPage = Math.ceil((snapshot.data().count)/limitNumber)

const NewSection =()=>{
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
    const [showLastPage, setShowLastPage] = useState(0);
    //const [prevButtonDisabled, setPrevButtonDisabled] = useState(false);
    //const [onClickHandle, setOnClickHandle] = useState()
    const [pending, setPending] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const collection_ref = collection(getDb(), collection_name);
            const q = query(collection_ref, where("isPublish", "==", true), orderBy("created", "desc"), limit(limitNumber));
            const q2 = query(collection_ref, where("isPublish", "==", true));
            const snapshot = await getCountFromServer(q2);
            const lastPage = Math.floor((snapshot.data().count)/limitNumber)
            
            const doc_refs = await getDocs(q);
            
                    const items = [];
                    doc_refs.forEach(articles => {
                        items.push({
                            id: articles.id, 
                            ...articles.data()
                        })
                            return items
                    });
                    console.log('first item ', items[0])
                    //console.log(snapshot.data().count)
                    console.log("list length", list.length)
                    
                    console.log(lastPage)
                    setList(items);
                    setShowLastPage(lastPage);
                
        };
        fetchData();
    }, []);

    
    const showNext = ({ item }) => {
        // if(list.length === 0) {
        //     alert("Thats all we have for now !")
        // } else {
            const fetchNextData = async () => {
            const collection_ref = collection(getDb(), collection_name);
            const q = query(collection_ref, where("isPublish", "==", true), orderBy("created", "desc"), startAfter(item.created), limit(limitNumber) );

            const doc_refs = await getDocs(q);
            
                    const items = [];
                    doc_refs.forEach(articles => {
                        items.push({
                            id: articles.id, 
                            ...articles.data()
                        })
                            return items
                    });
                    items.length === 0 ? setNextButtonDisabled(true) :
                    //setOnClickHandle(() => showNext({ item: list[list.length - 1] }))
                    setList(items);
                    setPage(page + 1);
                
            };
            fetchNextData();
        //};
    };

    const showPrevious = ({item}) => {
        
        const fetchPreviousData = async () => {
            const collection_ref = collection(getDb(), collection_name);
            const q = query(collection_ref, where("isPublish", "==", true), orderBy("created", "desc"), endBefore(item.created), limitToLast(limitNumber) );
            const doc_refs = await getDocs(q);
            const items = [];
            doc_refs.forEach(articles => {
                items.push({
                    id: articles.id, 
                    ...articles.data()
                })
                    return items
            });
            items.length === 0 ? setNextButtonDisabled(false):
                    setList(items);
                    setPage(page - 1);
        };
        fetchPreviousData();
    };
    
    return(
        <section className="container section__new">
            <div className="section__new--container section__new--header">New</div>
            <div className="section__new--container">
            { pending && 
                    <p>loading...</p>
                }
                {list.length > 0 && list.map(articles => (
                        <NewSectionList key={articles.id} articles={articles} />
                    ))}
                {/* <span className="new__box new__box--container">
                    <img src="https://firebasestorage.googleapis.com/v0/b/mangagate-8b765.appspot.com/o/MangaGate_pic%2Fcowboy-bebop-voice-cast-1634119254020.jpeg?alt=media&token=fa2006cb-ddc7-426a-bebd-de4c2fa4b3d2"/>
                    <div className="new__box--text">
                        <span>Fantasy</span>
                        <h3>Title</h3>
                        <p>text hssdwhd ihdiuwh iuhdoiUHF  hssdwhd ihdiuwh iuhdoiUHF hssdwhd ihdiuwh iuhdoiUHF hssdwhd ihdiuwh iuhdoiUHF hssdwhd ihdiuwh iuhdoiUHF</p>
                        <a className="new__box--text-link">Read Full &#187;</a>
                    </div>
                </span>
                <span className="new__box new__box--container">
                    <img src="https://firebasestorage.googleapis.com/v0/b/mangagate-8b765.appspot.com/o/MangaGate_pic%2Fhigh-score-girl-1655849278184.jpg?alt=media&token=5a037d99-6141-452f-9845-f115f9b70cd8"/>
                    <div className="new__box--text">
                        <span>Fantasy</span>
                        <h3>Title 2</h3>
                        <p>text hssdwhd ihdiuwh iuhdoiUHF  hssdwhd ihdiuwh iuhdoiUHF hssdwhd ihdiuwh iuhdoiUHF hssdwhd ihdiuwh iuhdoiUHF hssdwhd ihdiuwh iuhdoiUHF</p>
                        <a className="new__box--text-link">Read Full &#187;</a>
                    </div>
                </span> */}
                <span className="paginator">
                    <button className="btn__paginator" disabled={page === 1 } onClick={() => showPrevious({ item: list[0] }) }>&#171;</button>
                    <button className="btn__paginator" disabled={list.length < limitNumber || nextButtonDisabled || page === showLastPage -1 } onClick={() => showNext({ item: list[list.length - 1] })}>&#187;</button>
                </span>
            </div>
            
            
        </section>
    )
}


export default NewSection;