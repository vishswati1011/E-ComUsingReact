import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import {  RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";

const config = {
    //
};

firebase.initializeApp(config);
export const auth1 = firebase.auth();

export const setUpRecaptch =(number) =>{
    const recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container',
         {},
          auth1);
          recaptchaVerifier.render();
          return signInWithPhoneNumber(auth1,number,recaptchaVerifier);
}

export default firebase;