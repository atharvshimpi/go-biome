import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

import Gameboard from "../gameboard/gameboard"
import ActivityCarousal from "../activities/activityCarousal"

// game card details
import { environmentGameCardDetails } from "../../data/environment"
import { socialGameCardDetails } from "../../data/social"
import { zenGameCardDetails } from "../../data/zen"
import { physicalActivityGameCardDetails } from "../../data/physicalActivity"

// liked cards
import Likedcards from "../../assets/images/likedCards.svg"

// categories
import Environment from "../../assets/images/category/environment.svg"
import Social from "../../assets/images/category/social.svg"
import Physicalactivity from "../../assets/images/category/physicalactivity.svg"
import Zen from "../../assets/images/category/zen.svg"
import friendlyBiome from "../../assets/images/friendly.png"
import unFriendlyBiome1 from "../../assets/images/minion/minion1.png"
import unFriendlyBiome2 from "../../assets/images/minion/minion2.png"
import unFriendlyBiome3 from "../../assets/images/minion/minion3.png"

// biome shield strength
import Nostrength from "../../assets/images/shield/nostrength.svg"
import { BsShieldExclamation } from "react-icons/bs"
import Charging from "../../assets/images/shield/charging.svg"
import Partialstrength from "../../assets/images/shield/partialstrength.svg"
import Fullstrength from "../../assets/images/shield/fullstrength.svg"
import Diversitycheck from "../../assets/images/shield/diversitycheck.svg"
import Superdiversity from "../../assets/images/shield/superdiversity.svg"

import { AiFillSetting } from "react-icons/ai"
import { MdLocationPin } from "react-icons/md"
import { BiShuffle } from "react-icons/bi"

import "./dashboard.css"
import { Box, Modal } from "@mui/material"
import ActivityProgress from "../activities/activityProgress"

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const pref = JSON.parse(localStorage.getItem("preferences"))
    const [gameStats, setGameStats] = useState(JSON.parse(localStorage.getItem("gamestats")))
    const [shieldImage, setSheildImage] = useState(Nostrength)
    const [isCardModalOpen, setIsCardModalOpen] = useState(false)
    const [isActivityProgressModalOpen, setIsActivityProgressModalOpen] = useState(gameStats.activityOngoing)
    const [cardCategory, setCardCategory] = useState(null)
    const [cardDetailsData, setCardDetailsData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (isActivityProgressModalOpen) {
            setSheildImage(Charging)
        } else {
            if (gameStats.activityPerformed === 0) setSheildImage(Nostrength)
            else if (gameStats.activityPerformed === 1)
                setSheildImage(Partialstrength)
            else if (gameStats.activityPerformed === 2)
                setSheildImage(Fullstrength)
            else if (gameStats.activityPerformed === 3)
                setSheildImage(Diversitycheck)
            else if (gameStats.activityPerformed === 4)
                setSheildImage(Superdiversity)
        }
    }, [gameStats, isActivityProgressModalOpen])

    const handleVibrate = () => {
        pref?.vibrate ? window.navigator.vibrate(250) : null
    }

    const handleCardModalOpen = (categoryId) => {
        setCardCategory(categoryId)

        if(categoryId === 0)
            setCardDetailsData(environmentGameCardDetails)
        else if(categoryId === 1)
            setCardDetailsData(physicalActivityGameCardDetails)
        else if(categoryId === 2)
            setCardDetailsData(socialGameCardDetails)
        else
            setCardDetailsData(zenGameCardDetails)

        setIsCardModalOpen(true)
    }

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
            </div>
            <div className="points-view">
                <div className="biomechar-container">
                    <img
                        onClick={handleVibrate}
                        src={friendlyBiome}
                        className="biomechar"
                    />
                    <div className="minion-group">
                        <img
                            onClick={handleVibrate}
                            src={unFriendlyBiome2}
                            className="minionchar"
                        />
                        <img
                            onClick={handleVibrate}
                            src={unFriendlyBiome1}
                            className="minionchar shift-right"
                        />
                        <img
                            onClick={handleVibrate}
                            src={unFriendlyBiome3}
                            className="minionchar"
                        />
                    </div>
                </div>

                <div className="biomechar-container">
                    <div className="biome-stats">
                        <div className="shield-icon-container">
                            <img
                                src={shieldImage}
                                alt="shield"
                                className="shield-icon"
                            />
                        </div>
                        <div className="biome-points">15</div>
                    </div>
                    <div className="biome-points">85</div>
                </div>
            </div>
            <div className="game-board-container">
                <Gameboard></Gameboard>
                {/* carousal */}
                <Modal
                    open={isCardModalOpen}
                    onClose={() => setIsCardModalOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="modal-container"
                >
                    <Box className="modal-content">
                        <ActivityCarousal gameStats={gameStats} setGameStats={setGameStats} cardDetailsData={cardDetailsData} cardCategory={cardCategory} setIsCardModalOpen={setIsCardModalOpen} setIsActivityProgressModalOpen={setIsActivityProgressModalOpen}/>
                    </Box>
                </Modal>
                {/* activity progress */}
                <Modal
                    open={isActivityProgressModalOpen}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="modal-container"
                >
                    <Box className="modal-content">
                        <ActivityProgress gameStats={gameStats} setIsActivityProgressModalOpen={setIsActivityProgressModalOpen} />
                    </Box>
                </Modal>
            </div>
            <div className="card-view">
                <div className="activity-cards">
                    <div
                        onClick={() => handleCardModalOpen(0)}
                        style={{ backgroundColor: "#94B394" }}
                        className="cards"
                    >
                        <img src={Environment} alt="environment" />
                    </div>
                    <div
                        onClick={() => handleCardModalOpen(1)}
                        style={{ backgroundColor: "#FED966" }}
                        className="cards"
                    >
                        <img src={Physicalactivity} alt="physicalActivity" />
                    </div>
                    <div
                        onClick={() => handleCardModalOpen(2)}
                        style={{ backgroundColor: "#B886C1" }}
                        className="cards"
                    >
                        <img src={Social} alt="social" />
                    </div>
                    <div
                        onClick={() => handleCardModalOpen(3)}
                        style={{ backgroundColor: "#F2A1A0" }}
                        className="cards"
                    >
                        <img src={Zen} alt="zen" />
                    </div>
                </div>
            </div>
            <div className="bottom-view">
                <div className="icon-container">
                    <img
                        src={Likedcards}
                        style={{ color: "black" }}
                        className="icon"
                    />
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
