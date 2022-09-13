import { useState, useEffect, useContext, createContext } from "react"
import {
    GoogleAuthProvider,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
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
