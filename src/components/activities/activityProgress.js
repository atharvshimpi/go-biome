import React from "react"

import "./activityProgress.css"

const ActivityProgress = ({ gameStats, setIsActivityProgressModalOpen }) => {

    const handleClick = () => {
        localStorage.setItem("gamestats", JSON.stringify({ ...gameStats, activityOngoing: false }))
        setIsActivityProgressModalOpen(false)
    }

    return (
        <div className="activity-progress-container">
            <div className="activity-progress-heading">
                Your turn is currently in progress. Press the below button once your activity has been completed!
            </div>
            <button onClick={handleClick} className="activity-progress-btn">
                Task Complete!
            </button>
        </div>
    )
}

export default ActivityProgress