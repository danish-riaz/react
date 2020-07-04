import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDy6BYMOcN17oCy9qiVVw517XUeXKlk7gs',
  authDomain: 'crown-db-ffcba.firebaseapp.com',
  databaseURL: 'https://crown-db-ffcba.firebaseio.com',
  projectId: 'crown-db-ffcba',
  storageBucket: 'crown-db-ffcba.appspot.com',
  messagingSenderId: '552550093439',
  appId: '1:552550093439:web:555f3ff814f476d07fe54a',
  measurementId: 'G-V6FFYQ8VGW',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
