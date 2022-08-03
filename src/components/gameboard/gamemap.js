import React from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

import { IoIosArrowBack } from "react-icons/io"

import "./gamemap.css"

const Gamemap = () => {
    const navigate = useNavigate()

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
        </motion.div>
    )
}

export default Gamemap