import React, { useState } from "react"
// eslint-disable-next-line
import { data, dataElements } from "./questionsData"

import "./questions.css"

const Questions = () => {
    // eslint-disable-next-line
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    const [isNextClicked, setIsNextClicked] = useState(false)
    // eslint-disable-next-line
    console.log(data)

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
                                <div></div>
                            </div>
                            <div className="questions-btn-container">
                                <a
                                    className="questions-btn-a"
                                    href={`#${key - 1}`}
                                >
                                    <button className="questions-btn">
                                        Back
                                    </button>
                                </a>
                                <a
                                    className="questions-btn-a"
                                    href={`#${key + 1}`}
                                >
                                    <button className="questions-btn">
                                        Next
                                    </button>
                                </a>
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
