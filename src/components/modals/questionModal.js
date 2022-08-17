import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

import { data } from "../questions/questionsData"
import { setDefault } from "../questions/setDefault"
import {
    setFriendlyBiomeName,
    setUnFriendlyBiomeName,
    setWakeupTime,
    setSleepTime,
} from "../questions/setQuestions"

const initialState = {
    friendlyBiome: "Bugsy",
    unFriendlyBiome: "Minion",
    wakeupTime: null,
    sleepTime: null,
    morningCheckInTime: null,
    mealTime: null,
    vibrate: false,
    activityCount: 3,
}

const QuestionModal = ({ qNum }) => {
    const [answers, setAnswers] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setAnswers({ ...answers, [e.target.id]: e.target.value })
    }

    const handleSubmit = () => {
        setDefault()
        localStorage.setItem("preferences", JSON.stringify(answers))
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            window.location.href = "/"
        }, 1000)
    }

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
            className="questions-container"
        >
            <div className="questions-content">
                <div className="questions-heading">
                    <h1>{data[qNum - 1].question}</h1>
                </div>
                <div className="questions-about">
                    {qNum === 1
                        ? setFriendlyBiomeName({ answers, handleChange })
                        : null}
                    {qNum === 2
                        ? setUnFriendlyBiomeName({ answers, handleChange })
                        : null}
                    {qNum === 3 ? setWakeupTime({ answers, setAnswers }) : null}
                    {qNum === 4 ? setSleepTime({ answers, setAnswers }) : null}
                </div>
                <div className="space-between"></div>
                <div className="questions-btn-container">
                    <button
                        style={{
                            marginRight: "0.5rem",
                            display: qNum <= 1 ? "none" : "block",
                        }}
                        className="questions-btn"
                        onClick={() => {
                            if (qNum <= 1) navigate("/questions")
                            else navigate(`/questions?q=${qNum - 1}`)
                        }}
                    >
                        Back
                    </button>
                    <button
                        className="questions-btn"
                        onClick={() => {
                            if (qNum < 4) navigate(`/questions?q=${qNum + 1}`)
                            else handleSubmit()
                        }}
                    >
                        {qNum >= 4
                            ? loading
                                ? "Loading..."
                                : "Submit"
                            : "Proceed"}
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default QuestionModal
