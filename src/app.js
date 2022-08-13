import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import "./styles.css"

import Dashboard from "./components/dashboard/dashboard"
import QuestionsHome from "./components/questions/questionsHome"
import Questions from "./components/questions/questions"
import Login from "./components/onboarding/login"
import Settings from "./components/settings/settings"
import Gamemap from "./components/gameboard/gamemap"
import AddUserCard from "./components/modals/addUserCard"

const App = () => {
    const [authenticated, setAuthenticated] = useState(null)
    const [preferences, setPreferences] = useState(null)

    useEffect(() => {
        const userPresent = JSON.parse(localStorage.getItem("user"))
        const prefPresent = JSON.parse(localStorage.getItem("preferences"))
        if (userPresent) {
            setAuthenticated(userPresent)
        }

        if (prefPresent) {
            setPreferences(prefPresent)
        }
    }, [])

    return (
        <Router>
            <AnimatePresence exitBeforeEnter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            authenticated ? (
                                preferences ? (
                                    <Dashboard />
                                ) : (
                                    <QuestionsHome />
                                )
                            ) : (
                                <Login />
                            )
                        }
                    />
                    <Route path="/questions" element={<Questions />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/map" element={<Gamemap />} />
                    <Route path="/card" element={<AddUserCard />} />
                </Routes>
            </AnimatePresence>
        </Router>
    )
}

export default App
