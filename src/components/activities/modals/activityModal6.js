import React from "react"
import { useNavigate } from "react-router-dom"

const ActivityModal6 = ({ gameStats, pref, setIsActivityModal6Open }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        localStorage.setItem(
            "gamestats",
            JSON.stringify({
                ...gameStats,
                activityBiomePointsModal: false,
                activityBiomeMovementModal: true
            })
        )

        setIsActivityModal6Open(false)
        navigate("/map")
    }
    return (
        <div className="activity-progress-container">
            <div className="activity-progress-heading">
                Biome Energy Status
            </div>
            <div>
                {`Congratulations! You have helped ${pref.friendlyBiome} achieve ${`Full Strength`}.`}
            </div>
            <button onClick={handleClick} className="activity-progress-btn">
                CONTINUE
            </button>
        </div>
    )
}

export default ActivityModal6