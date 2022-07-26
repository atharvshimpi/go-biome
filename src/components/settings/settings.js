import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import SettingsDetails from "../modals/settingsDetails"
import UserSettings from "./user"
import GeneralSettings from "./general"
import CustomizationSettings from "./customization"
import BackupSharingSettings from "./backup_sharing"

import { IoIosArrowBack } from "react-icons/io"

import "./settings.css"

const Settings = () => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

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
                            className="avatar"
                            src="https://image.shutterstock.com/image-photo/word-demo-appearing-behind-torn-600w-1782295403.jpg"
                        />
                    </div>
                </div>

                <UserSettings />
                <GeneralSettings />
                <CustomizationSettings />
                <BackupSharingSettings />
            </motion.div>

            <AnimatePresence>
                {open && (
                    <SettingsDetails onClose={() => setOpen(false)}>
                        Hello
                    </SettingsDetails>
                )}
            </AnimatePresence>
        </>
    )
}

export default Settings
