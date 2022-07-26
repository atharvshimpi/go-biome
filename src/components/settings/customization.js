import React from "react"

import { IoIosArrowForward } from "react-icons/io"
import { BsFillMoonFill, BsListCheck } from "react-icons/bs"
import { FaSun, FaBacterium, FaVirus } from "react-icons/fa"
import { GiForkKnifeSpoon, GiSunPriest } from "react-icons/gi"
// eslint-disable-next-line
const CustomizationSettings = ({ setOpen, setSettingId }) => {
    const handleClick = (id) => {
        setSettingId(id)
        setOpen(true)
    }

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
                        <IoIosArrowForward className="icon" onClick={() => handleClick(9)} />
                    </div>
                    <div className="options">
                        <div className="title-icon">
                            <BsFillMoonFill />
                            <p>Sleeping Hours</p>
                        </div>
                        <IoIosArrowForward className="icon" onClick={() => handleClick(10)} />
                    </div>
                    <div className="options">
                        <div className="title-icon">
                            <GiSunPriest />
                            <p>Morning Check-in Hours</p>
                        </div>
                        <IoIosArrowForward className="icon" onClick={() => handleClick(11)} />
                    </div>
                    <div className="options">
                        <div className="title-icon">
                            <GiForkKnifeSpoon />
                            <p>Meal Time</p>
                        </div>
                        <IoIosArrowForward className="icon" onClick={() => handleClick(12)} />
                    </div>
                    <div className="options">
                        <div className="title-icon">
                            <FaBacterium />
                            <p>Set friendly Biome Name</p>
                        </div>
                        <IoIosArrowForward className="icon" onClick={() => handleClick(13)} />
                    </div>
                    <div className="options">
                        <div className="title-icon">
                            <FaVirus />
                            <p>Set unfriendly Biome Name</p>
                        </div>
                        <IoIosArrowForward className="icon" onClick={() => handleClick(14)} />
                    </div>
                    <div className="options">
                        <div className="title-icon">
                            <BsListCheck />
                            <p>Set Activity Count</p>
                        </div>
                        <IoIosArrowForward className="icon" onClick={() => handleClick(15)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomizationSettings