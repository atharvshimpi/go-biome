import React from "react"

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
        <div className="activity-progress-container">
            <div className="activity-progress-heading">
                Biome Movement  
            </div>
            <div>
                {`Move ${pref.friendlyBiome} X steps forward`}
            </div>
            <button onClick={handleClick} className="activity-progress-btn">
                OK
            </button>
        </div>
    )
}

export default ActivityModal7