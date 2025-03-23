import { auth, googleProvider, firestore } from '../firebase/firebase';

// import { firestore } from '../firebase/firebase.ts';
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword as fbUpdatePassword } from 'firebase/auth';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

export const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const googleSignIn = () => {
  return signInWithPopup(auth, googleProvider);
};

export const updatePassword = async (currentPassword: string, newPassword: string) => {
  const user = auth.currentUser;
  if (!user) throw new Error('No authenticated user');
  
  const credential = EmailAuthProvider.credential(auth.currentUser?.email || '', currentPassword);
  await reauthenticateWithCredential(user, credential);
  await fbUpdatePassword(user, newPassword);
};

// export const updateSubscriptionStatus = async (userId: string, subscribed: boolean) => {
//   await firestore.doc(`users/${userId}`).update({ newsletterSubscribed: subscribed });
// };

export const logOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    throw error;
  }
};