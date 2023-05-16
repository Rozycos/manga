import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const NewSectionList = (props) =>{
    const { articles, width } = props
    //const [open, setOpen] = useState(false);
    
    const articlesCategory =[
        {name: "action", status: articles.action}, 
        {name: "comedy", status:articles.comedy}, 
        {name: "drama", status: articles.drama}, 
        {name: "fantasy", status: articles.fantasy}, 
        {name: "military", status:articles.military}
    ];

    const singleArticleCategory = articlesCategory.filter((e)=> e.status===true);
    const showCategory = singleArticleCategory.map(({name})=> name).join(", ");
    //console.log(singleArticleCategory, {...showCategory})

    return(
        <span className="new__box new__box--container new__box--span">
                    <img src={articles.imageURL}/>
                    <div className="new__box--text">
                        <span>{showCategory}</span>
                        <h3>{articles.title}</h3>
                        <p>{articles.postText}</p>
                        {/* <a className="new__box--text-link">Read Full &#187;</a> */}
                        <NavLink className="new__box--text-link" to={`/page/${articles.id}/${articles.postURL}`}>Read Full &#187;</NavLink>
                    </div>
                </span>
    )

}

export default NewSectionList;