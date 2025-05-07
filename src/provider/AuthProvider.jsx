import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logoutUser = () => {
        return signOut(auth);
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    const provider = new GoogleAuthProvider();
    const signInViaGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    const passwordResetEmail = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const authData =  {
        createUser,
        loginUser,
        user,
        setUser,
        logoutUser,
        loading,
        updateUser,
        signInViaGoogle,
        passwordResetEmail
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
          });

          return () => {
            unsubscribe();
          }
    },[]);

    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
};

export default AuthProvider;