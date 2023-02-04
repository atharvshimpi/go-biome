import React from "react"
import Lottie from "react-lottie"

import animationData from "../../../assets/videos/timer.json"
import positive from "../../../assets/sounds/UI/Yes.mp3"
import "./activityProgress.css"

const ActivityProgress = ({ gameStats, setIsActivityProgressModalOpen, setIsActivityModal2_1Open }) => {
    const handleClick = () => {
        setIsActivityProgressModalOpen(false)
        setIsActivityModal2_1Open(true)
        const audio = new Audio(positive)
        audio.play()
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
                END ACTIVITY!
            </button>
        </div>
    )
}

export default ActivityProgress
