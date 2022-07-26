import React from "react"

import { IoIosArrowForward } from "react-icons/io"
import { BsFillVolumeUpFill, BsPhoneVibrateFill } from "react-icons/bs"
import { FaBookOpen, FaInfo } from "react-icons/fa"

const GeneralSettings = () => {
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
                        <IoIosArrowForward className="icon" />
                    </div>
                    <div className="options">
                        <div className="title-icon">
                            <BsPhoneVibrateFill />
                            <p>Haptic Vibration</p>
                        </div>
                        <IoIosArrowForward className="icon" />
                    </div>
                    <div className="options">
                        <div className="title-icon">
                            <FaBookOpen />
                            <p>Tutorial</p>
                        </div>
                        <IoIosArrowForward className="icon" />
                    </div>
                    <div className="options">
                        <div className="title-icon">
                            <FaInfo />
                            <p>Information</p>
                        </div>
                        <IoIosArrowForward className="icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralSettings