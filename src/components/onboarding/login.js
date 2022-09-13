import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import GoogleButton from "react-google-button"

import { UserAuth } from "../../context/authContext"

import logo from "../../assets/images/logo.png"

/* GMail Account Password : gogobiome@6489 */

import "./login.css"

const Login = () => {
    const preferences = JSON.parse(localStorage.getItem("preferences"))
    const { googleSignIn, user } = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async () => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log("Error: ", error)
        }
    }

    /* If user then redirect to some other page */

    useEffect(() => {
        console.log(user)
        if(user && !preferences) navigate("/userDetails")
        else if(user) navigate("/")
    }, [user])

    return (
        <div className="auth-container">
            <div className="auth-content" style={{ minHeight: "70vh" }}>
                <div className="auth-heading">
                    <h1>Welcome to Go-Go Biome!</h1>
                </div>
                <img src={logo} alt="logo" />
                <div className="auth-next-container">
                    <GoogleButton
                        className="auth-next-btn"
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </div>
    )
}

export default Login
