import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

import ActivityModal7 from "../activities/modals/activityModal7"

import { Box, Modal } from "@mui/material"
import { IoIosArrowBack } from "react-icons/io"

import select from "../../assets/sounds/UI/Sprite_Movement.mp3"
import select1 from "../../assets/sounds/UI/Proceed.mp3"

import dashed from "../../assets/images/gamemap/dashed/dashed.png"
import dashedLeftDown from "../../assets/images/gamemap/dashed/dashedLeftDown.png"
import dashedLeftUp from "../../assets/images/gamemap/dashed/dashedLeftUp.png"
import dashedRightDown from "../../assets/images/gamemap/dashed/dashedRightDown.png"
import dashedRightUp from "../../assets/images/gamemap/dashed/dashedRightUp.png"
import minion from "../../assets/images/minion/UFB1.1.png"
import minionRoad1 from "../../assets/images/minion/minion1.png"
import minionRoad2 from "../../assets/images/minion/minion2.png"
import minionRoad3 from "../../assets/images/minion/minion3.png"

const audio = new Audio(select)
const audio1 = new Audio(select1)
import "./gamemap.css"

const Gamemap = () => {
    const [board, setBoard] = useState([
        [8, 8, 8, 8, 8, 6],
        [1, 0, 0, 10, 0, 2],
        [4, 11, 0, 12, 0, 3],
        [1, 0, 10, 0, 10, 2],
        [4, 12, 0, 11, 0, 3],
        [1, 0, 0, 0, 12, 2],
        [4, 0, 11, 0, 0, 3],
        [1, 0, 0, 10, 0, 2],
        [8, 8, 8, 8, 8, 8]
    ])
    const gameStats = JSON.parse(localStorage.getItem("gamestats"))
    const pref = JSON.parse(localStorage.getItem("preferences"))
    const biomeGarden = JSON.parse(localStorage.getItem("biome-garden"))
    const [isActivityModal7Open, setIsActivityModal7Open] = useState(gameStats.activityBiomeMovementModal)
    const [biomePosition, setBiomePosition] = useState(localStorage.getItem("solo-map-position") ? JSON.parse(localStorage.getItem("solo-map-position")) : [8, 0])
    const [biomeSteps, setBiomeSteps] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        if (biomeSteps > 0) {
            setTimeout(() => {
                incrementBiomePosition()
                setBiomeSteps(biomeSteps - 1)

                //TODO - reset currentActivity points here
                localStorage.setItem("gameStats", JSON.stringify({
                    ...gameStats, 
                    currentActivity: null
                }))
            }, 100)
        } else {
            localStorage.setItem("solo-map-position", JSON.stringify(biomePosition))
        }

    }, [biomeSteps])

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

    const getTile = (val, row, col) => {
        if (row === biomePosition[0] && col === biomePosition[1]) {
            return <button onClick={() =>{audio.play() ,setBiomeSteps(gameStats.currentActivity.points / 5)}}><img key={row*8 + col} src={require(`../../assets/images/biome/${biomeGarden.active}.png`)} width="64px" height="64px" /></button>
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
            return <img key={row*8 + col} src={minion} width="64px" height="64px" className="right_aligned" />
        }
        if (val === 10) {
            if (!isMinionCrossed([row, col])) {
                return <img key={row*8 + col} src={minionRoad1} width="64px" height="64px" />
            }
            else {
                return <img src={dashed} width="64px" height="64px" />
            }
        }
        if (val === 11) {
            if (!isMinionCrossed([row, col])) {
                return <img src={minionRoad2} width="64px" height="64px" />
            }
            else {
                return <img src={dashed} width="64px" height="64px" />
            }
        }
        if (val === 12) {
            if (!isMinionCrossed([row, col])) {
                return <img src={minionRoad3} width="64px" height="64px" />
            }
            else {
                return <img src={dashed} width="64px" height="64px" />
            }
        }

        return null
    }

    let k = 1

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
            className="gamemap-container"
        >
            <div className="top-view" style={{ margin: 0 }}>
                <div className="icon-container">
                    <IoIosArrowBack
                        onClick={() =>{audio1.play(),navigate("/")}}
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
        </motion.div>
    )
}

export default Gamemap
