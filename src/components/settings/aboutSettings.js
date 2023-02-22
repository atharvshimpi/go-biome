import React, { useState, useEffect } from "react"

import { settingDetails } from "./settingsData"

import select1 from "../../assets/sounds/UI/Proceed.mp3"

import { IoIosArrowForward } from "react-icons/io"
// eslint-disable-next-line
const AboutSettings = ({ setOpen, setSettingId, handleSignOut, navigate }) => {
    const audio = new Audio(select1)
    const pref = JSON.parse(localStorage.getItem("preferences"))
    const [soundEnabled, setSoundEnabled] = useState(pref.sound)
    const handleClick = (id) => {
        // setSettingId(id)
        // setOpen(true)
        if(soundEnabled){audio.play()}
        if(id == 10) navigate("/terms")
        else if(id == 11) navigate("/about-research")
        else if(id == 12) navigate("/questionnaire")
        // else if(id == 19) navigate("/participation")
        else if (id == 13) navigate("/creative")
        else if (id == 14) navigate("/gameInformation")
    }

    return (
        <div className="general-settings">
            <div className="general-settings-container">
                <h2>About</h2>
                <div className="general-settings-content">
                    {settingDetails.filter(obj => obj.id >= 10 && obj.id < 17).map((obj) => {
                        return (
                            <div key={obj.id} className="options">
                                <div className="title-icon">
                                    {obj.icon}
                                    <p>{obj.title}</p>
                                </div>
                                <IoIosArrowForward className="icon" onClick={() => handleClick(obj.id)}/>
                            </div>  
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AboutSettings