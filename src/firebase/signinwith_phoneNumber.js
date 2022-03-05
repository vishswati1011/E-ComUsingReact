import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import {  RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";

const config = {
    apiKey: "AIzaSyDDzY-Q_WfnB2ePLsEHeo9rDOnXwV3BLV4",
    authDomain: "crwn-db-c9334.firebaseapp.com",
    projectId: "crwn-db-c9334",
    storageBucket: "crwn-db-c9334.appspot.com",
    messagingSenderId: "660132398958",
    appId: "1:660132398958:web:d23dadff3cf07a5d5be37f",
    measurementId: "G-DHBH5CDQ15"
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