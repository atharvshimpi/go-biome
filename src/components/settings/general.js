import React , { useState } from "react"
import { Switch } from "@headlessui/react"

import { settingDetails } from "./settingsData"

import { IoIosArrowForward } from "react-icons/io"
// eslint-disable-next-line
const GeneralSettings = ({ setOpen, setSettingId }) => {
    const [pref, setPref] = useState(JSON.parse(localStorage.getItem("preferences")))
    const [enabled, setEnabled] = useState(pref.vibrate)

    const handleClick = (id) => {
        setSettingId(id)
        setOpen(true)
    }

    // messed up code - do it properly
    const handleVibrate = () => {
        setEnabled(!enabled)
        setPref({ ...pref, vibrate: enabled })
        localStorage.setItem("preferences", JSON.stringify({ ...pref, vibrate: !enabled }))

        if(!enabled) {
            window.navigator.vibrate(250)
        }
    }

    return (
        <div className="general-settings">
            <div className="general-settings-container">
                <h2>General Settings</h2>
                <div className="general-settings-content">
                    {settingDetails.filter(obj => obj.id >= 5 && obj.id < 9).map((obj) => {
                        return (
                            <div key={obj.id} className="options">
                                <div className="title-icon">
                                    {obj.icon}
                                    <p>{obj.title}</p>
                                </div>
                                {obj.id === 6 ? 
                                    <Switch
                                        checked={enabled}
                                        onChange={handleVibrate}
                                        className={`${enabled ? "bg-yellow-600" : "bg-[#ffbc58]"} relative inline-flex h-6 w-11 items-center rounded-full`}
                                    >
                                        <span
                                            className={`${enabled ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform transition ease-in-out duration-200 rounded-full bg-white`}
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