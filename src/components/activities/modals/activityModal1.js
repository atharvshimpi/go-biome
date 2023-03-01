import React, { useState, useEffect } from "react"

import select from "../../../assets/sounds/UI/Proceed.mp3"
import "./preStartInfo.css"

const ActivityModal1 = ({ pref, setIsActivityProgressModalOpen, setIsActivityModal1Open }) => {
    const audio = new Audio(select)
    const [soundEnabled, setSoundEnabled] = useState(pref.sound)
    const handleClick = () => {
        setIsActivityModal1Open(false)
        setIsActivityProgressModalOpen(true)
        if(soundEnabled){audio.play()}
    }

    return (
        <div className="activity-progress-container">
            <div className="activity-progress-heading" style={{ fontSize: "1rem" }}>
                Engage in the activity for at least 10-30 minutes to help <b>{` ${pref.friendlyBiome} `}</b> make friends
            </div>
            <button onClick={handleClick} className="activity-progress-btn">
                GOT IT
            </button>
        </div>
    )
}

export default ActivityModal1