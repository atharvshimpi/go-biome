import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import { settingDetails } from "./settingsData"
import { changeUsername } from "./changeSettings"

import SettingsDetails from "../modals/settingsDetails"
import UserSettings from "./user"
import GeneralSettings from "./general"
import CustomizationSettings from "./customization"
import BackupSharingSettings from "./backup_sharing"

import { IoIosArrowBack } from "react-icons/io"
import { GrFormClose } from "react-icons/gr"

import "./settings.css"

const Settings = () => {
    // eslint-disable-next-line
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [settingId, setSettingId] = useState(null)
    const [selectedSetting, setSelectedSetting] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        if(settingId) {
            setSelectedSetting(settingDetails.find(obj => obj.id === settingId))
        }
    }, [settingId])

    return (
        <>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
                className="settings-container"
            >
                <div className="top-view">
                    <div className="icon-container">
                        <IoIosArrowBack
                            onClick={() => navigate("/")}
                            className="icon"
                        />
                    </div>
                    <h2>Settings</h2>
                    <div className="avatar-container">
                        <img
                            onClick={() => {
                                setOpen(true),
                                setSettingId(0)
                            }}
                            className="avatar"
                            src="https://image.shutterstock.com/image-photo/word-demo-appearing-behind-torn-600w-1782295403.jpg"
                        />
                    </div>
                </div>

                <UserSettings setOpen={setOpen} setSettingId={setSettingId} />
                <GeneralSettings setOpen={setOpen} setSettingId={setSettingId} />
                <CustomizationSettings setOpen={setOpen} setSettingId={setSettingId} />
                <BackupSharingSettings setOpen={setOpen} setSettingId={setSettingId} />

                <AnimatePresence>
                    {open && (
                        <SettingsDetails onClose={() => setOpen(false)}>
                            <div className="flex flex-col h-full pt-3">
                                <div className="relative px-3 pb-4 shadow-sm text-center">
                                    <span className="slider-title">{selectedSetting?.icon} {selectedSetting?.title}</span>
                                    <div className="absolute inset-y-0 right-2 text-3xl">
                                        <button>
                                            <GrFormClose 
                                                onClick={() => setOpen(false)} 
                                            />
                                        </button>
                                    </div>
                                </div>
                                { settingId === 1 ? changeUsername({user, setUser, loading, setLoading, setOpen}) : null }
                            </div>
                        </SettingsDetails>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    )
}

export default Settings