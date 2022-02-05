import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config ={
        apiKey: "AIzaSyDDzY-Q_WfnB2ePLsEHeo9rDOnXwV3BLV4",
        authDomain: "crwn-db-c9334.firebaseapp.com",
        projectId: "crwn-db-c9334",
        storageBucket: "crwn-db-c9334.appspot.com",
        messagingSenderId: "660132398958",
        appId: "1:660132398958:web:d23dadff3cf07a5d5be37f",
        measurementId: "G-DHBH5CDQ15"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// this give us acces to new ggole auth provider
const provider =new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
