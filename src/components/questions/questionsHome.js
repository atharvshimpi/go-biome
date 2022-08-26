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

/*
<div id={key} key={key} className="questions-container">
                            <div className="questions-heading">
                                <h1>{item.question}</h1>
                                <span>
                                    {item.description.length > 0
                                        ? `(${item.description})`
                                        : null}
                                </span>
                            </div>
                            <div className="questions-about">
                                {// input }
                                {key === 0 || key === 1 ? (
                                    <div className="answer-text-input">
                                        <input
                                            className="biome-name"
                                            type="text"
                                            onChange={(e) =>
                                                setAnswers({
                                                    ...answers,
                                                    [e.target.id]:
                                                        e.target.value,
                                                })
                                            }
                                            placeholder={`Enter ${
                                                item.question.split(" ")[2]
                                            } biome name`}
                                            value={
                                                key === 0
                                                    ? answers.friendlyBiome
                                                    : answers.unFriendlyBiome
                                            }
                                            id={
                                                key === 0
                                                    ? "friendlyBiome"
                                                    : "unFriendlyBiome"
                                            }
                                        />
                                    </div>
                                ) : key === 2 ? (
                                    <div className="answer-time-input-container">
                                        <div className="answer-time-input">
                                            <span className="answer-time-label">
                                                Wakeup Time :{" "}
                                            </span>
                                            <TimePicker
                                                onChange={onWakeTimeValueChange}
                                                value={wakeTimeValue}
                                            />
                                        </div>
                                        <br />
                                        <br />
                                        <div className="answer-time-input">
                                            <span className="answer-time-label">
                                                Sleeping Time :{" "}
                                            </span>
                                            <TimePicker
                                                onChange={
                                                    onSleepTimeValueChange
                                                }
                                                value={sleepTimeValue}
                                            />
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                            <div className="questions-btn-container">
                                {key !== 0 && (
                                    <a
                                        className="questions-btn-a"
                                        href={`#${key - 1}`}
                                    >
                                        <button className="questions-btn">
                                            Back
                                        </button>
                                    </a>
                                )}
                                {key === 3 ? (
                                    <a className="questions-btn-a">
                                        <button
                                            onClick={handleClick}
                                            className="questions-btn"
                                        >
                                            {loading ? "Loading..." : "Submit"}
                                        </button>
                                    </a>
                                ) : (
                                    <a
                                        className="questions-btn-a"
                                        href={`#${key + 1}`}
                                    >
                                        <button className="questions-btn">
                                            Next
                                        </button>
                                    </a>
                                )}
                            </div>
                        </div>
*/