import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { updateDoc, doc } from "firebase/firestore"

import { firestore } from "../../firebase"
import { data } from "../questions/questionsData"
import { setDefault } from "../questions/setDefault"
import {
    setFriendlyBiomeName,
    setUnFriendlyBiomeName,
    setWakeupTime,
    setSleepTime,
} from "../questions/setQuestions"

import { Box, CircularProgress } from "@material-ui/core"
import select from "../../assets/sounds/UI/Proceed.mp3"

const updateTime = (hours, minutes, seconds) => {
    const newDate = new Date()
    newDate.setHours(hours)
    newDate.setMinutes(minutes)
    newDate.setSeconds(seconds)

    return newDate.toISOString()
}

const initialState = {
    friendlyBiome: "Bugsy",
    unFriendlyBiome: "Minion",
    wakeupTime: updateTime(9, 0, 0),
    sleepTime: updateTime(23, 0, 0),
    // morningCheckInTime: updateTime(10, 30, 0),
    // mealTime: updateTime(14, 0, 0),
    // vibrate: false,
    sound: false
}

const QuestionModal = ({ qNum }) => {
    const user = JSON.parse(localStorage.getItem("user"))
    // const pref = JSON.parse(localStorage.getItem("preferences"))	
    //const [soundEnabled, setSoundEnabled] = useState(pref.sound)
    const [answers, setAnswers] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const audio = new Audio(select)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setAnswers({ ...answers, [e.target.id]: e.target.value })
    }

    const handleSubmit = () => {
        setDefault()
        localStorage.setItem("preferences", JSON.stringify(answers))

        // Update to Firebase at the same time
        updateDoc(doc(firestore, "users", user.email.split("@")[0]), {
            preferences: answers
        })

        setLoading(true)

        //if(soundEnabled){audio.play()}
        setTimeout(() => {
            setLoading(false)
            navigate("/")
        }, 1000)
    }

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
            className="questions-container"
            // Env Var value might be causing problem 
            style={{backgroundImage: `url(${require("../../assets/images/bg/gameState3.png")})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}
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
                            backgroundColor: "#f3bc78",
                            marginBottom: 0,
                            display: qNum <= 1 ? "none" : "block",
                        }}
                        className="questions-btn"
                        onClick={() => {
                            //if(soundEnabled){audio.play()}
                            if (qNum <= 1) navigate("/questions")
                            else navigate(`/questions?q=${qNum - 1}`)
                        }}
                    >
                        Back
                    </button>
                    <button
                        style={{
                            backgroundColor: "#f3bc78",
                            marginBottom: 0,
                        }}
                        className="questions-btn"
                        onClick={() => {
                            // if(soundEnabled){audio.play()}
                            if (qNum < 4) navigate(`/questions?q=${qNum + 1}`)
                            else handleSubmit()
                        }}
                    >
                        {qNum >= 4
                            ? loading
                                ? (
                                    <Box sx={{ display: "flex", justifyContent: "center", fontSize: "0.8rem" }}>
                                        <CircularProgress style={{ width: "25px", height: "25px" }} /> 
                                    </Box>
                                )
                                : "Submit"
                            : "Proceed"}
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default QuestionModal
