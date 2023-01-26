import React from "react"

const BiomeDigest = () => {
    return (
        <div className="activity-progress-container">
            <div className="activity-progress-heading">
                <b>Biome Digest</b>
            </div>
            <div className="activity-progress-heading">
                <b>Date</b>
            </div>
            <div>
                Your recent moves: 
            </div>
            <div>
                Biome friends lost: 
            </div>
            <div>
                Biome friends made: 
            </div>
            <div>
                Biome says: 
            </div>
            <div>
                Closing Biome Balance: 
            </div>
            <div className="shield-icon-container">
                <img className="shield-icon" src={shieldImage} alt="friendly" />
            </div>
            <button onClick={handleClick} className="activity-progress-btn">
                CONTINUE
            </button>
        </div>
    )
}

export default BiomeDigest