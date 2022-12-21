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
                    Go-Go Biome is an open-ended digital game designed to engage players in real-world activities that can influence gut microbial diversity. The human gut consists of diverse friendly and unfriendly microbial species which is important for a healthy gut, and the balance between the two is crucial to protect the human body against various illnesses.<br />
                    </p>
                </div>
                <div className="questions-btn-container">
                    <button
                        style={{
                            backgroundColor: "#f3bc78",
                            marginBottom: 0,
                        }}
                        className="questions-btn"
                        onClick={() => navigate("/game-narrative")}
                    >
                        Proceed
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default QuestionsHome
