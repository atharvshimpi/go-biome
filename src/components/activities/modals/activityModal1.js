import React from "react"

import select from "../../../assets/sounds/UI/Proceed.mp3"
import "./preStartInfo.css"

const ActivityModal1 = ({ pref, setIsActivityProgressModalOpen, setIsActivityModal1Open }) => {
    const audio = new Audio(select)

    const handleClick = () => {
        setIsActivityModal1Open(false)
        setIsActivityProgressModalOpen(true)
        audio.play()
    }

    return (
        <div className="activity-progress-container">
            <div className="activity-progress-heading" style={{ fontSize: "1.2rem" }}>
                ENGAGE IN THE ACTIVITY FOR AT LEAST 10-30 MINUTES TO HELP <b>{` ${pref.friendlyBiome} `}</b> MAKE NEW FRIENDS
            </div>
            <button onClick={handleClick} className="activity-progress-btn">
                GOT IT
            </button>
        </div>
    )
}

export default ActivityModal1