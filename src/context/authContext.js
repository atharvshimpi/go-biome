import { useState, useEffect, useContext, createContext } from "react"
import {
    GoogleAuthProvider,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
} from "firebase/auth"
import { auth } from "../firebase"
const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    
    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({
            prompt: "select_account"
        })
        await signInWithRedirect(auth, provider)
    }

    const signUp = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password)
            .then((res) => console.log(res))
            .catch((err) => console.error("signUp : ", err))
    }

    const signIn = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
            .then((res) => console.log(res))
            .catch((err) => console.error("signIn : ", err))
    }

    const logOut = async (navigate) => {
        await signOut(auth)
        navigate("/login")
    }

    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log("User", user)
        })

        return () => {
            unSubscribe()
        }
    }, [])

    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <AuthContext.Provider value={{ googleSignIn, signIn, signUp, logOut, forgotPassword, user }}>{children}</AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}
