import React from "react"

const ActivityModal2_1 = ({ pref, setIsActivityProgressModalOpen, setIsActivityModal2_1Open, setIsActivityModal3Open }) => {
    const handleYes = () => {
        setIsActivityModal2_1Open(false)
        setIsActivityModal3Open(true)

    }

    const handleNo = () => {
        setIsActivityModal2_1Open(false)
        setIsActivityProgressModalOpen(true)
    }

    return (
        <div className="activity-progress-container">
            <div className="activity-progress-heading">
                {`Biome ${pref.friendlyBiome} is watching you. Are you sure you completed the activity?`}
            </div>
            <button onClick={handleYes} className="activity-progress-btn">
                YES
            </button>
            <button onClick={handleNo} className="activity-progress-btn">
                NO, GO BACK
            </button>
        </div>
    )
}

export default ActivityModal2_1