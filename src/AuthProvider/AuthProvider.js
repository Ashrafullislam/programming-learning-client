import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.init';

export  const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
 const [loading,setLoading] = useState(true);
const [user,setUser] = useState({});



//Create user using email,password
const CreateUser = (email,password) => {
    setLoading(true) ;
    return createUserWithEmailAndPassword(auth,email,password);
}
// sign in 
const LogInHandlar = (email,password) => {
    setLoading(true) ;
    return signInWithEmailAndPassword (auth,email,password);
}
// login with google 
const LogInGoogle = (provider) => {
    setLoading(true) ;
    return signInWithPopup(auth,provider)
    
}
// log in with github 
const LogInGithub = (provider) => {
    setLoading(true) ;
    return signInWithPopup(auth,provider )
}
// log out handlar 
const LogOut = () => {
    setLoading(true) ;
    signOut(auth)
}
// user auth state monitoring and set user 
useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setLoading(false) ;
        setUser(currentUser);
    })
    return () => {
        unsubscribe()
    }
},[]) 
const authInfo = {user,CreateUser,LogInHandlar,LogInGoogle , LogInGithub,LogOut,loading}

    return (
         <AuthContext.Provider value = {authInfo}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;