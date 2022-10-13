import React from "react"

import biomePoints from "../../../assets/images/biome/points.png"

const ActivityModal7 = ({ gameStats, pref, setIsActivityModal7Open }) => {
    const handleClick = () => {
        localStorage.setItem(
            "gamestats",
            JSON.stringify({
                ...gameStats,
                activityBiomeMovementModal: false
            })
        )
        setIsActivityModal7Open(false)
    }
    return (
        <div className="activity-progress-container" style={{ width: "100%" }}>
            <div className="activity-progress-heading">
                <b>Biome Movement</b>  
            </div>
            <div className="activity-img-container">
                <img className="activity-img" src={biomePoints} alt="friendly" style={{ width: "5rem" }} />
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