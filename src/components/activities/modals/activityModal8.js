import React from "react"

import positive from "../../../assets/sounds/Positive.mp3"
import biomePoints from "../../../assets/images/biome/points.png"
import celebration from "../../../assets/images/celebration.png"
import em37 from "../../../assets/images/em37.png"

const ActivityModal8 = ({ gameStats, setGameStats, pref, setIsActivityModal8Open, setIsActivityModal6Open }) => {
    const handleClick = () => {
        localStorage.setItem(
            "gamestats",
            JSON.stringify({
                ...gameStats,
                activityBiomeCongMsg: true
            })
        )
        setGameStats({...gameStats, activityBiomeCongMsg: true})
        const audio = new Audio(positive)
        audio.play()
        setIsActivityModal8Open(false)
        setIsActivityModal6Open(true)
    }

    return (
        <div className="activity-progress-container">
            <div className="activity-biomecong-container">
                <img className="activity-biomecong-img" src={celebration} alt="friendly" />
            </div>
            <div className="activity-progress-heading">
                {`Go-go Biome! You have successfully balanced your biome today. ${pref.friendlyBiome} sends you a hug!`}
            </div>
            <div className="activity-img-group" style={{ justifyContent: "center" }}>
                <img className="activity-biome-congra-img" src={biomePoints} alt="friendly" />
                <img className="activity-biome-congra-img" src={em37} alt="em37" />
            </div>
            <button onClick={handleClick} className="activity-progress-btn">
                CONTINUE
            </button>
        </div>
    )
}

export default ActivityModal8