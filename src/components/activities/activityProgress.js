import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Lottie from "react-lottie"

import animationData from "../../assets/lotties/timer.json"
import "./activityProgress.css"

const ActivityProgress = ({ gameStats, setIsActivityProgressModalOpen }) => {
    const [activityHistory, setActivityHistory] = useState(
        JSON.parse(localStorage.getItem("activity-history"))
    )
    const navigate = useNavigate()

    const handleClick = () => {
        activityHistory.push(gameStats.currentActivity)
        setActivityHistory(activityHistory)
        localStorage.setItem(
            "activity-history",
            JSON.stringify(activityHistory)
        )
        localStorage.setItem(
            "gamestats",
            JSON.stringify({
                ...gameStats,
                friendlyBiomePoints:
                    gameStats.friendlyBiomePoints +
                    gameStats.currentActivity.points,
                unFriendlyBiomePoints:
                    gameStats.unFriendlyBiomePoints -
                    gameStats.currentActivity.points,
                activityOngoing: false,
                activityPerformed: gameStats.activityPerformed + 1,
            })
        )
        setIsActivityProgressModalOpen(false)
        navigate("/card")
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    }

    return (
        <div className="activity-progress-container">
            <div className="activity-progress-heading">
                Your turn is currently in progress. Press the below button once
                your activity has been completed!
            </div>
            <div>
                <Lottie options={defaultOptions} height={100} width={100} />
            </div>
            <button onClick={handleClick} className="activity-progress-btn">
                Task Complete!
            </button>
        </div>
    )
}

export default ActivityProgress
