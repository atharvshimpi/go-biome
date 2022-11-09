import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { UserAuth } from "../../context/authContext"

import imageTemplate from "../../assets/images/imageTemplate.svg"

import {collection, addDoc, setDoc, doc} from "firebase/firestore"
import {firestore} from "../../firebase"

import {
    Button,
    Checkbox,
    IconButton,
    TextField,
    withStyles,
    FormControl,
    FormControlLabel,
    InputLabel,
    InputAdornment,
    Select,
    MenuItem,
    Box, 
    CircularProgress
} from "@material-ui/core"
import PersonIcon from "@mui/icons-material/Person"
import DateRangeIcon from "@mui/icons-material/DateRange"

import "./userDetails.css"

const initialState = {
    username: "",
    age: "",
    gender: "",
    agreedTerms: false,
    profilePicture: imageTemplate,
}

const UserDetails = () => {
    const [userData, setUserData] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const { user } = UserAuth()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        setLoading(true)
        localStorage.setItem("user", JSON.stringify({ ...userData, email: user.email, profilePicture: user.photoURL ? user.photoURL : imageTemplate }))
        setDoc(doc(firestore, "users", userData.username), {
            details: {
                ...userData,
                email: user.email,
                profilePicture: user.photoURL ? user.photoURL : imageTemplate,
            }
        })
        setTimeout(() => {
            setLoading(false)
            window.location.href = "/questions-main"
        }, 1000)
    }

    const YellowCheckbox = withStyles({
        root: {
            color: "#a66d27",
            "&$checked": {
                color: "#a66d27",
            },
        },
        checked: {},
    })((props) => <Checkbox color="default" {...props} />)

    return (
        <div className="user-details-container">
            <div className="user-details-content">
                <div className="user-details-heading">
                    <h1>Welcome to Go-Go Biome!</h1>
                </div>
                <div className="user-details-input-fields">
                    <TextField
                        required
                        autoComplete="off"
                        fullWidth
                        variant="outlined"
                        id="username"
                        label="Username"
                        className="user-details-input"
                        value={userData.username}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        required
                        type="number"
                        autoComplete="off"
                        fullWidth
                        variant="outlined"
                        id="age"
                        label="Age"
                        className="user-details-input"
                        value={userData.age}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <DateRangeIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            Gender
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="gender"
                            value={userData.gender}
                            label="Gender"
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    gender: e.target.value,
                                })
                            }
                        >
                            <MenuItem value={"M"}>Man</MenuItem>
                            <MenuItem value={"F"}>Woman</MenuItem>
                            <MenuItem value={"GQNB"}>
                                Genderqueer/Non-Binary
                            </MenuItem>
                            <MenuItem value={"null"}>
                                Prefer not to disclose
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <FormControlLabel
                        className="user-details-checkbox"
                        control={
                            <YellowCheckbox
                                id="checkbox"
                                type="checkbox"
                                checked={userData.agreedTerms}
                                onChange={() =>
                                    setUserData({
                                        ...userData,
                                        agreedTerms: !userData.agreedTerms,
                                    })
                                }
                            />
                        }
                        label="Agree to terms &amp; conditions"
                    />
                </div>
                <div className="user-details-next-container">
                    <Button
                        fullWidth
                        variant="contained"
                        className="user-details-next-btn"
                        onClick={handleSubmit}
                        disabled={
                            userData.username === "" || !userData.agreedTerms
                        }
                    >
                        { loading ? (
                            <Box sx={{ display: "flex", justifyContent: "center", fontSize: "0.8rem" }}>
                                <CircularProgress style={{ width: "25px", height: "25px" }} /> 
                            </Box>
                        ) : "Proceed" }
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default UserDetails