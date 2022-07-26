import React from "react"

import { IoIosArrowForward } from "react-icons/io"
import { BsFillVolumeUpFill, BsPhoneVibrateFill } from "react-icons/bs"
import { FaBookOpen, FaInfo } from "react-icons/fa"
// eslint-disable-next-line
const GeneralSettings = ({ setOpen, setSettingId }) => {
    const handleClick = (id) => {
        setSettingId(id)
        setOpen(true)
    }

    return (
        <div className="general-settings">
            <div className="general-settings-container">
                <h2>General Settings</h2>
                <div className="general-settings-content">
                    <div className="options">
                        <div className="title-icon">
                            <BsFillVolumeUpFill />
                            <p>Sound</p>
                        </div>
                        <IoIosArrowForward className="icon" onClick={() => handleClick(5)} />
                    </div>
                    <div className="options">
                        <div className="title-icon">
                            <BsPhoneVibrateFill />
                            <p>Haptic Vibration</p>
                        </div>
                        <IoIosArrowForward className="icon" onClick={() => handleClick(6)} />
                    </div>
                    <div className="options">
                        <div className="title-icon">
                            <FaBookOpen />
                            <p>Tutorial</p>
                        </div>
                        <IoIosArrowForward className="icon" onClick={() => handleClick(7)} />
                    </div>
                    <div className="options">
                        <div className="title-icon">
                            <FaInfo />
                            <p>Information</p>
                        </div>
                        <IoIosArrowForward className="icon" onClick={() => handleClick(8)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralSettings