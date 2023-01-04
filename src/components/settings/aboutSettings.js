import React from "react"

import { settingDetails } from "./settingsData"

import { IoIosArrowForward } from "react-icons/io"
// eslint-disable-next-line
const AboutSettings = ({ setOpen, setSettingId, handleSignOut, navigate }) => {
    const handleClick = (id) => {
        // setSettingId(id)
        // setOpen(true)
        navigate("/terms")
    }

    return (
        <div className="general-settings">
            <div className="general-settings-container">
                <h2>About</h2>
                <div className="general-settings-content">
                    {settingDetails.filter(obj => obj.id > 15 && obj.id < 17).map((obj) => {
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