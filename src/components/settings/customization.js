import React from "react"

import { IoIosArrowForward } from "react-icons/io"
import { BsFillMoonFill, BsListCheck } from "react-icons/bs"
import { FaSun, FaBacterium, FaVirus } from "react-icons/fa"
import { GiForkKnifeSpoon, GiSunPriest } from "react-icons/gi"

const CustomizationSettings = () => {
    return (
        <div className="general-settings">
            <div className="general-settings-container">
                <h2>Customization</h2>
                <div className="general-settings-content">
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
    )
}

export default CustomizationSettings