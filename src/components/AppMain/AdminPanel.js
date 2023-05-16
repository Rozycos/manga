import React, { useState, useEffect, useContext } from "react";
//import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase_setup/firebase";
import Navigation from "../LandingPage/Header/Navigation";
import LoginForm from "./LoginForm";
//import { Link } from 'react-router-dom';
//import Hamburger from "../LandingPage/Hamburger";
import { AppContext } from "../context/UserProvider";
import ArticleForm from "./ArticleForm";
//import AddArticle from "../Database/AddArticle";
import Sidebar from "./AdminNav";
import ArticleList from "../Database/ArticleList";

const handleSignOut = () => auth.signOut();

const AppMain = () => {
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
              <h2 style={{color:"white"}}>You are logged as: {currentUser.email} </h2>
              <span className="admin__nav--buttons">
                <Sidebar/>
                <button className="btn btn__primary btn__form btn__logout" onClick={handleSignOut}>LogOut</button>
              </span>
            </div>
            <ArticleList/>           
          </>
        ):(
            <LoginForm/>
        )}
        </main>
      </>
    
    )
    
  }

 
export default AppMain; 
