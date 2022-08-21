import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

import BluePrint from "./blueprint"
import { IoIosArrowBack } from "react-icons/io"

import "./gamemap.css"

const Gamemap = () => {
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

            canvas.onclick = function (e) {
                var x = e.offsetX
                var y = e.offsetY

                bluePrint.updatePlus(ctx, x, y)
            }
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
