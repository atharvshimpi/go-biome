import React, { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"

import { UserAuth } from "../../context/authContext"

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

/* GMail Account Password : gogobiome@6489 */

import "./login.css"

const initialState = { email: "", password: "" }

const Login = () => {
    const preferences = JSON.parse(localStorage.getItem("preferences"))
    const [loginData, setLoginData] = useState(initialState)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [showPassword, setShowPassword] = useState(true)
    const { googleSignIn, user } = UserAuth()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.id]: e.target.value })
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = () => {}

    const handleGoogleSubmit = async () => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log("Error: ", error)
        }
    }

    /* If user then redirect to some other page */

    useEffect(() => {
        console.log(user)
        if (user && !preferences) navigate("/userDetails")
        else if (user) navigate("/")
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
                        className="auth-input"
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
                        style={{ backgroundColor: "transparent", marginBottom: 0 }}
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
                    <Button
                        fullWidth
                        variant="outlined"
                        className="auth-next-btn"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Sign-up with Email
                    </Button>
                </div>
            )}
            <div className="auth-privacy">
                By signing up, you agree to our <Link className="auth-privacy-link" to="/terms">Terms and Conditions</Link> and acknowledge that our <Link className="auth-privacy-link" to="/privacy">Privacy Policy</Link> applies to you.
            </div>
        </div>
    )
}

export default Login