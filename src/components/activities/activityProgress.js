import React from "react"
import Lottie from "react-lottie"

import animationData from "../../assets/lotties/timer.json"
import "./activityProgress.css" 

const ActivityProgress = ({ gameStats, setIsActivityProgressModalOpen }) => {

    const handleClick = () => {
        localStorage.setItem("gamestats", JSON.stringify({ ...gameStats, activityOngoing: false }))
        setIsActivityProgressModalOpen(false)
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <div className="activity-progress-container">
            <div className="activity-progress-heading">
                Your turn is currently in progress. Press the below button once your activity has been completed!
            </div>
            <div>
                <Lottie 
                    options={defaultOptions}
                    height={100}
                    width={100}
                />
            </div>
            <button onClick={handleClick} className="activity-progress-btn">
                Task Complete!
            </button>
        </div>
    )
}

export default ActivityProgress