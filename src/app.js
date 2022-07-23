import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./styles.css"

import Dashboard from "./components/dashboard"
import Questions from "./components/questions"
import Login from "./components/login"

const App = () => {
    const [authenticated, setAuthenticated] = useState(null)
    const [preferences, setPreferences] = useState(null)
    useEffect(() => {
        const userPresent = JSON.parse(localStorage.getItem("user"))
        const prefPresent = JSON.parse(localStorage.getItem("preferences"))
        if (userPresent) {
            setAuthenticated(userPresent)
        }

        if(prefPresent) {
            setPreferences(prefPresent)
        }
    }, [])

    return (
        <Router>
            <Routes>
                <Route path="/" element={ authenticated ? (preferences ? <Dashboard /> : <Questions />) : <Login /> } />
            </Routes>
        </Router>
    )
}

export default App
