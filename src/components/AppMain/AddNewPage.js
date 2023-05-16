import React, { useState, useEffect, useContext } from "react";
import ArticleForm from "./ArticleForm";
import { auth } from "../../firebase_setup/firebase";
import Navigation from "../LandingPage/Header/Navigation";
import LoginForm from "./LoginForm";
import { AppContext } from "../context/UserProvider";
import Sidebar from "./AdminNav";


const handleSignOut = () => auth.signOut();

const AddNewPage =()=>{
    const{currentUser} = useContext(AppContext)
    return (
        <>
            <header className="header">
            <Navigation />
            </header> 
            <main className="page__wrapper--admin">
                {currentUser ? (
                <>
                    <div className="admin__nav ">
                    <span>
                        <Sidebar/>
                        <button className="btn btn__primary btn__form btn__logout" onClick={handleSignOut}>LogOut</button>
                    </span>
                    </div>
                    <ArticleForm/>
                    
                </>
                ):(
                    <LoginForm/>
                )}
            </main>
      </>
    )
}

export default AddNewPage;