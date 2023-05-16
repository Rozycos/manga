import React from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import {getFirestore, doc, deleteDoc} from "firebase/firestore";



const Popup = ({articleId, closePopup})=>{
    
    const navigate = useNavigate();
    //const { articleId } = useParams(); 
    const db = getFirestore();
    const docRef = doc(db, "articles", articleId);

    const deleteArticle =(e) =>{
    //e.preventDefault()

    deleteDoc(docRef)
    .then(() => {
        alert("Your data is has been deleted!")
        closePopup();
        //navigate('/admin');
        window.location.reload(false);
        
    })
    
    .catch(error => {
        console.log(error);
    })
}

// const cancelArticle = (e) =>{
//     e.preventDefault();
//     navigate('/admin');
// }

    return (
        <>
            <div className="popup-container">
                <div className="popup-body">
                    <h3>You are going to delete data! </h3>
                    <h4>Are You sure?</h4>
                    <button className="btn btn__primary btn__form btn__logout" onClick={deleteArticle}>Delete</button>
                    <button className="btn btn__primary btn__form" onClick={closePopup}>Cancel</button>
                </div>
            </div>
        </>
    )
}

export default Popup;