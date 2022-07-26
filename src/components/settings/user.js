import React from "react"

import { IoIosArrowForward } from "react-icons/io"
import { BsStack } from "react-icons/bs"
import { FaUserAlt } from "react-icons/fa"
import { GiPlantsAndAnimals } from "react-icons/gi"
import { MdHistory } from "react-icons/md"
// eslint-disable-next-line
const UserSettings = ({ setOpen, setSettingId }) => {
    const handleClick = (id) => {
        setSettingId(id)
        setOpen(true)
    }

    return (
        <div className="general-settings">
            <div className="general-settings-container">
                <h2>User Settings</h2>
                <div className="general-settings-content">
                    <div className="options">
                        <div className="title-icon">
                            <FaUserAlt />
                            <p>Change Username</p>
                        </div>
                        <IoIosArrowForward className="icon" onClick={() => handleClick(1)}/>
                    </div>
                    <div className="options">
                        <div className="title-icon">
                            <BsStack />
                            <p>Activity Card Stack</p>
                        </div>
                        <IoIosArrowForward className="icon" onClick={() => handleClick(2)}/>
                    </div>
                    <div className="options">
                        <div className="title-icon">
                            <MdHistory />
                            <p>Activity History</p>
                        </div>
                        <IoIosArrowForward className="icon" onClick={() => handleClick(3)}/>
                    </div>
                    <div className="options">
                        <div className="title-icon">
                            <GiPlantsAndAnimals />
                            <p>Biome Garden</p>
                        </div>
                        <IoIosArrowForward className="icon" onClick={() => handleClick(4)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSettings