import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Popup from "./Popup";

const ArticleListItem=(props)=> {
    const { articles, width } = props
    
    const [open, setOpen] = useState(false);
    
    return (
        <li className="box__article--list" >
            <div>
                <img src={articles.imageURL} />
            </div>
            <div>   
                <h3>{articles.title}</h3>
                <p>{articles.postText}</p>
                <button className="btn btn__primary btn__form">
                    <Link className="admin__link" to={`/admin/edit/${articles.id}`}>Edit</Link>
                </button>
                <button className="btn btn__primary btn__form btn__logout" onClick={() => setOpen(true)}>
                    Delete
                    {/* <Link className="admin__link" to={`/admin/delete/${articles.id}`}>Delete</Link> */}
                </button>{open ? <Popup articleId={articles.id} closePopup={() => setOpen(false)} /> : null}
                <button className="btn btn__primary btn__form">
                    <Link className="admin__link" to={`/page/${articles.id}/${articles.postURL}`}>Open</Link>
                    {/* <NavLink className="admin__link" to={`/page/${articles.postURL}/${articles.id}`}>Read more...</NavLink> */}
                </button>
            </div> 
        </li>
    )
}

export default ArticleListItem;

