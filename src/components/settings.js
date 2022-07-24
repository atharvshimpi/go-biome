import React from "react"
import { useNavigate } from "react-router-dom"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import { BsFillVolumeUpFill, BsPhoneVibrateFill, BsFillMoonFill, BsListCheck, BsFillShareFill } from "react-icons/bs"
import { FaBookOpen, FaInfo, FaUserAlt, FaSun, FaBacterium, FaVirus } from "react-icons/fa"
import { GiForkKnifeSpoon, GiSunPriest } from "react-icons/gi"
import { MdBackup } from "react-icons/md"

import "./settings.css"

const Settings = () => {
    const navigate = useNavigate()
    
    return (
        <div className="settings-container">
            <div className="top-view">
                <div className="icon-container">
                    <IoIosArrowBack onClick={() => navigate("/")} className="icon" />
                </div>
                <h2>Settings</h2>
                <div style={{ opacity: 0 }} className="icon-container">
                    <IoIosArrowForward className="icon" />
                </div>
            </div>

            {/* General Settings */}
            <div className="general-settings">
                <div className="general-settings-container">
                    <h2>General Settings</h2>
                    <div className="general-settings-content">
                        <div className="options">
                            <div className="title-icon">
                                <BsFillVolumeUpFill />
                                <p>Sound</p>
                            </div>
                            <IoIosArrowForward className="icon" />
                        </div>
                        <div className="options">
                            <div className="title-icon">
                                <BsPhoneVibrateFill />
                                <p>Haptic Vibration</p>
                            </div>
                            <IoIosArrowForward className="icon" />
                        </div>
                        <div className="options">
                            <div className="title-icon">
                                <FaBookOpen />
                                <p>Tutorial</p>
                            </div>
                            <IoIosArrowForward className="icon" />
                        </div>
                        <div className="options">
                            <div className="title-icon">
                                <FaInfo />
                                <p>Information</p>
                            </div>
                            <IoIosArrowForward className="icon" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Customization */}
            <div className="general-settings">
                <div className="general-settings-container">
                    <h2>Customization</h2>
                    <div className="general-settings-content">
                        <div className="options">
                            <div className="title-icon">
                                <FaUserAlt />
                                <p>Change Username</p>
                            </div>
                            <IoIosArrowForward className="icon" />
                        </div>
                        <div className="options">
                            <div className="title-icon">
                                <FaSun />
                                <p>Waking Hours</p>
                            </div>
                            <IoIosArrowForward className="icon" />
                        </div>
                        <div className="options">
                            <div className="title-icon">
                                <BsFillMoonFill />
                                <p>Sleeping Hours</p>
                            </div>
                            <IoIosArrowForward className="icon" />
                        </div>
                        <div className="options">
                            <div className="title-icon">
                                <GiSunPriest />
                                <p>Morning Check-in Hours</p>
                            </div>
                            <IoIosArrowForward className="icon" />
                        </div>
                        <div className="options">
                            <div className="title-icon">
                                <GiForkKnifeSpoon />
                                <p>Meal Time</p>
                            </div>
                            <IoIosArrowForward className="icon" />
                        </div>
                        <div className="options">
                            <div className="title-icon">
                                <FaBacterium />
                                <p>Set friendly Biome Name</p>
                            </div>
                            <IoIosArrowForward className="icon" />
                        </div>
                        <div className="options">
                            <div className="title-icon">
                                <FaVirus />
                                <p>Set unfriendly Biome Name</p>
                            </div>
                            <IoIosArrowForward className="icon" />
                        </div>
                        <div className="options">
                            <div className="title-icon">
                                <BsListCheck />
                                <p>Set Activity Count</p>
                            </div>
                            <IoIosArrowForward className="icon" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Data Backup */}
            <div className="general-settings">
                <div className="general-settings-container">
                    <h2>Data Backup</h2>
                    <div className="general-settings-content">
                        <div className="options">
                            <div className="title-icon">
                                <MdBackup />
                                <p>Save Logged Activity &amp; feedback</p>
                            </div>
                            <IoIosArrowForward className="icon" />
                        </div>
                        <div className="options">
                            <div className="title-icon">
                                <BsFillShareFill />
                                <p>Share with friends</p>
                            </div>
                            <IoIosArrowForward className="icon" />
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Settings