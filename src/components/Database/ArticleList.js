import React from "react";
import { useState, useEffect } from 'react';
//import { findAll } from '../../../firebase_setup/GetArticles';
import ArticleListItem from './ArticleListItem';
import { query, where, orderBy, limit, endBefore, startAfter, limitToLast } from "firebase/firestore";
import { getDocs, collection, docs, doc, getCountFromServer } from "firebase/firestore"; 
import { getDb } from "../../firebase_setup/db";

const collection_name = "articles";
const limitNumber = 5;

const ArticleList=() =>{
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
            //const q = query(collection_ref, where("isPublish", "==", true), orderBy("created", "desc"), limit(limitNumber));
            const q = query(collection_ref, orderBy("created", "desc"), limit(limitNumber));
            const q2 = query(collection_ref);
            const snapshot = await getCountFromServer(q2);
            const lastPage = Math.ceil((snapshot.data().count)/limitNumber)

            const doc_refs = await getDocs(q);
            // const doc_length = await getDocs();
            
                    const items = [];
                    doc_refs.forEach(articles => {
                        items.push({
                            id: articles.id, 
                            ...articles.data()
                        })
                            return items
                    });
                    console.log('first item ', items[0])
                    // console.log(list)
                    console.log("list length", list.length)
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
            const q = query(collection_ref, orderBy("created", "desc"), startAfter(item.created), limit(limitNumber) );

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
            const q = query(collection_ref, orderBy("created", "desc"), endBefore(item.created), limitToLast(limitNumber) );
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

    return (
        <section className="container box__article">
            {/* <h2>Artykuły</h2> */}
            <div >
                { pending && 
                    <p>loading...</p>
                }

                <ul>
                    {list.length > 0 && list.map(articles => (
                        <ArticleListItem key={articles.id} articles={articles} width={"350px"}/>
                    ))}
                </ul>
                <div className="admin__paginator">
            {
                //show previous button only when we have items
                //page === 1 ? 
                //<button disabled>Previous</button> : 
               // <button disabled={page === 1 } onClick={() => showPrevious({ item: list[0] }) }>Previous</button>
               <button className="btn btn__primary btn__form" disabled={page === 1 } onClick={() => showPrevious({ item: list[0] }) }>&#8810; Previous</button>
            }

            {
                //show next button only when we have items
                //list.length < limitNumber ? 
                //<button disabled={true}>Next</button> :
                //page + 1 === 0? <button disabled>Next</button> : 
                <button className="btn btn__primary btn__form" disabled={list.length < limitNumber || nextButtonDisabled|| page === showLastPage } onClick={() => showNext({ item: list[list.length - 1] })}>Next &#8811;</button>
            }
            </div>
            </div>
        </section>
    )
}

export default ArticleList;