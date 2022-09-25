import React, { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

import Gameboard from "../gameboard/gameboard"
import ActivityCarousal from "../activities/activityCarousal"
import { UserAuth } from "../../context/authContext"

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

// friendly biomes
import friendlyBiome1 from "../../assets/images/biome/shield.png"
import friendlyBiome2 from "../../assets/images/biome/ant.png"
import friendlyBiome3 from "../../assets/images/biome/bugsy.png"

// unfriendly biomes
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
    const userDetails = JSON.parse(localStorage.getItem("user"))
    const pref = JSON.parse(localStorage.getItem("preferences"))
    const [gameStats, setGameStats] = useState(JSON.parse(localStorage.getItem("gamestats")))
    const [shieldImage, setSheildImage] = useState(Nostrength)
    const [friendlyBiomeArray, setFriendlyBiomeArray] = useState([friendlyBiome1, friendlyBiome2, friendlyBiome3])
    const [unFriendlyBiomeArray, setUnFriendlyBiomeArray] = useState([unFriendlyBiome2, unFriendlyBiome1, unFriendlyBiome3])
    const [isCardModalOpen, setIsCardModalOpen] = useState(false)
    const [isActivityProgressModalOpen, setIsActivityProgressModalOpen] = useState(gameStats.activityOngoing)
    const [cardCategory, setCardCategory] = useState(null)
    const [cardDetailsData, setCardDetailsData] = useState([])
    const { user } = UserAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if(!userDetails)
            return <Navigate to="/userDetails" />
        
        if(!pref)
            return <Navigate to="/questions-main" />
    }, [userDetails, pref])

    useEffect(() => {
        if (isActivityProgressModalOpen) {
            setSheildImage(Charging)
        } else {
            if (gameStats.activityPerformed === 0) 
                setSheildImage(Nostrength)
            else if (gameStats.activityPerformed === 1)
                setSheildImage(Partialstrength)
            else if (gameStats.activityPerformed === 2)
                setSheildImage(Fullstrength)
            else if (gameStats.activityPerformed === 3)
                setSheildImage(Diversitycheck)
            else if (gameStats.activityPerformed >= 4)
                setSheildImage(Superdiversity)
        }
    }, [gameStats, isActivityProgressModalOpen])

    // research about this part
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

    const handlePointReplay = () => {
        setGameStats({...gameStats, activityPointReplayed: false})
        localStorage.setItem("gamestats", JSON.stringify({...gameStats, activityPointReplayed: false }))
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
                <h3>{userDetails.username}&apos;s Biome Land</h3>
            </div>
            <div className="points-view">
                <div className="biomechar-container">
                    <div className="minion-group">
                        <img
                            style={{ width: gameStats.friendlyBiomePoints >= 50 ? "3rem" : "5rem" }}
                            onClick={handleVibrate}
                            src={friendlyBiomeArray[0]}
                            className="biomechar"
                        />
                        {gameStats.friendlyBiomePoints >= 50 ? 
                            <img
                                style={{ width: gameStats.friendlyBiomePoints >= 50 ? "3rem" : "5rem" }}
                                onClick={handleVibrate}
                                src={friendlyBiomeArray[1]}
                                className="biomechar"
                            />
                            :
                            null
                        }
                        {gameStats.friendlyBiomePoints >= 85 ? 
                            <img
                                style={{ width: gameStats.friendlyBiomePoints >= 50 ? "3rem" : "5rem" }}
                                onClick={handleVibrate}
                                src={friendlyBiomeArray[2]}
                                className="biomechar"
                            />
                            :
                            null
                        }
                    </div>
                    <div className="minion-group">
                        <img
                            style={{ width: gameStats.unFriendlyBiomePoints <= 85 ? "3rem" : "5rem", marginRight: gameStats.unFriendlyBiomePoints <= 15 ? "0px" : "" }}
                            onClick={handleVibrate}
                            src={unFriendlyBiomeArray[0]}
                            className="minionchar"
                        />
                        {gameStats.friendlyBiomePoints >= 50 ? 
                            null
                            :
                            <img
                                style={{ width: gameStats.unFriendlyBiomePoints < 85 ? "3rem" : "5rem" }}
                                onClick={handleVibrate}
                                src={unFriendlyBiomeArray[1]}
                                className="minionchar shift-right"
                            />
                        }
                        {gameStats.friendlyBiomePoints >= 85 ? 
                            null
                            :
                            <img
                                style={{ width: gameStats.unFriendlyBiomePoints <= 85 ? "3rem" : "5rem" }}
                                onClick={handleVibrate}
                                src={unFriendlyBiomeArray[2]}
                                className="minionchar"
                            />
                        }
                    </div>
                </div>
                <div className="biomepoints-container">
                    <div className="biome-stats">
                        <div className="shield-icon-container">
                            <img
                                src={shieldImage}
                                alt="shield"
                                className="shield-icon"
                            />
                        </div>
                        <div className="biome-points">{gameStats.friendlyBiomePoints}</div>
                        {gameStats.activityPointReplayed && gameStats.friendlyBiomePoints + gameStats.currentActivity.points <= 85 ? 
                            <div onClick={handlePointReplay} style={{ color: "green" }} className="biome-updated-points">{`+${gameStats.currentActivity.points}`}</div>
                            :
                            null
                        }
                    </div>
                    <div className="minion-stats">
                        {gameStats.activityPointReplayed && gameStats.friendlyBiomePoints + gameStats.currentActivity.points <= 85 ? 
                            <div onClick={handlePointReplay} style={{ color: "red", marginRight: "10px" }} className="biome-updated-points">{`-${gameStats.currentActivity.points}`}</div>
                            :
                            null
                        }
                        <div className="biome-points">{gameStats.unFriendlyBiomePoints}</div>
                    </div>
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
