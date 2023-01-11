import React from "react"

import { settingDetails } from "./settingsData"

import select1 from "../../assets/sounds/UI/Proceed.mp3"

import { IoIosArrowForward } from "react-icons/io"
// eslint-disable-next-line
const AboutSettings = ({ setOpen, setSettingId, handleSignOut, navigate }) => {
    const audio = new Audio(select1)

    const handleClick = (id) => {
        // setSettingId(id)
        // setOpen(true)
        audio.play()
        if(id==16){
            navigate("/terms")
        }

        else if(id==17){navigate("/about-research")}
        else if(id==18){navigate("/questionnaire")}
        else if(id==19){navigate("/participation")}
        else if (id==20){navigate("/creative")}
        else if (id==21){navigate("/gameInformation")}
    }

    return (
        <div className="general-settings">
            <div className="general-settings-container">
                <h2>About</h2>
                <div className="general-settings-content">
                    {settingDetails.filter(obj => obj.id > 15 && obj.id < 22).map((obj) => {
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