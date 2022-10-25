import React, { createContext, useContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../Firebase/Firebase.init';

export  const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
const [user,setUser] = useState(null);

const userInfo = {displayName: 'Ashrafull '}

//Create user using email,password
const CreateUser = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password);
}
// sign in 
const LogIn = (email,password) => {
    return signInWithEmailAndPassword (auth,email,password);
}
// login with google 
const LogInGoogle = (provider) => {
    return signInWithPopup(auth,provider)

}
const authInfo = {user,userInfo ,CreateUser,LogIn,LogInGoogle}

    return (
         <AuthContext.Provider value = {authInfo}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;