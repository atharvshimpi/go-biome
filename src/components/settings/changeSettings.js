import React from "react"
import { Link } from "react-router-dom"
import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"

import imageTemplate from "../../assets/images/imageTemplate.svg"

import emptyTemplate from "../../assets/images/emptyTemplate.svg"
import { Avatar, IconButton } from "@mui/material"
import { ActivityHistoryDrpDwn } from "../modals/activityHistoryDrpDwn"
import ActivityCardStack from "../activities/activityCardStack"

export const changeProfilePicture = ({
    notify,
    user,
    setUser,
    loading,
    setLoading,
    setOpen,
}) => {
    const handleImage = (e) => {
        const fileReader = new FileReader()

        fileReader.addEventListener("load", () => {
            setUser({ ...user, profilePicture: fileReader.result })
        })

        fileReader.readAsDataURL(e.target.files[0])
    }

    const handleSubmit = () => {
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

export const activityCardStack = (activityUserCards, setOpen) => {
    return (
        <div className="change-input-container">
            {activityUserCards.length > 0 ? (
                <ActivityCardStack activityUserCards={activityUserCards} setOpen={setOpen} />
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
                activityHistory.reverse().map((activity, key) => {
                    return (
                        <ActivityHistoryDrpDwn key={key} activity={activity} />
                    )
                })
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

export const biomeGarden = (biomeGarden, loading, setLoading) => {
    const biomeActiveChar = biomeGarden.active

    return (
        <div className="biome-container">
            {biomeGarden.chars?.map((biome, key) => (
                <div
                    key={key}
                    className={`biome-image ${
                        biomeActiveChar === biome ? "biome-active-image" : ""
                    }`}
                >
                    {loading ? (
                        "Loading..."
                    ) : (
                        <img
                            src={require(`../../assets/images/biome/${biome}`)}
                            alt={biome.split(".")[0]}
                        />
                    )}
                </div>
            ))}
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
        localStorage.setItem(
            "preferences",
            JSON.stringify({ ...pref, wakeupTime: wakeTime })
        )
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setOpen(false)
            notify()
        }, 1000)
        setPref({ ...pref, wakeupTime: wakeTime })
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
        localStorage.setItem(
            "preferences",
            JSON.stringify({ ...pref, sleepTime: sleepTime })
        )
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setOpen(false)
            notify()
        }, 1000)
        setPref({ ...pref, sleepTime: sleepTime })
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

export const saveProgress = () => {
    return (
        <div className="save-progress-info">
            <p className="save-progress-heading">
                Create a save file to recover your current progress if you
                change your phone or reinstall the app in the future.
            </p>

            <p className="save-progress-ps">
                We only store your data locally for maximum privacy. We cannot
                recover your data if it&apos;s lost and there is no save file!
            </p>

            <button className="save-progress-btn">Save Now</button>
        </div>
    )
}
