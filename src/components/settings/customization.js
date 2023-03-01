import React, { useState, useEffect } from "react"

import { settingDetails } from "./settingsData"

import select from "../../assets/sounds/UI/Proceed.mp3"
import { IoIosArrowForward } from "react-icons/io"
// eslint-disable-next-line
const CustomizationSettings = ({ setOpen, setSettingId }) => {
    const audio = new Audio(select)
    const pref = JSON.parse(localStorage.getItem("preferences"))
    const [soundEnabled, setSoundEnabled] = useState(pref.sound)
    const handleClick = (id) => {
        setSettingId(id)
        setOpen(true)
    }

    return (
        <div className="general-settings">
            <div className="general-settings-container">
                <h2>Customization</h2>
                <div className="general-settings-content">
                    {settingDetails.filter(obj => obj.id >= 8 && obj.id < 11).map((obj) => {
                        return (
                            <div key={obj.id} className="options">
                                <div className="title-icon">
                                    {obj.icon}
                                    <p>{obj.title}</p>
                                </div>
                                <IoIosArrowForward className="icon" onClick={() => { 
                                    if(soundEnabled){audio.play()} 
                                    handleClick(obj.id)
                                }}/>
                            </div>  
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CustomizationSettings