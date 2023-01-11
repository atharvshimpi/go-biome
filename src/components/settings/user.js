import React from "react"

import { settingDetails } from "./settingsData"

import select from "../../assets/sounds/UI/Proceed.mp3"
import { IoIosArrowForward } from "react-icons/io"
// eslint-disable-next-line
const UserSettings = ({ setOpen, setSettingId, handleSignOut }) => {
    const audio = new Audio(select)

    const handleClick = (id) => {
        setSettingId(id)
        setOpen(true)
    }

    return (
        <div className="general-settings">
            <div className="general-settings-container">
                <h2>User Settings</h2>
                <div className="general-settings-content">
                    {settingDetails.filter(obj => obj.id > 0 && obj.id < 6).map((obj) => {
                        return (
                            <div key={obj.id} className="options">
                                <div className="title-icon" onClick={obj.id === 5 ? handleSignOut : () => {audio.play()}}>
                                    {obj.icon}
                                    <p>{obj.title}</p>
                                </div>
                                {obj.id === 5 ? 
                                    null
                                    :
                                    <IoIosArrowForward className="icon" onClick={() => {
                                        audio.play(),
                                        handleClick(obj.id)
                                    }}/>
                                }
                            </div>  
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default UserSettings