import { useState, useEffect, useContext, createContext } from "react"
import { Navigate } from "react-router-dom"
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
} from "firebase/auth"
import { auth } from "../firebase"
const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({
            prompt: "select_account"
        })
        signInWithPopup(auth, provider)
    }

    const logOut = (navigate) => {
        signOut(auth)
        navigate("/login")
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
        <AuthContext.Provider value={{ googleSignIn, logOut, user }}>{children}</AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}
