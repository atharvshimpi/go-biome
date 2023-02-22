import React, { useEffect, useState } from "react"

import select from "../../../assets/sounds/UI/Proceed.mp3"
import biome from "../../../assets/images/shield/biome.png"
import low from "../../../assets/images/shield/low.jpg"
import low1 from "../../../assets/images/shield/low1.jpg"
import low2 from "../../../assets/images/shield/low2.jpg"
import low3 from "../../../assets/images/shield/low3.jpg"
import low4 from "../../../assets/images/shield/low4.jpg"
import "./preStartInfo.css"
import { useNavigate } from "react-router-dom"
import friendlyBiome1 from "../../../assets/images/biome/DB1.1.png"
import friendlyBiome2 from "../../../assets/images/biome/ant.png"
import friendlyBiome3 from "../../../assets/images/biome/bugsy.png"
import l0 from "../../../assets/images/level/zero.jpg"
import l25 from "../../../assets/images/level/twen.jpg"
import l50 from "../../../assets/images/level/fifty.jpg"
import l75 from "../../../assets/images/level/sev.jpg"
import l100 from "../../../assets/images/level/hun.jpg"
// const pref = JSON.parse(localStorage.getItem("preferences"))
// const [soundEnabled, setSoundEnabled] = useState(pref.sound)
var image
var percent_complete

const StatusModal = ({ pref, setIsStatusModalOpen }) => {
    
    const distAct = (arr) => {
        let count = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]) count++
        }
        return count
    }

    const handleClick = () => {
        setIsStatusModalOpen(false)
    }
    const navigate = useNavigate()

    const [gameStats, setGameStats] = useState(
        JSON.parse(localStorage.getItem("gamestats"))
    )
    const [levelImage, setLevelImage] = useState(l0)
    const [statusImage, setStatusImage] = useState(low)
    let numOfDistActPerformed = distAct(gameStats.activityPerformed)

    useEffect(() => {
        

        if (numOfDistActPerformed == 0) {
            setStatusImage(low)
            setLevelImage(l0)
        } else if (numOfDistActPerformed == 1) {
            setStatusImage(low1)
            setLevelImage(l25)
        } else if (numOfDistActPerformed == 2) {
            setStatusImage(low2)
            setLevelImage(l50)
        } else if (numOfDistActPerformed == 3) {
            setStatusImage(low3)
            setLevelImage(l75)
        } else if (numOfDistActPerformed == 4) {
            setStatusImage(low4)
            setLevelImage(l100)
        } else {
            setStatusImage(low4)
            setLevelImage(l100)
        }
    }, [gameStats])

    return (
        
        <div className="activity-progress-container-status">
            <div className="header-status">
                <b>BIOME ENERGY STATUS</b>
            </div>
            <div className="image-section">
                <img
                    src={statusImage}
                    style={{
                        width: "13rem",
                    }}
                />
            </div>
            <div>
                <div
                    className="activity-progress-heading-status-bar"
                    style={{ fontSize: "1.2rem" }}
                >
                    <img
                        src={friendlyBiome1}
                        style={{
                            marginLeft: "1.85rem",
                            width: "40%",
                            height: "40%",
                            float: "left",
                        }}
                    />

                    <img
                        src={levelImage}
                        style={{
                            marginBottom: "1rem",
                            marginRight: "5rem",
                            width: "18%",
                            height: "40%",
                            float: "right",
                        }}
                    />
                </div>
            </div>
            <button
                className="activity-progress-btn-status"
                onClick={handleClick}
            >
                <b> ENERGISE BIOME </b>
            </button>
        </div>
    )
}

export default StatusModal
