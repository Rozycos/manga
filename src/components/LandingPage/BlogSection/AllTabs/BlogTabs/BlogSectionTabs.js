import React, { useState, useEffect } from "react";
import { query, where, orderBy, limit, endBefore, startAfter, limitToLast } from "firebase/firestore";
import { getDocs, collection, docs, doc, getCountFromServer } from "firebase/firestore"; 
import { getDb } from "../../../../../firebase_setup/db";
import BlogSectionList from "./BlogSectionTabList"; 

const collection_name = "articles";
const limitNumber = 5;
// const collection_ref = collection(getDb(), collection_name);
// const q2 = query(collection_ref, where("isPublish", "==", true));
// const snapshot = await getCountFromServer(q2);
// const lastPage = Math.ceil((snapshot.data().count)/limitNumber)

const BlogSectionTabs =(props)=>{
    const { category } = props
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
            const q = query(collection_ref, where("isPublish", "==", true), where(category, "==", true), orderBy("created", "desc"), limit(limitNumber));
            const q2 = query(collection_ref, where("isPublish", "==", true), where(category, "==", true));
            const snapshot = await getCountFromServer(q2);
            const lastPage = Math.ceil((snapshot.data().count)/limitNumber)
            
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
                    console.log(category)
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
            const q = query(collection_ref, where("isPublish", "==", true), where(category, "==", true), orderBy("created", "desc"), startAfter(item.created), limit(limitNumber) );

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
            const q = query(collection_ref, where("isPublish", "==", true), where(category, "==", true), orderBy("created", "desc"), endBefore(item.created), limitToLast(limitNumber) );
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
        <section className="blog__section">
            {/* <div className="section__new--container section__new--header">{category}</div> */}
            <span className="blog__container">
                <div className="blog__category--wrap">
                    <ul className="blog__category">
                    { pending && 
                            <p>loading...</p>
                        }
                        {list.length > 0 && list.map(articles => (
                                <BlogSectionList key={articles.id} articles={articles} category={category} />
                            ))}
                    </ul>
                </div>
                {/* <div className="blog__category--reads">
                    
                </div> */}
            </span>
                <span className="paginator blog__paginator">
                    <button className="btn__paginator" disabled={page === 1 } onClick={() => showPrevious({ item: list[0] }) }>&#171;</button>
                    <button className="btn__paginator" disabled={list.length < limitNumber || nextButtonDisabled || page === showLastPage } onClick={() => showNext({ item: list[list.length - 1] })}>&#187;</button>
                </span>
        </section>
    )
}


export default BlogSectionTabs;