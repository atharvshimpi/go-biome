import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./styles.css"

import Questions from "./components/questions"
import Login from "./components/login"

const App = () => {
    const [authenticated, setAuthenticated] = useState(null)
    useEffect(() => {
        const userPresent = JSON.parse(localStorage.getItem("user"))
        if (userPresent) {
            setAuthenticated(userPresent)
        }
    }, [])

    return (
        <Router>
            <Routes>
                <Route path="/" element={ authenticated ? <Questions /> : <Login />} />
            </Routes>
        </Router>
    )
}

export default App
