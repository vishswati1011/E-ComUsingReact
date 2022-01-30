import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config ={
        
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// this give us acces to new ggole auth provider
const provider =new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
