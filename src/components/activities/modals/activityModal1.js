import React from "react"
import select from "../../../assets/sounds/Selecting.mp3"
const audio1 = new Audio(select)
import "./preStartInfo.css"

const ActivityModal1 = ({ pref, setIsActivityProgressModalOpen, setIsActivityModal1Open }) => {
    const handleClick = () => {
        setIsActivityModal1Open(false)
        setIsActivityProgressModalOpen(true)
        audio1.play()
    }

    return (
        <div className="activity-progress-container">
            <div className="activity-progress-heading" style={{ fontSize: "1.2rem" }}>
                Engage in the activity for at least 10-30 minutes to help <b>{` ${pref.friendlyBiome} `}</b> make new friends
            </div>
            <button onClick={handleClick} className="activity-progress-btn">
                GOT IT
            </button>
        </div>
    )
}

export default ActivityModal1