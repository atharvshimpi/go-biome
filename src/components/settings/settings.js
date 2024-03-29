import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { UserAuth } from "../../context/authContext" 
import { updateDoc, doc } from "firebase/firestore"
import { firestore } from "../../firebase"
import { settingDetails } from "./settingsData"
import { changeProfilePicture, changeUsername, activityCardStack, activityHistory, biomeGarden, changeWakingHours, changeSleepingHours, changeMorningCheckInHours, changeMealHours, changeFriendlyBiomeName, changeUnFriendlyBiomeName, backupData } from "./changeSettings"

import SettingsDetails from "../modals/settingsDetails"
import UserSettings from "./user"
import GeneralSettings from "./general"
import CustomizationSettings from "./customization"
import AboutSettings from "./aboutSettings"

import { IoIosArrowBack } from "react-icons/io"
import { GrFormClose } from "react-icons/gr"

import { Avatar } from "@mui/material"

import select1 from "../../assets/sounds/UI/Proceed.mp3"

import "./settings.css"
import imageTemplate from "../../assets/images/imageTemplate.svg"

const Settings = () => {
    // eslint-disable-next-line
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    const [pref, setPref] = useState(JSON.parse(localStorage.getItem("preferences")))
    const [activityUserCards, setActivityUserCards] = useState(JSON.parse(localStorage.getItem("activity-user-cards")))
    const activityHistoryData = JSON.parse(localStorage.getItem("activity-history"))
    const [biomeChars, setBiomeChars] = useState(JSON.parse(localStorage.getItem("biome-garden")))
    const likedCards = JSON.parse(localStorage.getItem("liked-cards"))
    const gameStats = JSON.parse(localStorage.getItem("gamestats"))
    const mapStats = JSON.parse(localStorage.getItem("mapstats"))
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [settingId, setSettingId] = useState(-1)
    const [selectedSetting, setSelectedSetting] = useState({})
    const [wakeTime, handleWakeTimeChange] = useState(pref.wakeupTime)
    const [sleepTime, handleSleepTimeChange] = useState(pref.sleepTime)
    const [morningCheckInTime, handleMorningCheckInTimeChange] = useState(pref.morningCheckInTime)
    const [mealTime, handleMealTimeChange] = useState(pref.mealTime)
    const notify = () => toast.success("Updated Successfully!")
    const backupNotify = () => toast.success("Backed Up Successfully!")
    const { logOut } = UserAuth()
    const audio = new Audio(select1)
    const navigate = useNavigate()
    const [soundEnabled, setSoundEnabled] = useState(pref.sound)

    const handleSignOut = async () => {
        try {
            // First backup all the data to firebase and,  
            await updateDoc(doc(firestore, "users", user.email.split("@")[0]), {
                userDetails: user,
                preferences: pref,
                activityHistory: activityHistoryData,
                activityCardStack: activityUserCards,
                likedCards: likedCards,
                gameStats: gameStats,
                mapStats: mapStats,
                biomeGarden: biomeChars
            })
            
            // Then clear localstorage everytime user logs out
            localStorage.clear()

            await logOut(navigate)
        } catch (error) {
            console.log("Error while SignOut: ", error)
        }
    }

    const handleBackUp = async () => {
        setLoading(true)
        // Backup all the data to firebase and,  
        await updateDoc(doc(firestore, "users", user.email.split("@")[0]), {
            userDetails: user,
            preferences: pref,
            activityHistory: activityHistoryData,
            activityCardStack: activityUserCards,
            likedCards: likedCards,
            gameStats: gameStats,
            mapStats: mapStats,
            biomeGarden: biomeChars
        }).then(() => {
            setLoading(false)
            backupNotify()
        })
    }

    useEffect(() => {
        setSelectedSetting(settingDetails.find(obj => obj.id === settingId))
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
                            onClick={() => {
                                if(soundEnabled){audio.play()} 
                                navigate("/")
                            }}
                            className="icon"
                        />
                    </div>
                    <h2>Settings</h2>
                    <Avatar
                        alt={user.username}
                        src={imageTemplate}
                        className="avatar"
                        onClick={() => {
                            setOpen(true),
                            setSettingId(0)
                        }}
                    />
                </div>

                <UserSettings setOpen={setOpen} setSettingId={setSettingId} handleSignOut={handleSignOut} />
                <GeneralSettings setOpen={setOpen} setSettingId={setSettingId} />
                <CustomizationSettings setOpen={setOpen} setSettingId={setSettingId} />
                <AboutSettings setOpen={setOpen} setSettingId={setSettingId} navigate={navigate} />

                <AnimatePresence>
                    {open && (
                        <SettingsDetails gameStats={gameStats} settingId={settingId} onClose={() => setOpen(false)}>
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
                                                onClick={() => {
                                                    if(soundEnabled){audio.play()}
                                                    setOpen(false)
                                                }} 
                                            />
                                        </button>
                                    </div>
                                </div>
                                { settingId === 0 ? changeProfilePicture({notify, user, setUser, loading, setLoading, setOpen}) : null }
                                { settingId === 1 ? changeUsername({notify, pref, user, setUser, loading, setLoading, setOpen}) : null }
                                { settingId === 2 ? activityCardStack(activityUserCards, setActivityUserCards, setOpen) : null }
                                { settingId === 3 ? activityHistory(activityHistoryData) : null }
                                { settingId === 4 ? biomeGarden(biomeChars, setBiomeChars, loading, setLoading) : null }
                                { settingId === 7 ? backupData({handleBackUp, loading}) : null }
                                { settingId === 8 ? changeWakingHours({notify, pref, setPref, wakeTime, handleWakeTimeChange, loading, setLoading, setOpen}) : null }
                                { settingId === 9 ? changeSleepingHours({notify, pref, setPref, sleepTime, handleSleepTimeChange, loading, setLoading, setOpen}) : null }
                                { settingId === 15 ? changeMorningCheckInHours({notify, pref, setPref, morningCheckInTime, handleMorningCheckInTimeChange, loading, setLoading, setOpen}) : null }
                                { settingId === 16 ? changeMealHours({notify, pref, setPref, mealTime, handleMealTimeChange, loading, setLoading, setOpen}) : null }
                                { settingId === 10 ? changeFriendlyBiomeName({notify, user, pref, setPref, loading, setLoading, setOpen}) : null }
                                { settingId === 17 ? changeUnFriendlyBiomeName({notify, user, pref, setPref, loading, setLoading, setOpen}) : null }
                            </div>
                        </SettingsDetails>
                    )}
                </AnimatePresence>
                
                {/* Update Pop Up */}
                <ToastContainer 
                    toastStyle={{ backgroundColor: "#ffdfb8" }}
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar
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