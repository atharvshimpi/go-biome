import React from "react"
import { useNavigate } from "react-router-dom"

import select from "../../../assets/sounds/UI/Proceed.mp3"
import gut10 from "../../../assets/images/gut10.png"

const ActivityModal9 = ({ pref, setIsActivityModal9Open }) => {
    const navigate = useNavigate() 
    const handleClick = () => {
        const audio = new Audio(select)
        audio.play()
        setIsActivityModal9Open(false)
        navigate("/map")
    }

    return (
        <div className="activity-progress-container">
            <div>
                {`Your biome ${pref.friendlyBiome} is making new friends and growing into a diverse ecosystem.`}
            </div>
            <div className="activity-img-container">
                <img className="activity-img" src={gut10} alt="friendly" style={{ width: "5rem" }} />
            </div>
            <button onClick={handleClick} className="activity-progress-btn">
                CONTINUE
            </button>
        </div>
    )
}

export default ActivityModal9