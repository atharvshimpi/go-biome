import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { settingDetails } from "./settingsData"
import { changeUsername, activityCardStack, activityHistory, biomeGarden, changeWakingHours, changeSleepingHours, changeMorningCheckInHours, changeMealHours, changeFriendlyBiomeName, changeUnFriendlyBiomeName, saveProgress } from "./changeSettings"

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
    const [pref, setPref] = useState(JSON.parse(localStorage.getItem("preferences")))
    const activityUserCards = JSON.parse(localStorage.getItem("activity-user-cards"))
    const activityHistoryData = JSON.parse(localStorage.getItem("activity-history"))
    const biomeChars = JSON.parse(localStorage.getItem("biome-garden"))
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [settingId, setSettingId] = useState(-1)
    const [selectedSetting, setSelectedSetting] = useState({})
    const [wakeTime, handleWakeTimeChange] = useState(pref.wakeupTime)
    const [sleepTime, handleSleepTimeChange] = useState(pref.sleepTime)
    const [morningCheckInTime, handleMorningCheckInTimeChange] = useState(pref.morningCheckInTime)
    const [mealTime, handleMealTimeChange] = useState(pref.mealTime)
    const notify = () => toast.success("Updated Successfully!")
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
                        <SettingsDetails settingId={settingId} onClose={() => setOpen(false)}>
                            <div className="flex flex-col h-full pt-3">
                                <div className="flex justify-between items-start px-3 shadow-sm text-center">
                                    <div className="slider-title">
                                        {selectedSetting?.icon}
                                    </div>
                                    <div className="slider-title">
                                        {selectedSetting?.title}
                                    </div>
                                    <div className="inset-y-0 right-2 text-3xl">
                                        <button>
                                            <GrFormClose 
                                                onClick={() => setOpen(false)} 
                                            />
                                        </button>
                                    </div>
                                </div>
                                { settingId === 1 ? changeUsername({notify, pref, user, setUser, loading, setLoading, setOpen}) : null }
                                { settingId === 2 ? activityCardStack(activityUserCards) : null }
                                { settingId === 3 ? activityHistory(activityHistoryData) : null }
                                { settingId === 4 ? biomeGarden(biomeChars) : null }
                                { settingId === 9 ? changeWakingHours({notify, pref, setPref, wakeTime, handleWakeTimeChange, loading, setLoading, setOpen}) : null }
                                { settingId === 10 ? changeSleepingHours({notify, pref, setPref, sleepTime, handleSleepTimeChange, loading, setLoading, setOpen}) : null }
                                { settingId === 11 ? changeMorningCheckInHours({notify, pref, setPref, morningCheckInTime, handleMorningCheckInTimeChange, loading, setLoading, setOpen}) : null }
                                { settingId === 12 ? changeMealHours({notify, pref, setPref, mealTime, handleMealTimeChange, loading, setLoading, setOpen}) : null }
                                { settingId === 13 ? changeFriendlyBiomeName({notify, user, pref, setPref, loading, setLoading, setOpen}) : null }
                                { settingId === 14 ? changeUnFriendlyBiomeName({notify, user, pref, setPref, loading, setLoading, setOpen}) : null }
                                { settingId === 15 ? saveProgress() : null }
                            </div>
                        </SettingsDetails>
                    )}
                </AnimatePresence>
                
                {/* Update Pop Up */}
                <ToastContainer 
                    toastStyle={{ backgroundColor: "#ffdfb8" }}
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </motion.div>
        </>
    )
}

export default Settings