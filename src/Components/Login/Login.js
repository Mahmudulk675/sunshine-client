import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {CustomerContext} from '../../App'
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Button } from 'react-bootstrap';

library.add(faFacebookF, faGoogle);

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    
  const [loggedInUser,setLoggedInUser] = useContext(CustomerContext);
    const history =useHistory();
    const location =useLocation();
    const { from } = location.state || { from : { pathname: "/" } };

  const handleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    const credential = result.credential;
    const token = credential.accessToken;

    const {displayName, email, photoURL} = result.user;
    const signedInUser = {customerName: displayName, customerEmail: email,customerPhotoURL: photoURL}
    setLoggedInUser(signedInUser);
    history.replace(from)

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
    // ...
  });
  
    }

    return (
        <div className="loginContainer container mt-5">
           <div className="login">
            <Button variant="info"  onClick={handleSignIn}><FontAwesomeIcon icon={faGoogle} />  SignIn with Google</Button>
           </div>
        </div>
    );
};

export default Login;