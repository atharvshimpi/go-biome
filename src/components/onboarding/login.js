import React, { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"

import { firestore } from "../../firebase"
import { UserAuth } from "../../context/authContext"

import { Switch } from "@headlessui/react"
import logo from "../../assets/images/logo.png"

import {
    Button,
    IconButton,
    TextField,
    InputAdornment,
} from "@material-ui/core"
import { MdEmail } from "react-icons/md"
import PasswordIcon from "@mui/icons-material/Password"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"

import "./login.css"

const initialState = { email: "", password: "" }

const Login = () => {
    const [preferences, setPreferences] = useState(JSON.parse(localStorage.getItem("preferences")))
    const [loginData, setLoginData] = useState(initialState)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [showPassword, setShowPassword] = useState(true)
    const [enabled, setEnabled] = useState(true)
    const { googleSignIn, signIn, signUp, forgotPassword, user } = UserAuth()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.id]: e.target.value })
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSetSignMethod = () => {
        setEnabled(!enabled)
    }

    const handleGoogleSubmit = async () => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log("Error: ", error)
        }
    }

    const handleSubmit = async () => {
        try {
            if(enabled)
                await signIn(loginData.email, loginData.password)
            else
                await signUp(loginData.email, loginData.password)
        } catch (error) {
            console.log("Error: ", error)
        }
    }

    const handleForgetPassword = async () => {
        if(loginData.email)
            await forgotPassword(loginData.email)
                .then(() => {
                    setLoginData({
                        ...loginData,
                        email: ""
                    })
                })
    }

    const retrieveData = async () => {
        const docSnap = await getDoc(doc(firestore, "users", user?.email.split("@")[0]))
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data())

            // Store the retrieved data back into localstorage
            
            // Set user
            localStorage.setItem("user", JSON.stringify(docSnap.data().userDetails))
            
            // Set pref
            localStorage.setItem("preferences", JSON.stringify(docSnap.data().preferences))
            // setPreferences(docSnap.data().preferences)
            // Set Game Stats 
            localStorage.setItem("gamestats", JSON.stringify(docSnap.data().gameStats))
            
            // Set Map Stats 
            localStorage.setItem("mapstats", JSON.stringify(docSnap.data().mapStats))
            
            // Set Liked Cards
            localStorage.setItem("liked-cards", JSON.stringify(docSnap.data().likedCards))
            
            // Set Activity History
            localStorage.setItem("activity-history", JSON.stringify(docSnap.data().activityHistory))
            
            // Set Activity Card Stack
            localStorage.setItem("activity-user-cards", JSON.stringify(docSnap.data().activityCardStack))
            
            // Set Biome Garden
            localStorage.setItem("biome-garden", JSON.stringify(docSnap.data().biomeGarden))

            // Navigate to Dashboard
            navigate("/")
        } else {
        // doc.data() will be undefined in this case
            console.log("New User as No Such Document Found")
            navigate("/userDetails")
        }
    }

    /* If user then redirect to some other page */

    useEffect(() => {
        console.log(user)

        // If user is logged back again, then populate the localstorage from firebase
        if(user)
            retrieveData()
    }, [user])

    return (
        <div className="auth-container">
            <div className="auth-heading">
                <div className="auth-logo-container">
                    <img className="auth-logo" src={logo} alt="logo" />
                </div>
                <h1>Go-Go Biome!</h1>
            </div>
            {isModalOpen ? (
                <div className="auth-input-fields">
                    <div className="auth-toggle-container">
                        <Switch
                            checked={enabled}
                            onChange={handleSetSignMethod}
                            className={`auth-toggle ${enabled ? "bg-yellow-600" : "bg-[#ffbc58]"} relative inline-flex h-6 w-11 mb-3 items-center rounded-full`}
                        >   
                            <span
                                className={`auth-toggle ${enabled ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform transition ease-in-out duration-200 rounded-full bg-white`}
                            />
                        </Switch>
                        <span className="auth-toggle-label">{enabled ? "Sign In" : "Sign Up"}</span>
                    </div>
                    <TextField
                        required
                        autoComplete="off"
                        fullWidth
                        variant="outlined"
                        id="email"
                        label="Email"
                        className="auth-input"
                        value={loginData.email}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MdEmail />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        id="password"
                        label="Password"
                        className="auth-input-password"
                        type={showPassword ? "password" : "text"}
                        value={loginData.password}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PasswordIcon />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleShowPassword}>
                                        {showPassword ? (
                                            <VisibilityOffIcon />
                                        ) : (
                                            <VisibilityIcon />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button 
                        style={{ color: "#800080" }}
                        className="auth-forgot-password-link"
                        onClick={handleForgetPassword} 
                    >
                        Forgot Password
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        className="auth-next-btn"
                        style={{ backgroundColor: "transparent" }}
                        onClick={() => setIsModalOpen(false)}
                    >
                        Go Back
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        className="auth-next-btn"
                        style={{
                            backgroundColor: "transparent",
                            marginBottom: 0,
                        }}
                        onClick={handleSubmit}
                        disabled={!loginData.email || !loginData.password}
                    >
                        Sign In
                    </Button>
                </div>
            ) : (
                <div className="auth-next-container">
                    <Button
                        fullWidth
                        variant="outlined"
                        className="auth-next-btn"
                        onClick={handleGoogleSubmit}
                    >
                        Sign-up with Google
                    </Button>
                    {/* <Button
                        fullWidth
                        variant="outlined"
                        className="auth-next-btn"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Sign-up with Email
                    </Button> */}
                </div>
            )}
            <div className="auth-privacy">
                Go-Go Biome is a research prototype, by signing up, you agree to the {" "}
                <Link className="auth-privacy-link" to="/terms">
                    Terms and Conditions
                </Link>{" "}
                of the game.
            </div>
        </div>
    )
}

export default Login
