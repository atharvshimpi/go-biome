import React from "react"

import { IoIosArrowForward } from "react-icons/io"
import { BsFillShareFill } from "react-icons/bs"
import { MdBackup } from "react-icons/md"
// eslint-disable-next-line
const BackupSharingSettings = ({ setOpen, setSettingId }) => {
    const handleClick = (id) => {
        setSettingId(id)
        setOpen(true)
    }

    return (
        <div className="general-settings">
            <div className="general-settings-container">
                <h2>Data Backup</h2>
                <div className="general-settings-content">
                    <div className="options">
                        <div className="title-icon">
                            <MdBackup />
                            <p>Save Progress &amp; feedback</p>
                        </div>
                        <IoIosArrowForward className="icon" onClick={() => handleClick(16)} />
                    </div>
                    <div className="options">
                        <div className="title-icon">
                            <BsFillShareFill />
                            <p>Share with friends</p>
                        </div>
                        <IoIosArrowForward className="icon" onClick={() => handleClick(17)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackupSharingSettings
