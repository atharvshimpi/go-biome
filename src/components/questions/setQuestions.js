import React from "react"
import { motion } from "framer-motion"

import { FaVirus, FaBacterium } from "react-icons/fa"
import { InputAdornment, TextField, Typography } from "@mui/material"

import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"

export const setFriendlyBiomeName = ({ answers, handleChange }) => {

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
            className="change-input-container"
        >
            <TextField
                fullWidth
                autoComplete="off"
                variant="outlined"
                id="friendlyBiome"
                label="My friendly biome's name"
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
            <Typography className="text-xs font-bold text-left w-full" variant="span">NOTE: You can change your Biome name any time under the settings tab.</Typography>
        </motion.div>
    )
}

export const setUnFriendlyBiomeName = ({ answers, handleChange }) => {

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
            className="change-input-container"
        >
            <TextField
                fullWidth
                autoComplete="off"
                variant="outlined"
                id="unFriendlyBiome"
                label="My unfriendly biome's name"
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
            <Typography className="text-xs font-bold text-left w-full" variant="span">NOTE: You can change your Biome name any time under the settings tab.</Typography>
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
                    minutesStep={5}
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
                    minutesStep={5}
                    value={answers.sleepTime}
                    onChange={(e) => setAnswers({...answers, sleepTime: e})}
                />
            </MuiPickersUtilsProvider>
        </motion.div>
    )
}