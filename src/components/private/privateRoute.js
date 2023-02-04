import React from "react"
import { Navigate } from "react-router-dom"
import { UserAuth } from "../../context/authContext"

const PrivateRoute = ({ children }) => {
    // const { user } = UserAuth()
    const user = JSON.parse(localStorage.getItem("user"))
    if(!user) {
        return <Navigate to="/login" />
    }
    return children
}

export default PrivateRoute