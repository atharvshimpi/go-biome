import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Lottie from "react-lottie"

import animationData from "../../assets/lotties/timer.json"
import "./activityProgress.css"
import {firestore} from "../../firebase"
import {collection, addDoc, setDoc, doc} from "firebase/firestore"

const ActivityProgress = ({ gameStats, setGameStats, setIsActivityProgressModalOpen }) => {
    const [activityHistory, setActivityHistory] = useState(
        JSON.parse(localStorage.getItem("activity-history"))
    )
    const navigate = useNavigate()

    const handleClick = () => {
        let tempActivityPerformed = gameStats.activityPerformed
        tempActivityPerformed[gameStats.currentActivity.categoryId]++

        // demoNotification()
        activityHistory.push(gameStats.currentActivity)
        setActivityHistory(activityHistory)
        localStorage.setItem(
            "activity-history",
            JSON.stringify(activityHistory)
        )

        const user = JSON.parse(localStorage.getItem("user"))

        // if biome points reach 85, don't increase them further
        if(gameStats.friendlyBiomePoints + gameStats.currentActivity.points <= 85) {
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
                    activityPerformed: tempActivityPerformed,
                    activityPointReplayed: true,
                })
            )
            setDoc(doc(firestore, user.username, "stats"), {
                friendlyBiomePoints: friendlyBiomePoints + gameStats.currentActivity.points
            })
        }
        else {
            localStorage.setItem(
                "gamestats",
                JSON.stringify({
                    ...gameStats,
                    friendlyBiomePoints: 85,
                    unFriendlyBiomePoints: 15,
                    activityOngoing: false,
                    activityPerformed: gameStats.activityPerformed + 1,
                    activityPointReplayed: true,
                })
            )
            setDoc(doc(firestore, user.username, "stats"), {
                friendlyBiomePoints: 85
            })
        }

        
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
