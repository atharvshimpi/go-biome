import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { firestore } from "../../../firebase"
import { doc, updateDoc } from "firebase/firestore"

import select from "../../../assets/sounds/UI/Proceed.mp3"
import uuid from "react-uuid"

const ActivityModal3 = ({ gameStats, pref, setIsActivityModal3Open, setIsActivityModal5Open }) => {
    const userDetails = JSON.parse(localStorage.getItem("user"))
    const mapStats = JSON.parse(localStorage.getItem("mapstats"))
    const [activityHistory, setActivityHistory] = useState(JSON.parse(localStorage.getItem("activity-history")))
    const audio = new Audio(select)
    const newUUID = uuid()
    const navigate = useNavigate()
    
    const handleLogActivity = () => {
        let tempActivityPerformed = gameStats.activityPerformed
        tempActivityPerformed[gameStats.currentActivity.categoryId]++

        audio.play()        
        activityHistory.push({
            ...gameStats.currentActivity,
            activityId: newUUID,
        })
        setActivityHistory(activityHistory)
        localStorage.setItem(
            "activity-history",
            JSON.stringify(activityHistory)
        )

        updateDoc(doc(firestore, "users", userDetails.email.split("@")[0]), {
            activityHistory: activityHistory
        })

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
        if(gameStats.friendlyBiomePoints + gameStats.currentActivity.points <= 85) {
            localStorage.setItem(
                "gamestats",
                JSON.stringify({
                    ...gameStats,
                    currentActivity: {
                        ...gameStats.currentActivity,
                        activityId: newUUID
                    },
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

            updateDoc(doc(firestore, "users", userDetails.email.split("@")[0]), {
                gameStats: {
                    ...gameStats,
                    friendlyBiomePoints: gameStats.friendlyBiomePoints + gameStats.currentActivity.points,
                    activityPerformed: tempActivityPerformed,
                }
            })
        } else {
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

            updateDoc(doc(firestore, "users", userDetails.email.split("@")[0]), {
                gameStats: {
                    ...gameStats,
                    friendlyBiomePoints: 85,
                    activityPerformed: tempActivityPerformed,
                }
            })
        }
        
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