import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config ={
       //
};

export const createUserProfileDocument =async (userAuth,additionalData)=>{
        if(!userAuth) return;

        console.log(userAuth.uid);
        const userRef =firestore.doc(`users/${userAuth.uid}`);
        console.log("documentSnapshot",firestore.doc(`users/${userAuth.uid}`));
        const sanpShot =await userRef.get();
        console.log("snapshot",sanpShot);
        
        if(!sanpShot.exists)
        {
                //sanpShot.exists()===false means user not exists in firebase database 
                const {displayName ,email}=userAuth;
                console.log("displayName",displayName,email)
                const createdAt =new Date();
                //to store user into firebase firstore if user not exists
                try{
                        await userRef.set({
                                displayName,
                                email,
                                createdAt,
                                ...additionalData
                        })
                }catch(error)
                {
                        console.log('error creating user',error.message);
                }
        }
        return userRef;
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// this give us acces to new ggole auth provider
const provider =new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
