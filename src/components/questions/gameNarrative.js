import React, { useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

import "./questions.css"

const GameNarrative = () => {
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
                <div className="questions-about">
                    <p>
                    It was once a splendid trail where Bugsy, the friendly biome, and Minion, the unfriendly biome lived in harmony with one another. But suddenly, owing to some human factors, the minions increased in population, destroying most of bugsy&apos;s friends along with the beloved gut trail. The trail is now a dark and eerie place with minions lurking around every corner. Your mission is to energise bugsy- the friendly biome, and help bring its friends back. Help bugsy by increasing the friendly biome population and decreasing the unfriendly biome population to a ratio of 85:15, that depicts the state of a happy and balanced gut.
					<br />
					<br />
					Go on, engage in diverse activities and help bugsy restore the balance they and their friends once enjoyed. Beware, the minions have to be kept under check everyday to protect the trail.
                        <br /><br />
                        Before you begin, please answer the next few questions for better
                        experience!
                    </p>
                </div>
                <div className="questions-btn-container">
                    <button
                        style={{
                            backgroundColor: "#f3bc78",
                            marginBottom: 0,
                        }}
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

export default GameNarrative
