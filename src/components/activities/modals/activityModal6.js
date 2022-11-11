import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import Nostrength from "../../../assets/images/shield/nostrength.svg"
import Partialstrength from "../../../assets/images/shield/partialstrength.svg"
import Fullstrength from "../../../assets/images/shield/fullstrength.svg"
import Diversitycheck from "../../../assets/images/shield/diversitycheck.svg"
import Superdiversity from "../../../assets/images/shield/superdiversity.svg"
import select from "../../../assets/sounds/Selecting.mp3"

const audio1 = new Audio(select)
const ActivityModal6 = ({ gameStats, pref, setIsActivityModal6Open, setIsActivityModal9Open }) => {
    const [shieldImage, setSheildImage] = useState(Nostrength)
    const biomeStatusNames = ["Partial Strength", "Full Strength", "Biome Diversity", "Super Diversity"]
    const navigate = useNavigate()

    const distAct = (arr) => {
        let count = 0
        for(let i = 0; i < arr.length; i++) {
            if(arr[i])
                count++
        }
        return count
    }

    let numOfDistActPerformed = distAct(gameStats.activityPerformed)
    useEffect(() => {
        if (numOfDistActPerformed === 1)
            setSheildImage(Partialstrength)
        else if (numOfDistActPerformed === 2)
            setSheildImage(Fullstrength)
        else if (numOfDistActPerformed === 3)
            setSheildImage(Diversitycheck)
        else if (numOfDistActPerformed === 4)
            setSheildImage(Superdiversity)
    }, [])

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

        audio1.play()
        if(numOfDistActPerformed >= 3 && gameStats.friendlyBiomePoints != 85)
            setIsActivityModal9Open(true)
        else
            navigate("/map")
    }

    return (
        <div className="activity-progress-container">
            <div className="activity-progress-heading">
                <b>Biome Energy Status</b>
            </div>
            <div>
                {`Congratulations! You have helped ${pref.friendlyBiome} achieve `} <b>{biomeStatusNames[numOfDistActPerformed - 1]}.</b>
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

export default ActivityModal6