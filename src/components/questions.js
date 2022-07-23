import React, { useState } from "react"
import TimePicker from "react-time-picker"
// eslint-disable-next-line
import { data, dataElements } from "./questionsData"

import "./questions.css"

const answerFormat = { q1: "", q2: "", q3: "08:00", q4: "" }

const Questions = () => {
    // eslint-disable-next-line
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    const [isNextClicked, setIsNextClicked] = useState(false)
    const [answers, setAnswers] = useState(answerFormat)
    const [timeValue, onTimeValueChange] = useState("10:00")
    
    const handleClick = () => {
        // eslint-disable-next-line
        console.log(answers)
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
                                            value={key === 0 ? answers.q1 : answers.q2}
                                            id={key === 0 ? "q1" : "q2"}
                                        />
                                    </div>
                                ) : key === 2 ? (
                                    <div className="answer-time-input">
                                        <span>Waking Time : </span>
                                        <TimePicker
                                            onChange={onTimeValueChange} 
                                            value={timeValue}
                                        />
                                    </div>
                                ) : (
                                    <div>4</div>
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
                                            Submit
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
