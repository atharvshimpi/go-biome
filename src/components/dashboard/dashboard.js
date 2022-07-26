import React from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

import Gameboard from "../gameboard/gameboard"

import { AiFillSetting } from "react-icons/ai"
import { MdOutlineReplay } from "react-icons/md"
import { BiShuffle } from "react-icons/bi"
import { HiPlus } from "react-icons/hi"
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
            <div className="game-board">
                <Gameboard />
            </div>
            <div className="bottom-view">
                <div className="icon-container">
                    <MdOutlineReplay className="icon" />
                </div>
                <div className="activity-cards">
                    <div
                        style={{ backgroundColor: "green" }}
                        className="cards"
                    ></div>
                    <div
                        style={{ backgroundColor: "yellow" }}
                        className="cards"
                    ></div>
                    <div
                        style={{ backgroundColor: "violet" }}
                        className="cards"
                    ></div>
                    <div
                        style={{ backgroundColor: "pink" }}
                        className="cards"
                    ></div>
                    <div
                        style={{ backgroundColor: "#e5e5e5" }}
                        className="cards custom-card"
                    >
                        <HiPlus />
                    </div>
                </div>
                <div className="icon-container">
                    <BiShuffle className="icon" />
                </div>
            </div>
        </motion.div>
    )
}

export default Dashboard
