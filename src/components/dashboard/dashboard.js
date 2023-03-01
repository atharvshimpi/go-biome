import React, { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

import Gameboard from "../gameboard/gameboard"
import ActivityCarousal from "../activities/carousal/activityCarousal"
import ActivityProgress from "../activities/modals/activityProgress"
import LikedCards from "../activities/likedCards"

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
import unFriendlyBiome1 from "../../assets/images/minion/UFB1.4.png"
import unFriendlyBiome2 from "../../assets/images/minion/UFB3.5.png"
import unFriendlyBiome3 from "../../assets/images/minion/UFB4.2.png"

// biome shield strength
import Nostrength from "../../assets/images/shield/nostrength.svg"
import { BsShieldExclamation } from "react-icons/bs"
import Charging from "../../assets/images/shield/charging.svg"
import Partialstrength from "../../assets/images/shield/partialstrength.svg"
import Fullstrength from "../../assets/images/shield/fullstrength.svg"
import Diversitycheck from "../../assets/images/shield/diversitycheck.svg"
import Superdiversity from "../../assets/images/shield/superdiversity.svg"

import { AiFillSetting } from "react-icons/ai"
import { GiEncirclement } from "react-icons/gi"
import { MdLocationPin } from "react-icons/md"
import { BiShuffle } from "react-icons/bi"

import "./dashboard.css"
import { Box, Modal } from "@mui/material"

import ActivityModal1 from "../activities/modals/activityModal1"
import ActivityModal2_1 from "../activities/modals/activityModal2.1"
import ActivityModal3 from "../activities/modals/activityModal3"
import ActivityModal5 from "../activities/modals/activityModal5"
import ActivityModal6 from "../activities/modals/activityModal6"
import ActivityModal8 from "../activities/modals/activityModal8"
import ActivityModal9 from "../activities/modals/activityModal9"
import StatusModal from "../activities/modals/statusModal"
import FlashModal from "../activities/modals/flash"
import FlashEmojiModal from "../activities/modals/flash-emoji"
import FlashEmojiNoModal from "../activities/modals/flash-emoji-no"
import FlashGoodEmojiModal from "../activities/modals/flash-good-emoji"
import FlashGoodEmojiNoModal from "../activities/modals/flash-good-emoji-no"

import select from "../../assets/sounds/UI/Shuffle_button.mp3"
import select1 from "../../assets/sounds/UI/Proceed.mp3"
import select2 from "../../assets/sounds/UI/CardTap.mp3"
import { demoNotification } from "../notifications/demo"

const Dashboard = () => {
    const userDetails = JSON.parse(localStorage.getItem("user"))
    const pref = JSON.parse(localStorage.getItem("preferences"))
    const biomeGarden = JSON.parse(localStorage.getItem("biome-garden"))
    const [likedCardsDetails, setLikedCardsDetails] = useState(
        JSON.parse(localStorage.getItem("liked-cards"))
    )
    const [gameStats, setGameStats] = useState(
        JSON.parse(localStorage.getItem("gamestats"))
    )
    const [shieldImage, setSheildImage] = useState(Nostrength)
    const [friendlyBiomeArray, setFriendlyBiomeArray] = useState([
        friendlyBiome1,
        friendlyBiome2,
        friendlyBiome3,
    ])
    const [unFriendlyBiomeArray, setUnFriendlyBiomeArray] = useState([
        unFriendlyBiome2,
        unFriendlyBiome1,
        unFriendlyBiome3,
    ])
    const [activeCardIdx, setActiveCardIdx] = useState(0)
    const [isCardModalOpen, setIsCardModalOpen] = useState(false)
    const [isLikedCardsModalOpen, setIsLikedCardsModalOpen] = useState(false)
    const [isActivityProgressModalOpen, setIsActivityProgressModalOpen] =
        useState(gameStats.activityOngoing)
    const [isActivityModal1Open, setIsActivityModal1Open] = useState(false)
    const [isActivityModal2_1Open, setIsActivityModal2_1Open] = useState(false)
    const [isActivityModal3Open, setIsActivityModal3Open] = useState(false)
    const [isActivityModal5Open, setIsActivityModal5Open] = useState(
        gameStats.activityBiomePointsModal
    )
    const [isActivityModal6Open, setIsActivityModal6Open] = useState(false)
    const [isActivityModal8Open, setIsActivityModal8Open] = useState(false)
    const [isActivityModal9Open, setIsActivityModal9Open] = useState(false)
    const [isStatusModalOpen, setIsStatusModalOpen] = useState(false)
    const [isFlashModalOpen, setIsFlashModalOpen] = useState(false)
    const [isFlashEmojiModalOpen, setIsFlashEmojiModalOpen] = useState(false)
    const [isFlashEmojiNoModalOpen, setIsFlashEmojiNoModalOpen] = useState(false)
    const [isFlashGoodEmojiModalOpen, setIsFlashGoodEmojiModalOpen] = useState(false)
    const [isFlashGoodEmojiNoModalOpen, setIsFlashGoodEmojiNoModalOpen] = useState(false)
    const [cardCategory, setCardCategory] = useState(null)
    const [cardDetailsData, setCardDetailsData] = useState([])
    const [soundEnabled, setSoundEnabled] = useState(pref.sound)
    const [prevGame, setPrevGame] = useState(gameStats.prevDate)	
    const [morningGameNotif, setMorningNotif] = useState(pref.wakeupTime)
    const notifMsgs = [
        `${pref.friendlyBiome} misses you. Engage in an activity to let it know you care`,
        `${pref.friendlyBiome} needs help finding new friends. Engage in an activity to help it`,
        `Your friendly biome energy is low on energy. Engage in an activity to help it.`
    ]
    const [lastPlayed, setLastPlayed] = useState(gameStats.prevDate)
    const [wakeupTime, setwakeupTime] = useState(pref.wakeupTime)
    const card = new Audio(select2)
    const navigate = useNavigate()

    useEffect(() => {	
        if (prevGame) {	
            const prevDate = new Date(prevGame)	
            const currDate = new Date()	
            if (prevDate.getDate() + 1 <= currDate.getDate()) {	
                console.log("New Day!")	
                prevDate.setDate(prevDate.getDate() + 1)	
                setPrevGame(prevDate)	
                const actPerfSum = gameStats.activityPerformed.reduce(	
                    (x, y) => {	
                        return x + y	
                    },	
                    0	
                )	
                // et	
                // if inactive, then gameState - 1	
                if (!actPerfSum) {	
                    if (gameStats.gameState > 0)	
                        localStorage.setItem(	
                            "gamestats",	
                            JSON.stringify({	
                                ...gameStats,	
                                gameState: gameStats.gameState - 1,	
                                activityPerformed: [0, 0, 0, 0],	
                                currentActivity: null,	
                                friendlyBiomePoints: 15,	
                                unFriendlyBiomePoints: 85,	
                                activityBiomeCongMsg: false,	
                                prevDate: prevDate,	
                            })	
                        )	
                    // else gameState + 1	
                } else {	
                    if (gameStats.gameState < 3)	
                        localStorage.setItem(	
                            "gamestats",	
                            JSON.stringify({	
                                ...gameStats,	
                                gameState: gameStats.gameState + 1,	
                                activityPerformed: [0, 0, 0, 0],	
                                currentActivity: null,	
                                friendlyBiomePoints: 15,	
                                unFriendlyBiomePoints: 85,	
                                activityBiomeCongMsg: false,	
                                prevDate: prevDate,	
                            })	
                        )	
                }	
            }	
        }	
    }, [prevGame])	

    // Biome Flash Cards	
    useEffect(() => {	
        const morningGameNotifTime = new Date(morningGameNotif)	
        const currDate = new Date()	
        var hours = morningGameNotifTime.getHours()	
        if (	
            (currDate.getHours() >= morningGameNotifTime.getHours() + 2 &&	
            morningGameNotifTime.getDate() + 1 <= currDate.getDate())	
        ) {	
            hours = currDate.getHours()	
            handleCardModalOpen(6)	
        }	
    }, [morningGameNotif])	

    // Notifications	
    // 1. Morning	
    const morningMsg = `Your Biome Digest is waiting for you!`
    useEffect(() => {
        const morningGameNotifTime = new Date(morningGameNotif)	
        const currDate = new Date()	
        if (	
            currDate.getHours() >= morningGameNotifTime.getHours() &&	
            morningGameNotifTime.getDate() + 1 <= currDate.getDate()	
        ) {	
            demoNotification(morningMsg)	
            morningGameNotifTime.setDate(morningGameNotifTime.getDate() + 1)	
            setMorningNotif(morningGameNotifTime)	
            localStorage.setItem(	
                "preferences",	
                JSON.stringify({	
                    ...pref,	
                    wakeupTime: morningGameNotifTime,
                })
            )	
        }	
    }, [morningGameNotif])

    // // Biome Flash Cards
    // useEffect(() => {
    //     const morningGameNotifTime = new Date(morningGameNotif)
    //     const currDate = new Date()
    //     var hours = morningGameNotifTime.getHours()

    //     if (
    //         (currDate.getHours() >= morningGameNotifTime.getHours() + 2 &&
    //         morningGameNotifTime.getDate() + 1 <= currDate.getDate())
    //     ) {
    //         hours = currDate.getHours()
    //         handleCardModalOpen(6)
    //     }
    // }, [morningGameNotif])

    useEffect(() => {
        if (!userDetails) return <Navigate to="/userDetails" />
        if (!pref) return <Navigate to="/questions-main" />
    }, [userDetails, pref])

    const distAct = (arr) => {
        let count = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]) count++
        }
        return count
    }

    useEffect(() => {
        let numDistActPerf = distAct(gameStats.activityPerformed)
        setGameStats({
            ...gameStats,
            gameState: numDistActPerf
        })
        localStorage.setItem("gamestats", JSON.stringify({
            ...gameStats,
            gameState: numDistActPerf
        }))

        if (gameStats.activityOngoing) {
            setSheildImage(Charging)
        } else {
            if (numDistActPerf === 0) setSheildImage(Nostrength)
            else if (numDistActPerf === 1) setSheildImage(Partialstrength)
            else if (numDistActPerf === 2) setSheildImage(Fullstrength)
            else if (numDistActPerf === 3) setSheildImage(Diversitycheck)
            else if (numDistActPerf === 4) setSheildImage(Superdiversity)
        }
    }, [gameStats.activityPerformed, isActivityProgressModalOpen])

    // research about this part
    const handleVibrate = () => {
        pref?.vibrate ? window.navigator.vibrate(250) : null
    }

    const handleCardModalOpen = (categoryId, activeCardId) => {
        setActiveCardIdx(activeCardId)
        setCardCategory(categoryId)

        const audio = new Audio(select1)
        // audio.play()

        if (categoryId === 0) {
            setCardDetailsData(environmentGameCardDetails)
            setIsCardModalOpen(true)
        } else if (categoryId === 1) {
            setCardDetailsData(physicalActivityGameCardDetails)
            setIsCardModalOpen(true)
        } else if (categoryId === 2) {
            setCardDetailsData(socialGameCardDetails)
            setIsCardModalOpen(true)
        } else if (categoryId === 3) {
            setCardDetailsData(zenGameCardDetails)
            setIsCardModalOpen(true)
        } else if (categoryId === 4) {
            setCardDetailsData(likedCardsDetails)
            setIsLikedCardsModalOpen(true)
        } else if (categoryId === 5) {
            setIsStatusModalOpen(true)
        } else if(categoryId === 6){
            setIsFlashModalOpen(true)
        }
    }

    const handlePointReplay = () => {
        setGameStats({ ...gameStats, activityPointReplayed: false })
        localStorage.setItem(
            "gamestats",
            JSON.stringify({ ...gameStats, activityPointReplayed: false })
        )
    }

    const handleShuffle = () => {
        const activityHistory = JSON.parse(localStorage.getItem("activity-history"))
        const activityCategories = ["environment", "physicalactivity", "social", "zen"]

        if (activityHistory.some(activity => activity.category === "environment")
            && activityHistory.some(activity => activity.category === "physicalactivity")
            && activityHistory.some(activity => activity.category === "social")
            && activityHistory.some(activity => activity.category === "zen")) {
            // at least one activity from each category is done.
            
            let activeCardId = 0
            let activityCategoryId = 0
            
            do {
                activityCategoryId = Math.floor(Math.random() * 4)
            } while (activityHistory[activityHistory.length - 1].category === activityCategories[activityCategoryId])

            do {
                activeCardId = Math.floor(Math.random() * 10)
            } while (activityHistory.some(activity => activity.icon.startsWith(activityCategories[activityCategoryId].charAt(0).toUpperCase() + (activeCardId + 1))))

            handleCardModalOpen(activityCategoryId, activeCardId)
        }
        else {
            // there is some category from which no activity has been done. Generate a random card from that category
            for (let activityCategoryId = 0; activityCategoryId < activityCategories.length; activityCategoryId++) {
                if (activityHistory.every(activity => activity.category !== activityCategories[activityCategoryId])) {
                    handleCardModalOpen(activityCategoryId, Math.floor(Math.random() * 10))
                    break
                }
            }

            // let activityCategoryId = 0
            // do {
            //     activityCategoryId = Math.floor(Math.random() * 4)
            // } while (activityHistory.some(activity => activity.category === activityCategories[activityCategoryId]))

            // handleCardModalOpen(activityCategoryId, Math.floor(Math.random() * 10))
        }
    }

    // Day Reset
    useEffect(() => {
        const prevDate = new Date(lastPlayed)
        const wakeupDate = new Date(wakeupTime)
        const currDate = new Date()

        if (prevDate.getDate() + 1 <= currDate.getDate()) {
            console.log("New Day!")
            prevDate.setDate(prevDate.getDate() + 1)
            setLastPlayed(prevDate)

            setGameStats({
                ...gameStats,
                activityPerformed: [0, 0, 0, 0],
                gameState: 0,
                currentActivity: null,
                friendlyBiomePoints: 15,
                unFriendlyBiomePoints: 85,
                activityBiomeCongMsg: false,
                prevDate: prevDate.toISOString(),
            })

            localStorage.setItem(
                "gamestats",
                JSON.stringify({
                    ...gameStats,
                    activityPerformed: [0, 0, 0, 0],
                    currentActivity: null,
                    friendlyBiomePoints: 15,
                    unFriendlyBiomePoints: 85,
                    activityBiomeCongMsg: false,
                    prevDate: prevDate.toISOString(),
                })
            )

            // Set a Timeout function for 3 hours after wakeup
            const timer = ((wakeupDate.getHours() + 3)*3600 + wakeupDate.getMinutes()*60)*1000
            setTimeout(() => {
                demoNotification(notifMsgs[Math.random() % 3])
            }, timer)
        }
    })

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}   
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
            className="dashboard-container"
            style={ gameStats.gameState <= 2 ? {
                background: "#B99691"
            } : {
                background: "#EC8C7A"
            }}
        >
            <div className="top-view" style={{ margin: "0rem" }}>
                <div className="icon-group">
                    <div
                        className="icon-container"
                    >
                        <AiFillSetting
                            onClick={() => {
                                const audio = new Audio(select2)	
                                if(soundEnabled){audio.play()}
                                navigate("/settings")
                            }}
                            className="icon"
                        />
                    </div>
                </div>
                <h3 className="top-view-name">
                    {userDetails.username}&apos;s Biome Land
                </h3>
            </div>
            <div className="points-view">
                <div 
                    className="biomechar-container" 
                    style={ gameStats.friendlyBiomePoints >= 85 ? {
                        padding: "0rem 1rem 0rem 0rem"
                    } : null}
                >
                    {/* Biomes */}
                    <div 
                        className="minion-group"
                        style={{ 
                            // width: "50%"
                        }}
                    >
                        <img
                            style={{
                                width: gameStats.gameState === 0 ? "5rem" : "3.5rem",
                                marginLeft: "0.3rem"
                            }}
                            onClick={(handleVibrate => {
                                handleVibrate
                                //handleCardModalOpen(5)
                            })}
                            src={require(`../../assets/images/biome/DB1.1.png`)}
                            className="biomechar"
                        />
                        {gameStats.gameState >= 1 ? (
                            <img
                                style={{
                                    width: "3.5rem",
                                    marginLeft: "0.3rem"
                                }}
                                onClick={() => {
                                    handleVibrate
                                    //handleCardModalOpen(5)
                                }}
                                src={require(`../../assets/images/biome/FB2.5.png`)}
                                className="biomechar"
                            />
                        ) : null}
                        {gameStats.gameState >= 2 ? (
                            <img
                                style={{
                                    width: "3.5rem",
                                    marginLeft: "0.3rem"
                                }}
                                onClick={() => {
                                    handleVibrate
                                    //handleCardModalOpen(5)
                                }}
                                src={require(`../../assets/images/biome/FB7.7.png`)}
                                className="biomechar"
                            />
                        ) : null}
                        {gameStats.gameState >= 3 ? (
                            <>
                                <img
                                    style={{
                                        width: "3.5rem",
                                        marginLeft: "0.3rem"
                                    }}
                                    onClick={() => {
                                        handleVibrate
                                        //handleCardModalOpen(5)
                                    }}
                                    src={require(`../../assets/images/biome/FB1.5.png`)}
                                    className="biomechar"
                                />
                                <img
                                    style={{
                                        width: "3.5rem",
                                        marginLeft: "0.3rem"
                                    }}
                                    onClick={() => {
                                        handleVibrate
                                        //handleCardModalOpen(5)
                                    }}
                                    src={require(`../../assets/images/biome/FB13.7.png`)}
                                    className="biomechar"
                                />
                            </>
                        ) : null}
                    </div>

                    {/* Minions */}
                    <div 
                        className="minion-group"
                        style={{
                            width: "50%"
                        }}
                    >
                        <img
                            style={{
                                width: "3.5rem",
                                marginLeft: "0.3rem",
                                marginRight: gameStats.gameState >= 3 ? "0rem" : "-1.2rem"
                            }}
                            onClick={() => {
                                handleVibrate
                                //handleCardModalOpen(5)
                            }}
                            src={require(`../../assets/images/minion/UFB1.1.png`)}
                            className="minionchar"
                        />
                        {gameStats.gameState <= 1 ? (
                            <>
                                <img
                                    style={{
                                        width: "3.5rem",
                                        marginLeft: "0.3rem"
                                    }}
                                    onClick={() => {
                                        handleVibrate
                                        //handleCardModalOpen(5)
                                    }}
                                    src={require(`../../assets/images/minion/UFB3.3.png`)}
                                    className="minionchar shift-right"
                                />
                                <img
                                    style={{
                                        width: "3.5rem",
                                        marginLeft: "0.3rem"
                                    }}
                                    onClick={() => {
                                        handleVibrate
                                        //handleCardModalOpen(5)
                                    }}
                                    src={require(`../../assets/images/minion/UFB1.4.png`)}
                                    className="minionchar shift-right"
                                />
                            </>
                        ) : null}
                        {gameStats.gameState === 0 ? (
                            <>
                                <img
                                    style={{
                                        width: "3.5rem",
                                        marginLeft: "0.3rem"
                                    }}
                                    onClick={() => {
                                        handleVibrate
                                        //handleCardModalOpen(5)
                                    }}
                                    src={require(`../../assets/images/minion/UFB4.2.png`)}
                                    className="minionchar"
                                />
                                <img
                                    style={{
                                        width: "3.5rem",
                                        marginLeft: "0.3rem",
                                        transform: "scaleX(-1)"
                                    }}
                                    onClick={() => {
                                        handleVibrate
                                        //handleCardModalOpen(5)
                                    }}
                                    src={require(`../../assets/images/minion/UFB3.5.png`)}
                                    className="minionchar"
                                />
                            </>
                        ) : null}
                    </div>
                </div>
                <div className="biomepoints-container">
                    <div className="biome-stats">
                        <div className="shield-icon-container">
                            <img
                                src={shieldImage}
                                alt="shield"
                                className="shield-icon"
                                onClick={() => {	
                                    handleCardModalOpen(5)	
                                }}
                            />
                        </div>
                        <div className="biome-points">
                            {gameStats.friendlyBiomePoints}
                        </div>
                        {/* {gameStats.activityPointReplayed && gameStats.friendlyBiomePoints + gameStats?.currentActivity.points <= 85 ? 
                            <div onClick={handlePointReplay} style={{ color: "green" }} className="biome-updated-points">{`+${gameStats?.currentActivity.points}`}</div>
                            :
                            null
                        } */}
                    </div>
                    <div className="minion-stats">
                        {/* {gameStats.activityPointReplayed && gameStats.friendlyBiomePoints + gameStats?.currentActivity.points <= 85 ? 
                            <div onClick={handlePointReplay} style={{ color: "red", marginRight: "10px" }} className="biome-updated-points">{`-${gameStats?.currentActivity.points}`}</div>
                            :
                            null
                        } */}
                        <div className="biome-points">
                            <button>
                                {gameStats.unFriendlyBiomePoints}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="game-board-container">
                <Gameboard gameStats={gameStats}></Gameboard>
                {/* carousal */}
                <Modal
                    open={isCardModalOpen}
                    onClose={() => setIsCardModalOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="modal-container"
                >
                    <Box className="modal-content">
                        <ActivityCarousal 
                            userDetails={userDetails}
                            gender={userDetails.gender} 
                            gameStats={gameStats} 
                            setGameStats={setGameStats} 
                            likedCardsDetails={likedCardsDetails} 
                            setLikedCardsDetails={setLikedCardsDetails} 
                            cardDetailsData={cardDetailsData} 
                            cardCategory={cardCategory} 
                            setIsCardModalOpen={setIsCardModalOpen}
                            setIsStatusModalOpen={setIsStatusModalOpen}
                            setIsActivityModal1Open={setIsActivityModal1Open} 
                            initialActiveCardId={activeCardIdx}
                        />
                    </Box>
                </Modal>
                {/* liked-cards */}
                <Modal
                    open={isLikedCardsModalOpen}
                    onClose={() => setIsLikedCardsModalOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="modal-container"
                >
                    <Box className="modal-content">
                        <LikedCards
                            gender={userDetails.gender}
                            gameStats={gameStats}
                            setGameStats={setGameStats}
                            likedCardsDetails={likedCardsDetails}
                            setLikedCardsDetails={setLikedCardsDetails}
                            cardCategory={cardCategory}
                            setIsLikedCardsModalOpen={setIsLikedCardsModalOpen}
                            setIsActivityModal1Open={setIsActivityModal1Open}
                        />
                    </Box>
                </Modal>
                {/*Biome Status Modal*/}
                <Modal
                    open={isStatusModalOpen}
                    onClose={() => setIsStatusModalOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="modal-container"
                >
                    <Box className="modal-content">
                        <StatusModal
                            gender={userDetails.gender} 
                            gameStats={gameStats} 
                            setGameStats={setGameStats}
                            setIsActivityProgressModalOpen={
                                setIsActivityProgressModalOpen
                            } 
                            setIsStatusModalOpen={setIsStatusModalOpen}  
                        />
                    </Box>
                </Modal>
                {/* Flash Cards*/}
                <Modal
                    open={isFlashModalOpen}
                    onClose={() => setIsFlashModalOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="modal-container"
                >
                    <Box className="modal-content">
                        <FlashModal
                            gender={userDetails.gender} 
                            gameStats={gameStats} 
                            setGameStats={setGameStats}
                            setIsActivityProgressModalOpen={
                                setIsActivityProgressModalOpen
                            } 
                            setIsFlashModalOpen={setIsFlashModalOpen}
                            setIsFlashEmojiModalOpen={setIsFlashEmojiModalOpen}
                            setIsFlashGoodEmojiModalOpen={setIsFlashGoodEmojiModalOpen}  
                            setIsFlashEmojiNoModalOpen={setIsFlashEmojiNoModalOpen}
                            setIsFlashGoodEmojiNoModalOpen={setIsFlashGoodEmojiNoModalOpen}
                        />
                    </Box>
                </Modal>

                <Modal
                    open={isFlashEmojiModalOpen}
                    onClose={() => setIsFlashEmojiModalOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="modal-container"
                >
                    <Box className="modal-content">
                        <FlashEmojiModal
                            gender={userDetails.gender} 
                            gameStats={gameStats} 
                            setGameStats={setGameStats}
                            setIsActivityProgressModalOpen={
                                setIsActivityProgressModalOpen
                            } 
                            setIsFlashEmojiModalOpen={setIsFlashEmojiModalOpen}  
                        />
                    </Box>
                </Modal>

                <Modal
                    open={isFlashEmojiNoModalOpen}
                    onClose={() => setIsFlashEmojiNoModalOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="modal-container"
                >
                    <Box className="modal-content">
                        <FlashEmojiNoModal
                            userDetails={userDetails}
                            gameStats={gameStats} 
                            setGameStats={setGameStats}
                            setIsActivityProgressModalOpen={
                                setIsActivityProgressModalOpen
                            } 
                            setIsFlashEmojiModalOpen={setIsFlashEmojiModalOpen}  
                        />
                    </Box>
                </Modal>

                <Modal
                    open={isFlashGoodEmojiModalOpen}
                    onClose={() => setIsFlashGoodEmojiModalOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="modal-container"
                >
                    <Box className="modal-content">
                        <FlashGoodEmojiModal
                            userDetails={userDetails}
                            gender={userDetails.gender} 
                            gameStats={gameStats} 
                            setGameStats={setGameStats}
                            setIsActivityProgressModalOpen={
                                setIsActivityProgressModalOpen
                            } 
                            setIsFlashGoodEmojiModalOpen={setIsFlashGoodEmojiModalOpen}  
                        />
                    </Box>
                </Modal>

                <Modal
                    open={isFlashGoodEmojiNoModalOpen}
                    onClose={() => setIsFlashGoodEmojiNoModalOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="modal-container"
                >
                    <Box className="modal-content">
                        <FlashGoodEmojiNoModal
                            gender={userDetails.gender} 
                            gameStats={gameStats} 
                            setGameStats={setGameStats}
                            setIsActivityProgressModalOpen={
                                setIsActivityProgressModalOpen
                            } 
                            setIsFlashGoodEmojiModalOpen={setIsFlashGoodEmojiModalOpen}  
                        />
                    </Box>
                </Modal> 
                {/* activity modal 1 */}
                <Modal
                    open={isActivityModal1Open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="modal-container"
                >
                    <Box className="modal-content">
                        <ActivityModal1
                            gameStats={gameStats}
                            setGameStats={setGameStats}
                            pref={pref}
                            setIsActivityProgressModalOpen={
                                setIsActivityProgressModalOpen
                            }
                            setIsActivityModal1Open={setIsActivityModal1Open}
                        />
                    </Box>
                </Modal>
                {/* activity progress (or activity modal 2) */}
                <Modal
                    open={isActivityProgressModalOpen}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="modal-container"
                >
                    <Box className="modal-content">
                        <ActivityProgress
                            gameStats={gameStats}
                            setIsActivityProgressModalOpen={
                                setIsActivityProgressModalOpen
                            }
                            setIsActivityModal2_1Open={
                                setIsActivityModal2_1Open
                            }
                        />
                    </Box>
                </Modal>
                {/* activity modal 2.1 */}
                <Modal
                    open={isActivityModal2_1Open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="modal-container"
                >
                    <Box className="modal-content">
                        <ActivityModal2_1
                            pref={pref}
                            gameStats={gameStats}
                            setGameStats={setGameStats}
                            setIsActivityProgressModalOpen={
                                setIsActivityProgressModalOpen
                            }
                            setIsActivityModal2_1Open={
                                setIsActivityModal2_1Open
                            }
                            setIsActivityModal3Open={setIsActivityModal3Open}
                        />
                    </Box>
                </Modal>
                {/* activity modal 3 */}
                <Modal
                    open={isActivityModal3Open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="modal-container"
                >
                    <Box className="modal-content">
                        <ActivityModal3
                            gameStats={gameStats}
                            pref={pref}
                            setIsActivityModal3Open={setIsActivityModal3Open}
                            setIsActivityModal5Open={setIsActivityModal5Open}
                        />
                    </Box>
                </Modal>
                {/* activity modal 5 */}
                <Modal
                    open={isActivityModal5Open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="modal-container"
                >
                    <Box className="modal-content">
                        <ActivityModal5
                            biomeGarden={biomeGarden}
                            gameStats={gameStats}
                            setIsActivityModal5Open={setIsActivityModal5Open}
                            setIsActivityModal6Open={setIsActivityModal6Open}
                            setIsActivityModal8Open={setIsActivityModal8Open}
                        />
                    </Box>
                </Modal>
                {/* activity modal 8 */}
                <Modal
                    open={isActivityModal8Open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="modal-container"
                >
                    <Box className="modal-content">
                        <ActivityModal8
                            gameStats={gameStats}
                            setGameStats={setGameStats}
                            pref={pref}
                            setIsActivityModal8Open={setIsActivityModal8Open}
                            setIsActivityModal6Open={setIsActivityModal6Open}
                        />
                    </Box>
                </Modal>
                {/* activity modal 6 */}
                <Modal
                    open={isActivityModal6Open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="modal-container"
                >
                    <Box className="modal-content">
                        <ActivityModal6
                            gameStats={gameStats}
                            pref={pref}
                            setIsActivityModal6Open={setIsActivityModal6Open}
                            setIsActivityModal9Open={setIsActivityModal9Open}
                        />
                    </Box>
                </Modal>
                {/* activity modal 9 */}
                <Modal
                    open={isActivityModal9Open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="modal-container"
                >
                    <Box className="modal-content">
                        <ActivityModal9
                            pref={pref}
                            setIsActivityModal9Open={setIsActivityModal9Open}
                        />
                    </Box>
                </Modal>
            </div>
            <div className="card-view">
                <div className="activity-cards">
                    <div
                        onClick={() => {
                            if(soundEnabled){card.play()}
                            handleCardModalOpen(0)
                        }}
                        style={{ backgroundColor: "#94B394" }}
                        className="cards"
                    >
                        <img src={Environment} alt="environment" />
                    </div>
                    <div
                        onClick={() => {
                            if(soundEnabled){card.play()}
                            handleCardModalOpen(1)
                        }}
                        style={{ backgroundColor: "#FED966" }}
                        className="cards"
                    >
                        <img src={Physicalactivity} alt="physicalActivity" />
                    </div>
                    <div
                        onClick={() => {
                            if(soundEnabled){card.play()}
                            handleCardModalOpen(2)
                        }}
                        style={{ backgroundColor: "#B886C1" }}
                        className="cards"
                    >
                        <img src={Social} alt="social" />
                    </div>
                    <div
                        onClick={() => {
                            if(soundEnabled){card.play()}
                            handleCardModalOpen(3)
                        }}
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
                        onClick={() => {
                            if(soundEnabled){card.play()}
                            handleCardModalOpen(4)
                        }}
                    />
                </div>
                <div className="icon-container">
                    <BiShuffle
                        className="icon"
                        onClick={() => {
                            handleShuffle()
                            // handleCardModalOpen(Math.floor(Math.random() * (3 - 0 + 1)))
                            const audio = new Audio(select)
                            if(soundEnabled){audio.play()}
                        }}
                    />
                </div>
                <div className="icon-container">
                    <MdLocationPin
                        className="icon"
                        onClick={() => {
                            const audio = new Audio(select1)
                            if(soundEnabled){audio.play()}
                            navigate("/map")
                        }}
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default Dashboard
