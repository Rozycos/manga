import React from "react";
import Tabs from "./Tabs";

const BlogSection =()=>{
    return(
        <section className="container section__blog">
            <div className="section__blog--container section__blog--header">Blog</div>
            <div className="section__blog--container">
                <Tabs/>
            </div>
        </section>
    )
}


export default BlogSection;