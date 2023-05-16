import React, { useReducer } from "react";
import { auth } from "../../firebase_setup/firebase";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,} from "firebase/auth";

const LoginForm = () => {

    const [inputsContent, setInputsContent] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
          email: "",
          password: ""
        }
      );
      const { email, password } = inputsContent;
    
      const handleInputChange = e => {
        setInputsContent({
          [e.target.name]: e.target.value
        });
      };
    
      const handleSignIn = e => {
        e.preventDefault();
        //auth
          signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(email);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage + email);
            alert(
                      `Your email or password is incorrect, please check your data, ${error}`
                    )
          });
      };
    
      const handleSignUp = e => {
        e.preventDefault();
        //auth
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage);
            alert(
                `Email is already in use, sign in or use other email, ${error}`
              )
          });
    }

    return (
        <><div className="login__form">
            <div className="login__column">
                <form className="form">
                    <div className="form__field">
                        <label className="form__label">Email</label>
                        <input className="form__input" type="email" name="email" id="email" placeholder="Enter your email" onChange={handleInputChange}/>
                    </div>
                    <div className="form__field">
                        <label className="form__label">Password</label>
                        <input className="form__input" type="password" name="password" id="password" placeholder="Enter your password" onChange={handleInputChange}/>
                    </div>    
                </form>
                <div>
                    <button className="btn btn__primary btn__form btn__form--log" onClick={handleSignIn}>
                            Login
                    </button>
                    <button className="btn btn__primary btn__form btn__form--log" onClick={handleSignUp}>
                            Sign In
                    </button>
                </div>
            </div>
            </div>
        </>
    )

}

export default LoginForm;