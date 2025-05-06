import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logoutUser = () => {
        return signOut(auth);
    }

    const authData =  {
        createUser,
        loginUser,
        user,
        logoutUser,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            // if (currentUser) {
            //   // User is signed in, see docs for a list of available properties
            //   // https://firebase.google.com/docs/reference/js/auth.user
            //   const uid = currentUser.uid;
            //   // ...
            // } else {
            //   // User is signed out
            //   // ...
            // }
          });

          return () => {
            unsubscribe();
          }
    },[]);

    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
};

export default AuthProvider;