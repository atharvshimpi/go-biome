import React from "react"

import select from "../../../assets/sounds/UI/Proceed.mp3"
import incorrect from "../../../assets/sounds/Incorrect.mp3"

const ActivityModal2_1 = ({ pref, gameStats, setGameStats, setIsActivityProgressModalOpen, setIsActivityModal2_1Open, setIsActivityModal3Open }) => {
    const handleYes = () => {
        setIsActivityModal2_1Open(false)
        setIsActivityModal3Open(true)
        
        // set activity finish time
        setGameStats({
            ...gameStats, 
            currentActivity: { 
                ...gameStats.currentActivity,
                activityTimings: {
                    activityStart: gameStats.currentActivity.activityTimings.activityStart,
                    activityFinish: new Date().toISOString()
                } 
            }
        })

        // set this to localstorage
        localStorage.setItem("gamestats", JSON.stringify({
            ...gameStats, 
            currentActivity: { 
                ...gameStats.currentActivity,
                activityTimings: {
                    activityStart: gameStats.currentActivity.activityTimings.activityStart,
                    activityFinish: new Date().toISOString()
                } 
            }
        }))

        const audio = new Audio(select)
        audio.play()
    }

    const handleNo = () => {
        setIsActivityModal2_1Open(false)
        setIsActivityProgressModalOpen(true)
        const audio = new Audio(incorrect)
        audio.play()
    }

    return (
        <div className="activity-progress-container">
            <div className="activity-progress-heading">
                {`Biome ${pref.friendlyBiome} is watching you. Are you sure you completed the activity?`}
            </div>
            <button onClick={handleYes} className="activity-progress-btn">
                YES
            </button>
            <button onClick={handleNo} className="activity-progress-cancel-btn">
                NO, GO BACK
            </button>
        </div>
    )
}

export default ActivityModal2_1