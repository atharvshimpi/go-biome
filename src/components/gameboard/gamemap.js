import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

import ActivityModal7 from "../activities/modals/activityModal7"

import { Box, Modal } from "@mui/material"
import { IoIosArrowBack } from "react-icons/io"
import { ToastContainer, toast } from "react-toastify"

import select from "../../assets/sounds/UI/Sprite_Movement.mp3"
import select1 from "../../assets/sounds/UI/Proceed.mp3"

import dashed from "../../assets/images/gamemap/dashed/dashed.png"
import dashedLeftDown from "../../assets/images/gamemap/dashed/dashedLeftDown.png"
import dashedLeftUp from "../../assets/images/gamemap/dashed/dashedLeftUp.png"
import dashedRightDown from "../../assets/images/gamemap/dashed/dashedRightDown.png"
import dashedRightUp from "../../assets/images/gamemap/dashed/dashedRightUp.png"
import unfriendlyBiome1 from '../../assets/images/gamemap/unfriendly/unfriendlyBiome1.png'
import unfriendlyBiome2 from '../../assets/images/gamemap/unfriendly/unfriendlyBiome2.png'
import unfriendlyBiome3 from '../../assets/images/gamemap/unfriendly/unfriendlyBiome3.png'
import unfriendlyBiome4 from '../../assets/images/gamemap/unfriendly/unfriendlyBiome4.png'
import Environment from "../../assets/images/category/environment.svg"
import Social from "../../assets/images/category/social.svg"
import Physicalactivity from "../../assets/images/category/physicalactivity.svg"
import Zen from "../../assets/images/category/zen.svg"


const audio = new Audio(select)
const audio1 = new Audio(select1)
import "./gamemap.css"

const Gamemap = () => {
    const [board, setBoard] = useState([
        [8, 8, 8, 8, 8, 10],
        [1, 0, 0, 13, 0, 2],
        [4, 13  , 0, 11, 0, 3],
        [1, 0, 10, 0, 10, 2],
        [4, 13, 0, 11, 0, 3],
        [1, 0, 0, 0, 12, 2],
        [4, 0, 11, 0, 0, 3],
        [1, 0, 0, 10, 0, 2],
        [8, 8, 8, 8, 8, 8]
    ])
    const gameStats = JSON.parse(localStorage.getItem("gamestats"))
    const pref = JSON.parse(localStorage.getItem("preferences"))
    const biomeGarden = JSON.parse(localStorage.getItem("biome-garden"))
    const [onBiomeClicked, setOnBiomeClicked] = useState(false)
    const [isActivityModal7Open, setIsActivityModal7Open] = useState(gameStats.activityBiomeMovementModal)
    const [biomePosition, setBiomePosition] = useState(localStorage.getItem("solo-map-position") ? JSON.parse(localStorage.getItem("solo-map-position")) : [8, 0])
    const [biomeSteps, setBiomeSteps] = useState(0)
    const navigate = useNavigate()
    const notify = () => toast("Click on your biome to move it")

    useEffect(() => {

        if (!(JSON.parse(localStorage.getItem("gamestats")).currentActivity)) {
            return
        }

        setBiomeSteps(JSON.parse(localStorage.getItem("gamestats")).currentActivity.points / 5)

        // return function cleanup() {
        //     for (let i = 0; i < biomeSteps; i++) {
        //         incrementBiomePosition()
        //     }
        // }
    }, [])

    useEffect(() => {
        if (biomeSteps === 0) {
            setOnBiomeClicked(false)
        }
        if (biomeSteps > 0 && onBiomeClicked) {
            setTimeout(() => {
                incrementBiomePosition()
                setBiomeSteps(biomeSteps - 1)
            }, 500)
        } else {
            localStorage.setItem("solo-map-position", JSON.stringify(biomePosition))
        }

    }, [biomeSteps, onBiomeClicked])

    useEffect(() => {
        if (biomePosition[0] === 0 && biomePosition[1] === 5) {
            setBiomePosition([8, 0])
        }
    }, [biomePosition])

    const navigateToSocialMap = () => {
        navigate("/socialmap")
    }

    const isMinionCrossed = (tileIndex) => {

        if (tileIndex[0] > biomePosition[0]) {
            return true
        }

        if (biomePosition[0] > tileIndex[0]) {
            return false
        }

        if (biomePosition[0] % 2 === 0) {
            return tileIndex[1] > biomePosition[1]
        }

        return tileIndex[1] < biomePosition[1]
    }

    const incrementBiomePosition = () => {
        if (biomePosition[0] === 0 && biomePosition[1] === 5) {
            return
        }
        if (biomePosition[0] % 2 === 0) {
            if (biomePosition[1] === 0) {
                //move up
                setBiomePosition([biomePosition[0] - 1, biomePosition[1]])
            }
            else {
                //move left
                setBiomePosition([biomePosition[0], biomePosition[1] - 1])
            }
        }
        else {
            if (biomePosition[1] === 5) {
                //move up
                setBiomePosition([biomePosition[0] - 1, biomePosition[1]])
            }
            else {
                //move right
                setBiomePosition([biomePosition[0], biomePosition[1] + 1])
            }
        }
    }

    const handleBackPress = () => {

        if (biomeSteps > 0) {
            console.log("Please click on biome to move")
            notify()
            return
        }

        audio1.play()
        navigate("/")
    }

    const getTile = (val, row, col) => {
        if (row === biomePosition[0] && col === biomePosition[1]) {
            return <button onClick={() => {
                                        audio.play()
                                        setOnBiomeClicked(true)
                                    }}
                            style={{height: '64px', width: '64px'}}
                    >
                        <div style={{position: "relative", top: '10px', right: "-35px"}}>
                            {getLastActivityIcon()}
                        </div>
                        <img key={row*8 + col} src={require(`../../assets/images/biome/${biomeGarden.active}.png`)} width="40px" height="40px" />
                </button>
        }
        if (val === 0) {
            return <img key={row*8 + col} src={dashed} width="64px" height="64px" />
        }
        if (val === 1) {
            return <img key={row*8 + col} src={dashedLeftDown} width="64px" height="64px" />
        }
        if (val === 2) {
            return <img key={row*8 + col} src={dashedRightUp} width="64px" height="64px" />
        }
        if (val === 3) {
            return <img key={row*8 + col} src={dashedRightDown} width="64px" height="64px" />
        }
        if (val === 4) {
            return <img key={row*8 + col} src={dashedLeftUp} width="64px" height="64px" />
        }
        if (val === 5) {
            return <img key={row*8 + col} src={require(`../../assets/images/biome/${biomeGarden.active}.png`)} width="64px" height="64px" />
        }
        if (val === 6) {
            return <img key={row*8 + col} src={unfriendlyBiome2} width="64px" height="64px" className="right_aligned" />
        }
        if (val === 10) {
            if (!isMinionCrossed([row, col])) {
                return <img key={row*8 + col} src={unfriendlyBiome2} width="64px" height="64px" />
            }
            else {
                return <img src={dashed} width="64px" height="64px" />
            }
        }
        if (val === 11) {
            if (!isMinionCrossed([row, col])) {
                return <img src={unfriendlyBiome1} width="64px" height="64px" />
            }
            else {
                return <img src={dashed} width="64px" height="64px" />
            }
        }
        if (val === 12) {
            if (!isMinionCrossed([row, col])) {
                return <img src={unfriendlyBiome4} width="64px" height="64px" />
            }
            else {
                return <img src={dashed} width="64px" height="64px" />
            }
        }if (val === 13) {
            if (!isMinionCrossed([row, col])) {
                return <img key={row*8 + col} src={unfriendlyBiome3} width="64px" height="64px" />
            }
            else {
                return <img src={dashed} width="64px" height="64px" />
            }
        }

        return null
    }

    const getBackground = () => {
        switch(JSON.parse(localStorage.getItem("gamestats")).gameState) {
            case 0:
            case 1:
            case 2:
                return `url(${require("../../assets/images/bg/biomeGarden012.png")})`
            case 3:
                return `url(${require("../../assets/images/bg/biomeGarden3.png")})`
            case 4:
                return `url(${require("../../assets/images/bg/biomeGarden4.png")})`
        }
    }

    const getLastActivityIcon = () => {
        const activityHistory = JSON.parse(localStorage.getItem("activity-history"))
        const lastActivityCategory = activityHistory[activityHistory.length - 1].category
        switch(lastActivityCategory) {
            case 'environment':
                return (
                    <div
                        style={{ backgroundColor: "#94B394", width:"20px", height:"20px", borderRadius: '50%', padding: '2px' }}
                    >
                        <img src={Environment} alt="environment" />
                    </div>
                )
            case 'physicalactivity':
                return (
                    <div
                        style={{ backgroundColor: "#FED966", width:"20px", height:"20px", borderRadius: '50%', padding: '2px' }}
                    >
                        <img src={Physicalactivity} alt="physical activity" />
                    </div>
                )
            case 'zen':
                return (
                    <div
                        style={{ backgroundColor: "#F2A1A0", width:"20px", height:"20px", borderRadius: '50%', padding: '2px' }}
                    >
                        <img src={Zen} alt="zen" />
                    </div>
                )
            case 'social':
                return (
                    <div
                        style={{ backgroundColor: "#B886C1", width:"20px", height:"20px", borderRadius: '50%', padding: '2px' }}
                    >
                        <img src={Social} alt="social" />
                    </div>
                )
        }
    }

    let k = 1

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
            className="gamemap-container"
            style={{
                backgroundImage: getBackground(),
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: '100vh',
            }}
        >
            <div className="top-view" style={{ margin: 0 }}>
                <div className="icon-container">
                    <IoIosArrowBack
                        onClick={handleBackPress}
                        className="icon"
                    />
                </div>
                <h3>Game Map</h3>
                <div style={{ opacity: 0 }} className="icon-container">
                    <IoIosArrowBack className="icon" />
                </div>
            </div>
            {/* activity modal 7 */}
            <Modal
                open={isActivityModal7Open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="modal-container"
            >
                <Box className="modal-content">
                    <ActivityModal7 
                        biomeGarden={biomeGarden}
                        gameStats={gameStats} 
                        pref={pref} 
                        setIsActivityModal7Open={setIsActivityModal7Open} 
                    />
                </Box>
            </Modal>
            {board.map((row, rowIdx) => {
                return <div key={k++} className={"row" + (rowIdx === 0 ? " right" : "")}>
                    {row.map((val, index) => {
                        return getTile(val, rowIdx, index)
                    })}
                </div>
            })}
            <ToastContainer 
                toastStyle={{ backgroundColor: "#ffdfb8" }}
                position="top-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </motion.div>
    )
}

export default Gamemap
