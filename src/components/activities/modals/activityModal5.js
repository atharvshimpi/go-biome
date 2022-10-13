import React from "react"

const ActivityModal5 = ({ gameStats, setIsActivityModal5Open, setIsActivityModal6Open }) => {
    const handleLogActivity = () => {
        localStorage.setItem(
            "gamestats",
            JSON.stringify({
                ...gameStats,
                activityBiomePointsModal: false
            })
        )

        setIsActivityModal5Open(false)
        setIsActivityModal6Open(true)
    }

    return (
        <div className="activity-progress-container">
            <div className="activity-progress-heading">
                <b>Biome Points</b>
            </div>
            <div className="activity-img-group">
                <div className="activity-img-container">
                    <img src="" alt="friendly" />
                    <div className="activity-points-earned"></div>
                </div>
                <div className="activity-img-container">
                    <img src="" alt="unfriendly" />
                </div>
            </div>
            <div>
                Current Biome Balance
                30:70
            </div>
            <button onClick={handleLogActivity} className="activity-progress-btn">
                CONTINUE
            </button>
        </div>
    )
}

export default ActivityModal5