import React from "react";
import './login.css';
import logo from "../../images/homefinders-low-resolution-logo-color-on-transparent-background.png"
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import {app} from "../../firebase";
import{useNavigate} from "react-router-dom";
export default function Login() {
    const provider = new GoogleAuthProvider();
    const auth=getAuth(app);
    const navigate=useNavigate();
    async function handleSignIn(){
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user.displayName)
    navigate("/dashboard")
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });


    }
    return (
    <div className="login-main">
    <div className="log-left">
        <div className="Login">
        <div className="login-cont">
        <div className="login-head">
            <h1>Welcome To</h1>
            <img class="logo" src={logo}></img>
            <p>Find your homely PG  in seconds with HomeFinders</p> 
 <p>The ultimate time-saving app for locating nearby PG!</p>
        </div>
        <div className="login-button">
            <button onClick={handleSignIn}
 className="login-btn">
                <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"></img>
                <p><b>Sign up with Google</b></p>
            </button>
        </div>
        </div>
        </div>
    </div>
    <div className="log-right">
        <div className="img-overlay">
        </div>
    </div>
    </div>
    );
}