import React from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

import Gameboard from "../gameboard/gameboard"

import Environment from "../../assets/images/category/environment.svg" 

// categories
import Social from "../../assets/images/category/social.svg" 
import Physicalactivity from "../../assets/images/category/physicalactivity.svg" 
import Zen from "../../assets/images/category/zen.svg"
import friendlyBiome from "../../assets/images/friendly.png"
import unFriendlyBiome from "../../assets/images/unfriendly.png"

// biome shield strength
import Nostrength from "../../assets/images/shield/nostrength.svg"
import { BsShieldExclamation } from "react-icons/bs"
import Charging from "../../assets/images/shield/charging.svg"
import Partialstrength from "../../assets/images/shield/partialstrength.svg"
import Fullstrength from "../../assets/images/shield/fullstrength.svg"
import Diversitycheck from "../../assets/images/shield/diversitycheck.svg"
import Superdiversity from "../../assets/images/shield/superdiversity.svg"


import { AiFillSetting } from "react-icons/ai"
import { MdOutlineReplay, MdLocationPin } from "react-icons/md"
import { BiShuffle } from "react-icons/bi"

import "./dashboard.css"

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem("user"))
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
                    <img src={Nostrength} alt="shield" className="icon" />
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
            <div className="card-view">
                <div className="activity-cards">
                    <div
                        onClick={() => navigate("/card")}
                        style={{ backgroundColor: "#94B394" }}
                        className="cards"
                    >
                        <img src={Environment} alt="environment" />
                    </div>
                    <div
                        onClick={() => navigate("/card")}
                        style={{ backgroundColor: "#FED966" }}
                        className="cards"
                    >
                        <img src={Physicalactivity} alt="physicalActivity" />
                    </div>
                    <div
                        onClick={() => navigate("/card")}
                        style={{ backgroundColor: "#B886C1" }}
                        className="cards"
                    >
                        <img src={Social} alt="social" />
                    </div>
                    <div
                        onClick={() => navigate("/card")}
                        style={{ backgroundColor: "#F2A1A0" }}
                        className="cards"
                    >
                        <img src={Zen} alt="zen" />
                    </div>
                </div>
            </div>
            <div className="bottom-view">
                <div className="icon-container">
                    <MdOutlineReplay className="icon" />
                </div>
                <div className="icon-container">
                    <BiShuffle className="icon" />
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
