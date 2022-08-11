import React from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

import Gameboard from "../gameboard/gameboard"
import friendlyBiome from "../../assets/images/friendly.png"
import unFriendlyBiome from "../../assets/images/unfriendly.png"

import { AiFillSetting } from "react-icons/ai"
import { MdOutlineReplay, MdLocationPin } from "react-icons/md"
// eslint-disable-next-line
import { BsShieldFillCheck } from "react-icons/bs" // all activities completed
// eslint-disable-next-line
import { BsShieldShaded } from "react-icons/bs" // partial activities completed
import { BsShieldFillExclamation } from "react-icons/bs" // no activity completed
// eslint-disable-next-line
import { RiShieldFlashFill } from "react-icons/ri" // activity ongoing

import "./dashboard.css"

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    // eslint-disable-next-line
    const pref = JSON.parse(localStorage.getItem("preferences"))
    const navigate = useNavigate()

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
            className="dashboard-container"
        >
            <div className="top-view">
                <div className="icon-container">
                    <AiFillSetting
                        onClick={() => navigate("/settings")}
                        className="icon"
                    />
                </div>
                <h3>{user.username}&apos;s Biome Land</h3>
                <div className="icon-container">
                    <BsShieldFillExclamation className="icon" />
                </div>
            </div>
            <div className="points-view">
                <div className="biomechar-container">
                    <img src={unFriendlyBiome} className="biomechar" />
                    <div className="biome-points">85</div>
                </div>

                <div className="biomechar-container">
                    <img src={friendlyBiome} className="biomechar" />
                    <div className="biome-points">15</div>
                </div>
            </div>
            <div className="game-board-container">
                <Gameboard></Gameboard>
            </div>
            <div className="bottom-view">
                <div className="icon-container">
                    <MdOutlineReplay className="icon" />
                </div>
                <div className="activity-cards">
                    <div
                        onClick={() => navigate("/card")}
                        style={{ backgroundColor: "#94B394" }}
                        className="cards"
                    >
                        E
                    </div>
                    <div
                        onClick={() => navigate("/card")}
                        style={{ backgroundColor: "#FED966" }}
                        className="cards"
                    >
                        PA
                    </div>
                    <div
                        onClick={() => navigate("/card")}
                        style={{ backgroundColor: "#B886C1" }}
                        className="cards"
                    >
                        S
                    </div>
                    <div
                        onClick={() => navigate("/card")}
                        style={{ backgroundColor: "#F2A1A0" }}
                        className="cards"
                    >
                        Z
                    </div>
                </div>
                <div className="icon-container">
                    <MdLocationPin
                        className="icon"
                        onClick={() => navigate("/map")}
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default Dashboard
