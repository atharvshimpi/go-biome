import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"

import imageTemplate from "../../assets/images/imageTemplate.svg"

import emptyTemplate from "../../assets/images/emptyTemplate.svg"
import { Box, CircularProgress } from "@material-ui/core"
import { Avatar, IconButton } from "@mui/material"
import { ActivityHistoryDrpDwn } from "../modals/activityHistoryDrpDwn"
import ActivityCardStack from "../activities/cardStack/activityCardStack"
import ActivityHistory from "../activities/history/activityHistory"
import BiomeGarden from "../activities/biomeGarden/biomeGarden"
import select1 from "../../assets/sounds/UI/Proceed.mp3"

export const changeProfilePicture = ({
    notify,
    user,
    setUser,
    loading,
    setLoading,
    setOpen,
}) => {
    const pref = JSON.parse(localStorage.getItem("preferences"))
    const [soundEnabled, setSoundEnabled] = useState(pref.sound)
    const handleImage = (e) => {
        const fileReader = new FileReader()
        const audio = new Audio(select1)

        fileReader.addEventListener("load", () => {
            setUser({ ...user, profilePicture: fileReader.result })
        })

        fileReader.readAsDataURL(e.target.files[0])
    }

    const handleSubmit = () => {
        if(soundEnabled){audio.play()}
        localStorage.setItem("user", JSON.stringify(user))
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setOpen(false)
            notify()
        }, 1000)
    }

    return (
        <div className="change-input-container">
            <input
                accept="image/*"
                type="file"
                id="profile-photo-file"
                onChange={handleImage}
                hidden
            />
            <label htmlFor="profile-photo-file">
                <IconButton component="span">
                    <Avatar
                        alt={user.username}
                        src={imageTemplate}
                        sx={{ width: 156, height: 156 }}
                    />
                </IconButton>
            </label>
            <button
                style={{ marginTop: "1rem" }}
                onClick={handleSubmit}
                className="change-button"
            >
                {loading ? "Loading..." : "Update"}
            </button>
        </div>
    )
}

export const changeUsername = ({
    notify,
    pref,
    user,
    setUser,
    loading,
    setLoading,
    setOpen,
}) => {
    const handleSubmit = () => {
        if(soundEnabled){audio.play()}
        localStorage.setItem("user", JSON.stringify(user))
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setOpen(false)
            notify()
        }, 1000)
    }

    return (
        <div className="change-input-container">
            <input
                className="change-input"
                placeholder={`Name for ${pref.friendlyBiome}'s human friend`}
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <button onClick={handleSubmit} className="change-button">
                {loading ? "Loading..." : "Update"}
            </button>
        </div>
    )
}

export const activityCardStack = (activityUserCards, setActivityUserCards, setOpen) => {
    return (
        <div className="change-input-container" style={{ height: "100vh" }}>
            {activityUserCards.length > 0 ? (
                <ActivityCardStack activityUserCards={activityUserCards} setActivityUserCards={setActivityUserCards} setOpen={setOpen} />
            ) : (
                <div className="empty-container">
                    <p className="empty-heading">
                        Add your first Card?{" "}
                        <Link className="empty-redirect" to="/">
                            Click Here
                        </Link>
                    </p>
                    <img
                        className="empty-img"
                        src={emptyTemplate}
                        alt="no cards"
                    />
                </div>
            )}
        </div>
    )
}

export const activityHistory = (activityHistory) => {
    return (
        <div className="activity-history-container" style={{ height: activityHistory.length > 4 ? "90vh" : "auto" }}>
            {activityHistory.length > 0 ? (
                <ActivityHistory activityHistory={activityHistory} />
            ) : (
                <div className="empty-container">
                    <p className="empty-heading">
                        Complete an activity?{" "}
                        <Link className="empty-redirect" to="/">
                            Click Here
                        </Link>
                    </p>
                    <img
                        className="empty-img"
                        src={emptyTemplate}
                        alt="no cards"
                    />
                </div>
            )}
        </div>
    )
}

export const biomeGarden = (biomeGarden, setBiomeGarden, loading , setLoading) => {
    return (
        <div className="biome-container">
            <BiomeGarden biomeGarden={biomeGarden} setBiomeGarden={setBiomeGarden} loading={loading} />
        </div>
    )
}

export const changeWakingHours = ({
    notify,
    pref,
    setPref,
    wakeTime,
    handleWakeTimeChange,
    loading,
    setLoading,
    setOpen,
}) => {
    const handleSubmit = () => {
        // Set current date, but get time from wakeTime
        const currTime = new Date(wakeTime)
        currTime.setDate(new Date().getDate())
        currTime.setMonth(new Date().getMonth())
        currTime.setFullYear(new Date().getFullYear())

        localStorage.setItem(
            "preferences",
            JSON.stringify({ ...pref, wakeupTime: currTime })
        )
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setOpen(false)
            notify()
        }, 1000)
        setPref({ ...pref, wakeupTime: currTime })
    }

    return (
        <div className="time-container">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <TimePicker
                    placeholder="Set Wake Up Time"
                    className="time-picker"
                    value={wakeTime}
                    onChange={handleWakeTimeChange}
                />
            </MuiPickersUtilsProvider>
            <button className="change-button" onClick={handleSubmit}>
                {loading ? "Loading..." : "Update"}
            </button>
        </div>
    )
}

export const changeSleepingHours = ({
    notify,
    pref,
    setPref,
    sleepTime,
    handleSleepTimeChange,
    loading,
    setLoading,
    setOpen,
}) => {
    const handleSubmit = () => {
        // Set current date, but get time from wakeTime
        const currTime = new Date(sleepTime)
        currTime.setDate(new Date().getDate())
        currTime.setMonth(new Date().getMonth())
        currTime.setFullYear(new Date().getFullYear())

        localStorage.setItem(
            "preferences",
            JSON.stringify({ ...pref, sleepTime: currTime })
        )
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setOpen(false)
            notify()
        }, 1000)
        setPref({ ...pref, sleepTime: currTime })
    }

    return (
        <div className="time-container">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <TimePicker
                    placeholder="Set Sleep Time"
                    className="time-picker"
                    value={sleepTime}
                    onChange={handleSleepTimeChange}
                />
            </MuiPickersUtilsProvider>
            <button className="change-button" onClick={handleSubmit}>
                {loading ? "Loading..." : "Update"}
            </button>
        </div>
    )
}

export const changeMorningCheckInHours = ({
    notify,
    pref,
    setPref,
    morningCheckInTime,
    handleMorningCheckInTimeChange,
    loading,
    setLoading,
    setOpen,
}) => {
    const handleSubmit = () => {
        localStorage.setItem(
            "preferences",
            JSON.stringify({ ...pref, morningCheckInTime: morningCheckInTime })
        )
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setOpen(false)
            notify()
        }, 1000)
        setPref({ ...pref, morningCheckInTime: morningCheckInTime })
    }

    return (
        <div className="time-container">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <TimePicker
                    placeholder="Set Morning Check In Time"
                    className="time-picker"
                    value={morningCheckInTime}
                    onChange={handleMorningCheckInTimeChange}
                />
            </MuiPickersUtilsProvider>
            <button className="change-button" onClick={handleSubmit}>
                {loading ? "Loading..." : "Update"}
            </button>
        </div>
    )
}

export const changeMealHours = ({
    notify,
    pref,
    setPref,
    mealTime,
    handleMealTimeChange,
    loading,
    setLoading,
    setOpen,
}) => {
    const handleSubmit = () => {
        localStorage.setItem(
            "preferences",
            JSON.stringify({ ...pref, mealTime: mealTime })
        )
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setOpen(false)
            notify()
        }, 1000)
        setPref({ ...pref, mealTime: mealTime })
    }

    return (
        <div className="time-container">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <TimePicker
                    placeholder="Set Meal Time"
                    className="time-picker"
                    value={mealTime}
                    onChange={handleMealTimeChange}
                />
            </MuiPickersUtilsProvider>
            <button className="change-button" onClick={handleSubmit}>
                {loading ? "Loading..." : "Update"}
            </button>
        </div>
    )
}

export const changeFriendlyBiomeName = ({
    notify,
    user,
    pref,
    setPref,
    loading,
    setLoading,
    setOpen,
}) => {
    const handleSubmit = () => {
        localStorage.setItem("preferences", JSON.stringify(pref))
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setOpen(false)
            notify()
        }, 1000)
    }

    return (
        <div className="change-input-container">
            <input
                className="change-input"
                placeholder={`Name for ${user.username}'s friendly biome`}
                value={pref.friendlyBiome}
                onChange={(e) =>
                    setPref({ ...pref, friendlyBiome: e.target.value })
                }
            />
            <button onClick={handleSubmit} className="change-button">
                {loading ? "Loading..." : "Update"}
            </button>
        </div>
    )
}

export const changeUnFriendlyBiomeName = ({
    notify,
    user,
    pref,
    setPref,
    loading,
    setLoading,
    setOpen,
}) => {
    const handleSubmit = () => {
        localStorage.setItem("preferences", JSON.stringify(pref))
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setOpen(false)
            notify()
        }, 1000)
    }

    return (
        <div className="change-input-container">
            <input
                className="change-input"
                placeholder={`Name for ${user.username}'s friendly biome`}
                value={pref.unFriendlyBiome}
                onChange={(e) =>
                    setPref({ ...pref, unFriendlyBiome: e.target.value })
                }
            />
            <button onClick={handleSubmit} className="change-button">
                {loading ? "Loading..." : "Update"}
            </button>
        </div>
    )
}

export const backupData = ({
    handleBackUp,
    loading
}) => {
    return (
        <div className="save-progress-info">
            <p className="save-progress-heading">
                Back up your data to recover your current progress anytime.
            </p>

            <p className="save-progress-ps">
                We back up your data on our firebase servers for maximum privacy. 
            </p>

            <button onClick={handleBackUp} className="save-progress-btn">
                {loading ? 
                    <Box sx={{ display: "flex", justifyContent: "center", fontSize: "0.8rem" }}>
                        <CircularProgress style={{ width: "25px", height: "25px" }} /> 
                    </Box>
                    : "Back Up Now"
                }
            </button>
        </div>
    )
}
