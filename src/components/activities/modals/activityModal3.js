import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { demoNotification } from "../../notifications/demo"

const ActivityModal3 = ({ gameStats, pref, setIsActivityModal3Open, setIsActivityModal5Open }) => {
    const userDetails = JSON.parse(localStorage.getItem("user"))
    const mapStats = JSON.parse(localStorage.getItem("mapstats"))
    const [activityHistory, setActivityHistory] = useState(JSON.parse(localStorage.getItem("activity-history")))
    const msgTemplate = `Congratulations ${userDetails.username} on completing the activity!\n${pref.friendlyBiome} has grown by ${gameStats.currentActivity.points} points!`
    const navigate = useNavigate()
    
    const handleLogActivity = () => {
        let tempActivityPerformed = gameStats.activityPerformed
        tempActivityPerformed[gameStats.currentActivity.categoryId]++

        demoNotification(msgTemplate)
        activityHistory.push(gameStats.currentActivity)
        setActivityHistory(activityHistory)
        localStorage.setItem(
            "activity-history",
            JSON.stringify(activityHistory)
        )

        // mapStats update
        localStorage.setItem(
            "mapstats",
            JSON.stringify({
                ...mapStats,
                friendlyBiomePoints:
                    mapStats.friendlyBiomePoints +
                    gameStats.currentActivity.points,
                unFriendlyBiomePoints:
                    mapStats.unFriendlyBiomePoints -
                    gameStats.currentActivity.points,
            })
        )

        // if biome points reach 85, don't increase them further
        if(gameStats.friendlyBiomePoints + gameStats.currentActivity.points <= 85)
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
                    activityBiomePointsModal: true,
                    activityPerformed: tempActivityPerformed,
                    activityPointReplayed: true,
                })
            )
        else
            localStorage.setItem(
                "gamestats",
                JSON.stringify({
                    ...gameStats,
                    // Else set the points to the max possible value i.e. friendlyBiome = 85 & unFriendlyBiome = 15
                    friendlyBiomePoints: 85,
                    unFriendlyBiomePoints: 15,
                    activityOngoing: false,
                    activityBiomePointsModal: false,
                    activityPerformed: tempActivityPerformed,
                    activityPointReplayed: true,
                })
            )
        
        setIsActivityModal3Open(false)
        setIsActivityModal5Open(true)
        navigate("/card")            
    }

    return (
        <div className="activity-progress-container">
            <div className="activity-progress-heading">
                Biome <b>{` ${pref.friendlyBiome} `}</b> is on the path to making new friends :) Log your activity to let your biome know that you helped it.
            </div>
            <button onClick={handleLogActivity} className="activity-progress-btn">
                LOG ACTIVITY
            </button>
        </div>
    )
}

export default ActivityModal3