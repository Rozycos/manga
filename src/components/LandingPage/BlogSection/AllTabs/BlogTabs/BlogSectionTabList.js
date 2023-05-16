import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const BlogSectionTabList = (props) =>{
    const { articles, category } = props
    //const [open, setOpen] = useState(false);
//     const articlesCategory =[{name: action, action: articles.action}, {comedy:articles.comedy}, {drama: articles.drama}, {fantasy: articles.fantasy}, {military:articles.military}];
// console.log(articlesCategory)

    return(
        <li className="blog__category--list" >
            <img src={articles.imageURL}/>
            <div className="blog__category--text">
                {/* <span>{category}</span> */}
                <h3>{articles.title}</h3>
                <p>{articles.postText}</p>
                {/* <a className="new__box--text-link">Read Full &#187;</a> */}
                <NavLink className="blog__category--link" to={`/page/${articles.id}/${articles.postURL}`}>Read Full &#187;</NavLink>
            </div>
        </li>
    )

}

export default BlogSectionTabList;

//span className="new__box new__box--container new__box--span"
// div className="new__box--text"