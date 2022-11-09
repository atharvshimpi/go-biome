import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import "./styles.css"

import Dashboard from "./components/dashboard/dashboard"
import PrivateRoute from "./components/private/privateRoute"
import QuestionsHome from "./components/questions/questionsHome"
import Questions from "./components/questions/questions"
import Login from "./components/onboarding/login"
import UserDetails from "./components/onboarding/userDetails"
import Settings from "./components/settings/settings"
import GameMap_v2 from "./components/gameboard/gamemap_v2"
import SocialMap from "./components/gameboard/socialmap"
import AddUserCard from "./components/user/cards/addUserCard"
import ActivityCarousal from "./components/activities/activityCarousal"
import { AuthContextProvider } from "./context/authContext"

const App = () => {

    return (
        <AuthContextProvider>
            <Router>
                <AnimatePresence exitBeforeEnter>
                    <Routes>
                        <Route path="/" element={ <PrivateRoute><Dashboard /></PrivateRoute> } />
                        <Route path="/login" element={ <Login /> } />
                        <Route path="/userDetails" element={ <UserDetails /> } />
                        <Route path="/questions-main" element={<QuestionsHome />} />
                        <Route path="/questions" element={<Questions />} />
                        <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
                        <Route path="/map" element={<PrivateRoute><GameMap_v2 /></PrivateRoute>} />
                        <Route path="/socialMap" element={<PrivateRoute><SocialMap /></PrivateRoute>} />
                        <Route path="/card" element={<PrivateRoute><AddUserCard /></PrivateRoute>} />
                        <Route path="/carousal" element={<PrivateRoute><ActivityCarousal /></PrivateRoute>} />
                    </Routes>
                </AnimatePresence>
            </Router>
        </AuthContextProvider>
    )
}

export default App
