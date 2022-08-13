import React from "react"
import { motion } from "framer-motion"

import { FaVirus, FaBacterium, FaTasks } from "react-icons/fa"
import { InputAdornment, TextField } from "@mui/material"

import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"

export const setFriendlyBiomeName = ({ user, answers, handleChange }) => {

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
            className="change-input-container"
        >
            <TextField
                fullWidth
                variant="outlined"
                id="friendlyBiome"
                label={`Name for ${user.username}'s friendly biome`}
                className="auth-input"
                value={answers.friendlyBiome}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <FaBacterium />
                        </InputAdornment>
                    ),
                }}
            />
        </motion.div>
    )
}

export const setUnFriendlyBiomeName = ({ user, answers, handleChange }) => {

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
            className="change-input-container"
        >
            <TextField
                fullWidth
                variant="outlined"
                id="unFriendlyBiome"
                label={`Name for ${user.username}'s unfriendly biome`}
                className="auth-input"
                value={answers.unFriendlyBiome}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <FaVirus />
                        </InputAdornment>
                    ),
                }}
            />
        </motion.div>
    )
}

export const setWakeupTime = ({ answers, setAnswers }) => {
    
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
            className="change-input-container"
        >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <TimePicker
                    placeholder="Set Wake Up Time"
                    className="time-picker"
                    value={answers.wakeupTime}
                    onChange={(e) => setAnswers({...answers, wakeupTime: e})}
                />
            </MuiPickersUtilsProvider>
        </motion.div>
    )
}

export const setSleepTime = ({ answers, setAnswers }) => {

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
            className="change-input-container"
        >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <TimePicker
                    placeholder="Set Sleep Time"
                    className="time-picker"
                    value={answers.sleepTime}
                    onChange={(e) => setAnswers({...answers, sleepTime: e})}
                />
            </MuiPickersUtilsProvider>
        </motion.div>
    )
}

export const setActivityCount = ({ answers, setAnswers }) => {

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
            className="change-input-container"
        >
            <TextField
                fullWidth
                variant="outlined"
                id="activityCount"
                label="Activity Count"
                className="auth-input"
                value={answers.activityCount}
                onChange={(e) => setAnswers({...answers, activityCount: Number(e.target.value)})}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <FaTasks />
                        </InputAdornment>
                    ),
                }}
            />
        </motion.div>
    )
}