import React from "react"

import select from "../../../assets/sounds/UI/Proceed.mp3"
import biomePoints from "../../../assets/images/biome/points.png"
import minionPoints from "../../../assets/images/minion/minion1.png"

const ActivityModal5 = ({ gameStats, setIsActivityModal5Open, setIsActivityModal6Open, setIsActivityModal8Open }) => {   
    const audio = new Audio(select)
    
    const handleLogActivity = () => {
        localStorage.setItem(
            "gamestats",
            JSON.stringify({
                ...gameStats,
                activityBiomePointsModal: false
            })
        )
        
        setIsActivityModal5Open(false)
        audio.play()
        if(gameStats.friendlyBiomePoints == 85 && !gameStats.activityBiomeCongMsg)
            setIsActivityModal8Open(true)
        else
            setIsActivityModal6Open(true)
    }

    return (
        <div className="activity-progress-container" style={{ width: "100%" }}>
            <div className="activity-progress-heading">
                <b>Biome Points</b>
            </div>
            <div className="activity-img-group">
                <div className="activity-img-container">
                    <img className="activity-img" src={biomePoints} alt="friendly" />
                    <div className="activity-points-earned">+{gameStats.currentActivity.points}</div>
                </div>
                <div className="activity-img-container">
                    <img className="activity-img" src={minionPoints} alt="unfriendly" style={{ position: "relative", height: "8rem", right: "1rem", }} />
                    <div className="activity-points-earned">-{gameStats.currentActivity.points}</div>
                </div>
            </div>
            <div className="activity-img-details">
                Current Biome Balance
                <br />
                <b className="activity-img-currentScore">{gameStats.friendlyBiomePoints} : {gameStats.unFriendlyBiomePoints}</b>
            </div>
            <button onClick={handleLogActivity} className="activity-progress-btn">
                CONTINUE
            </button>
        </div>
    )
}

export default ActivityModal5