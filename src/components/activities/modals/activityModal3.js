import React from "react"
import { useNavigate } from "react-router-dom"

const ActivityModal3 = ({ pref, setIsActivityModal3Open }) => {
    const navigate = useNavigate()
    
    const handleLogActivity = () => {
        setIsActivityModal3Open(false)
        navigate("/card")
    }

    return (
        <div className="activity-progress-container">
            <div className="activity-progress-heading">
                {`Biome ${pref.friendlyBiome} is on the path to making new friends :) Log your activity to let your biome know that you helped it.`}
            </div>
            <button onClick={handleLogActivity} className="activity-progress-btn">
                LOG ACTIVITY
            </button>
        </div>
    )
}

export default ActivityModal3