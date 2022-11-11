import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

import ActivityModal7 from "../activities/modals/activityModal7"

import BluePrint from "./blueprint"
import { Box, Modal } from "@mui/material"
import { IoIosArrowBack } from "react-icons/io"
import select from "../../assets/sounds/Selecting.mp3"
import "./gamemap.css"

const Gamemap = () => {
    const gameStats = JSON.parse(localStorage.getItem("gamestats"))
    const pref = JSON.parse(localStorage.getItem("preferences"))
    const [isActivityModal7Open, setIsActivityModal7Open] = useState(gameStats.activityBiomeMovementModal)
    const navigate = useNavigate()
    
    useEffect(() => {
        const canvas = document.getElementById("gamemap")
        const ctx = canvas.getContext("2d")
        
        // calculating bounds
        const tileSize = 128
        const bluePrint = new BluePrint(tileSize)
        const biome = bluePrint.getBiome()
        // console.log(canvas.getBoundingClientRect())

        function gameLoop() {
            bluePrint.draw(ctx)
            biome.draw(ctx)
            // biome.update()
        }
        
        bluePrint.setCanvasSize(canvas)
        setInterval(gameLoop, 1000 / 75)
    }, [])

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
            className="gamemap-container"
        >   
            <div className="top-view">
                <div className="icon-container">
                    <IoIosArrowBack
    
                        onClick={() => navigate("/")}
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
                    <ActivityModal7 gameStats={gameStats} pref={pref} setIsActivityModal7Open={setIsActivityModal7Open} />
                </Box>
            </Modal>
            <canvas id="gamemap"></canvas>
            <div className="top-view" style={{ opacity: 0 }}>
                <div className="icon-container">
                    <IoIosArrowBack
                        onClick={() => navigate("/")}
                        className="icon"
                    />
                </div>
                <h3>Game Map</h3>
                <div style={{ opacity: 0 }} className="icon-container">
                    <IoIosArrowBack className="icon" />
                </div>
            </div>
        </motion.div>
    )
}

export default Gamemap
