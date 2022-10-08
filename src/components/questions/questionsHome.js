import React, { useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

import "./questions.css"

const QuestionsHome = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
            className="questions-container"
        >
            <div className="questions-content">
                <div className="questions-heading">
                    <h1>
                        Welcome to Go-Go Biome,{" "}
                        <span className="username">{user.username}</span>!
                    </h1>
                </div>
                <div className="questions-about">
                    <p>
                        This game is made to understand the human-microbial
                        interactions and the activities that influence this
                        relationship. <br />
                        <br />
                        Please answer the next few questions for better
                        experience!
                    </p>
                </div>
                <div className="questions-btn-container">
                    <button
                        className="questions-btn"
                        onClick={() => navigate("/questions?q=1")}
                    >
                        Proceed
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default QuestionsHome
