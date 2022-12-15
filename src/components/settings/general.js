import React, { useState } from "react"
import { Switch } from "@headlessui/react"

import { settingDetails } from "./settingsData"

import { IoIosArrowForward } from "react-icons/io"

const GeneralSettings = ({ setOpen, setSettingId }) => {
    const pref = JSON.parse(localStorage.getItem("preferences"))
    const [soundEnabled, setSoundEnabled] = useState(pref.sound)
    const [vibrateEnabled, setVibrateEnabled] = useState(pref.vibrate)

    const handleClick = (id) => {
        setSettingId(id)
        setOpen(true)
    }

    const handleToggle = (objId) => {
        if(objId === 6) {
            setSoundEnabled(!soundEnabled)

            localStorage.setItem("preferences", JSON.stringify({ ...pref, vibrate: vibrateEnabled, sound: !soundEnabled }))
        } else {
            setVibrateEnabled(!vibrateEnabled)

            if(!vibrateEnabled) {
                window.navigator.vibrate(250)
            }

            localStorage.setItem("preferences", JSON.stringify({ ...pref, vibrate: !vibrateEnabled, sound: soundEnabled }))
        }
    }

    return (
        <div className="general-settings">
            <div className="general-settings-container">
                <h2>General Settings</h2>
                <div className="general-settings-content">
                    {settingDetails.filter(obj => obj.id >= 6 && obj.id < 10).map((obj) => {
                        return (
                            <div key={obj.id} className="options">
                                <div className="title-icon">
                                    {obj.icon}
                                    <p>{obj.title}</p>
                                </div>
                                {(obj.id === 6 || obj.id === 7) ? 
                                    <Switch
                                        name="s1"
                                        checked={obj.id === 6 ? soundEnabled : vibrateEnabled}
                                        onChange={() => handleToggle(obj.id)}
                                        className={`${(obj.id === 6 ? soundEnabled : vibrateEnabled) ? "bg-yellow-600" : "bg-[#ffbc58]"} relative inline-flex h-6 w-11 items-center rounded-full`}
                                    >
                                        <span className="sr-only">{obj.id === 6 ? "Sound" : "Vibrate"}</span>
                                        <span
                                            className={`${(obj.id === 6 ? soundEnabled : vibrateEnabled) ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform transition ease-in-out duration-200 rounded-full bg-white`}
                                        />
                                    </Switch>
                                    :
                                    <IoIosArrowForward className="icon" onClick={() => handleClick(obj.id)}/>
                                }
                            </div>  
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default GeneralSettings