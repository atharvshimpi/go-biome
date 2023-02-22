import React, { useState, useEffect } from "react"

import select from "../../../assets/sounds/UI/Proceed.mp3"

const ActivityModal7 = ({ biomeGarden, gameStats, pref, setIsActivityModal7Open }) => {
    const [soundEnabled, setSoundEnabled] = useState(pref.sound)
    const handleClick = () => {
        const audio = new Audio(select)
        localStorage.setItem(
            "gamestats",
            JSON.stringify({
                ...gameStats,
                activityBiomeMovementModal: false,
                currentActivity: null,
            })
        )
        if(soundEnabled){audio.play()}
        setIsActivityModal7Open(false)
    }

    if (!JSON.parse(localStorage.getItem("gamestats")).currentActivity) {
        return null
    }

    return (
        <div className="activity-progress-container-map" style={{ width: "100%" }}>
            <div className="activity-progress-heading">
                <b>Biome Movement</b>  
            </div>
            <div className="activity-img-container">
                <img className="activity-img" src={require(`../../../assets/images/biome/${biomeGarden.active}.png`)} alt="friendly" style={{ width: "5rem" }} />
            </div>
            <div>
                {`Move ${pref.friendlyBiome} `} <b>{gameStats.currentActivity.points / 5}</b> {` steps forward`}
            </div>
            <button onClick={handleClick} className="activity-progress-btn">
                OK
            </button>
        </div>
    )
}

export default ActivityModal7