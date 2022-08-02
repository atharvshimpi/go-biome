import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import TimePicker from "react-time-picker"
// eslint-disable-next-line
import { data, dataElements } from "./questionsData"

import "./questions.css"

const answerFormat = { friendlyBiome: "", unFriendlyBiome: "", wakeupTime: "08:00", sleepTime: "22:00", activityCount: 0 }

const Questions = () => {
    // eslint-disable-next-line
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    const [isNextClicked, setIsNextClicked] = useState(false)
    const [answers, setAnswers] = useState(answerFormat)
    const [wakeTimeValue, onWakeTimeValueChange] = useState("08:00")
    const [sleepTimeValue, onSleepTimeValueChange] = useState("22:00")
    const [loading, setLoading] = useState(false)
    // eslint-disable-next-line
    const navigate = useNavigate()
    
    const handleClick = () => {
        localStorage.setItem("preferences", JSON.stringify({...answers, wakeupTime: wakeTimeValue, sleepTime: sleepTimeValue, vibrate: false}))
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            window.location.reload()
        }, 1000)
    }

    return (
        <>
            {isNextClicked ? (
                data.map((item, key) => {
                    return (
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
                                {/* input */}
                                {key === 0 || key === 1 ? (
                                    <div className="answer-text-input">
                                        <input
                                            className="biome-name"
                                            type="text"
                                            onChange={(e) => setAnswers({ ...answers, [e.target.id]: e.target.value })}
                                            placeholder={`Enter ${item.question.split(" ")[2]} biome name`}
                                            value={key === 0 ? answers.friendlyBiome : answers.unFriendlyBiome}
                                            id={key === 0 ? "friendlyBiome" : "unFriendlyBiome"}
                                        />
                                    </div>
                                ) : key === 2 ? (
                                    <div className="answer-time-input-container">
                                        <div className="answer-time-input">
                                            <span className="answer-time-label">Wakeup Time : </span>
                                            <TimePicker
                                                onChange={onWakeTimeValueChange} 
                                                value={wakeTimeValue}
                                            />
                                        </div>
                                        <br /><br />
                                        <div className="answer-time-input">
                                            <span className="answer-time-label">Sleeping Time : </span>
                                            <TimePicker
                                                onChange={onSleepTimeValueChange} 
                                                value={sleepTimeValue}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="answer-actCount-input">
                                        <input 
                                            className="biome-name" 
                                            type="number" 
                                            id="activityCount"
                                            placeholder="Enter Activity Count"
                                            onChange={(e) => setAnswers({ ...answers, [e.target.id]: e.target.value })}
                                            value={answers.activityCount}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="questions-btn-container">
                                {key !== 0 && 
                                    <a
                                        className="questions-btn-a"
                                        href={`#${key - 1}`}
                                    >
                                        <button className="questions-btn">
                                            Back
                                        </button>
                                    </a>
                                }
                                {key === 3 ? (
                                    <a
                                        className="questions-btn-a"
                                    >
                                        <button onClick={handleClick} className="questions-btn">
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
                    )
                })
            ) : (
                <div className="questions-container">
                    <div className="questions-heading">
                        <h1>
                            Welcome to Go Biome,{" "}
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
                            onClick={() => setIsNextClicked(true)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Questions
