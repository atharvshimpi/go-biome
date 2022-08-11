import React from "react"

import { settingDetails } from "./settingsData"

import { IoIosArrowForward } from "react-icons/io"
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
                    {settingDetails.filter(obj => obj.id >= 9 && obj.id < 15).map((obj) => {
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

export default CustomizationSettings