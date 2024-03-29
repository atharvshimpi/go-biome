import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { setDoc, doc } from "firebase/firestore"
import { firestore } from "../../firebase"

import { UserAuth } from "../../context/authContext"

import imageTemplate from "../../assets/images/imageTemplate.svg"
import select from "../../assets/sounds/UI/Proceed.mp3"

import {
    Button,
    Checkbox,
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
import GroupsIcon from "@mui/icons-material/Groups"

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
    const audio = new Audio(select)
    const navigate = useNavigate()
    //const pref = JSON.parse(localStorage.getItem("preferences"))
    //const [soundEnabled, setSoundEnabled] = useState(pref.sound)

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
       //if(soundEnabled){audio.play()}
        setLoading(true)
        localStorage.setItem("user", JSON.stringify({ 
            ...userData, 
            email: user.email, 
            // if -1, then use the default template, no need to populate it in local storage
            profilePicture: user.photoURL,
        }))

        // save user info in firebase 
        setDoc(doc(firestore, "users", user.email.split("@")[0]), {
            userDetails: {
                ...userData,
                email: user.email,
                profilePicture: user.photoURL,
            }
        })
        
        setTimeout(() => {
            setLoading(false)
            navigate("/questions-main")
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
                <div className="user-details-heading" style={{ marginTop: userData.gender === "OTHER" ? "4rem" : "0rem"}}>
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
                    {/* <TextField
                        required
                        type="number"
                        autoComplete="off"
                        fullWidth
                        variant="outlined"
                        id="groupId"
                        label="Group Id"
                        className="user-details-input"
                        value={userData.groupId}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <GroupsIcon />
                                </InputAdornment>
                            ),
                        }}
                    /> */}
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
                            <MenuItem value={"GQNB"}>Genderqueer/Non-Binary</MenuItem>
                            {/* Open a Text Field upon clicking this option */}
                            <MenuItem value={"OTHER"}>I identify myself as </MenuItem>
                            <MenuItem value={"null"}>Prefer not to disclose</MenuItem>
                        </Select>
                    </FormControl>
                    {userData.gender === "OTHER" ? (
                        <TextField
                            required
                            type="text"
                            autoComplete="off"
                            fullWidth
                            variant="outlined"
                            id="otherGender"
                            label="Enter Your Gender Here"
                            style={{ marginTop: "2rem" }}
                            value={userData.otherGender}
                            onChange={handleChange}
                        />
                    ) : null}
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
                        onClick={() => handleSubmit()}
                        disabled={
                            userData.username === "" || !userData.agreedTerms
                        }
                    >
                        { loading ? (
                            <Box sx={{ display: "flex", justifyContent: "center", fontSize: "0.8rem", color:"white" }}>
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