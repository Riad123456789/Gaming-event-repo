import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.confige";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null);
    const [loading,setLoading]=useState(true);


    // register here
    const createUser = (email, password, name) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, name);
    }

    // login here
    const LoginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sing out here
    const LogOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, createUser => {
            setuser(createUser);
            setLoading(false);

        })
        return () => {
            unsubscribe();
        };

    }, [])



    const Authinfo = {
        user,
        createUser,
        LoginUser,
        LogOut,
        loading,


    }

    return (
        <AuthContext.Provider value={Authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;