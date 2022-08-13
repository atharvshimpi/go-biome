import React, { useState } from "react"

import imageTemplate from "../../assets/images/imageTemplate.svg"

import {
    Button,
    Checkbox,
    IconButton,
    TextField,
    withStyles,
    FormControlLabel,
    InputAdornment,
} from "@material-ui/core"
import PersonIcon from "@mui/icons-material/Person"
import PasswordIcon from "@mui/icons-material/Password"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto"

import "./login.css"

const initialState = { username: "", /*password: "",*/ agreedTerms: false, profilePicture: imageTemplate }

const Login = () => {
    const [userData, setUserData] = useState(initialState)
    const [showPassword, setShowPassword] = useState(true)
    const [userImageFile, setUserImageFile] = useState("")
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("user", JSON.stringify(userData))
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            window.location.reload()
        }, 1000)
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleImage = (e) => {
        setUserImageFile(e.target.files[0])
        const fileReader = new FileReader()

        fileReader.addEventListener("load", () => {
            setUserData({...userData, profilePicture: fileReader.result})
        })

        fileReader.readAsDataURL(e.target.files[0])
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
        <div className="auth-container">
            <div className="auth-content">
                <div className="auth-heading">
                    <h1>Welcome to Go Biome!</h1>
                </div>
                <div className="auth-input-fields">
                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        id="username"
                        label="Username"
                        className="auth-input"
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
                    {/* <TextField
                        required
                        fullWidth
                        variant="outlined"
                        id="password"
                        label="Password"
                        className="auth-input"
                        value={userData.password}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PasswordIcon />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleShowPassword}>
                                        {showPassword ? (
                                            <VisibilityOffIcon />
                                        ) : (
                                            <VisibilityIcon />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    /> */}
                    <Button
                        fullWidth
                        className="auth-profile-photo"
                        variant="outlined"
                        component="label"
                        startIcon={<InsertPhotoIcon />}
                    >
                        <div className="add-usercard-image-text">
                            {userImageFile
                                ? userImageFile.name.length > 18 ? `${userImageFile.name.split("").splice(0, 17).join("")}...` : userImageFile.name
                                : "Upload Profile Photo"
                            }
                        </div>
                        <input
                            accept="image/*"
                            type="file"
                            onChange={handleImage}
                            hidden
                        />
                    </Button>
                    <FormControlLabel
                        className="auth-checkbox"
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
                <div className="auth-next-container">
                    <Button
                        fullWidth
                        variant="contained"
                        className="auth-next-btn"
                        onClick={handleSubmit}
                        disabled={
                            userData.username === "" ||
                            userData.password === "" ||
                            !userData.agreedTerms
                        }
                    >
                        {loading ? "Loading..." : "Submit"}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login

/*
<div className="privacy-container">
    <input
        required
        type="checkbox"
        className="privacy-checkbox"
        checked={agreedTerms}
        onChange={() => setAgreedTerms(!agreedTerms)}
    />
    <label>
        When you use our services, you&apos;re trusting us
        with your information. We understand this is a big
        responsibility and work hard to protect your
        information and put you in control. Click here to
        allow us collect your data.
    </label>
</div>
*/
