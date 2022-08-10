import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import { InputAdornment } from "@mui/material"
import { Button } from "@material-ui/core"

import { IoIosArrowBack } from "react-icons/io"
import { MdLocationPin } from "react-icons/md"
import { RiDoubleQuotesL } from "react-icons/ri"
import { BsCardImage } from "react-icons/bs"

import "./userCard.css"

const categoryTags = [
    {
        category: "Environment",
        color: "green",
    },
    {
        category: "Physical Activity",
        color: "yellow",
    },
    {
        category: "Social",
        color: "violet",
    },
    {
        category: "Zen",
        color: "pink",
    },
]

const UserCard = () => {
    const [userImageFile, setUserImageFile] = useState(null)
    const [userImageData, setUserImageData] = useState(null)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setUserImageFile(e.target.files[0])
        const fileReader = new FileReader()

        fileReader.addEventListener("load", () => {
            setUserImageData(fileReader.result)
        })

        fileReader.readAsDataURL(e.target.files[0])
    }

    return (
        <div className="usercard-bg-container">
            <div className="top-view">
                <div className="icon-container">
                    <IoIosArrowBack
                        onClick={() => navigate("/")}
                        className="icon"
                    />
                </div>
                <h2>User Card</h2>
                <div style={{ opacity: 0 }} className="avatar-container">
                    <img
                        className="avatar"
                        src="https://image.shutterstock.com/image-photo/word-demo-appearing-behind-torn-600w-1782295403.jpg"
                    />
                </div>
            </div>
            <div className="usercard-container">
                <div className="usercard-location">
                    <TextField
                        fullWidth
                        label="Location"
                        variant="outlined"
                        className="usercard-input"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MdLocationPin />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
                <div className="usercard-image">
                    <Button
                        fullWidth
                        className="usercard-input"
                        variant="contained"
                        component="label"
                    >
                        <div className="usercard-image-text">
                            <BsCardImage />
                            {userImageFile
                                ? userImageFile.name
                                : "Upload Photo"}
                        </div>
                        <input
                            id="usercard-image"
                            accept="image/*"
                            type="file"
                            onChange={(e) => handleChange(e)}
                            hidden
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start"></InputAdornment>
                                ),
                            }}
                        />
                    </Button>
                </div>
                <div className="usercard-tags">
                    <Autocomplete
                        fullWidth
                        className="usercard-input"
                        multiple
                        id="tags-outlined"
                        options={categoryTags}
                        getOptionLabel={(option) => option.category}
                        filterSelectedOptions
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Add category tags"
                                placeholder="Category"
                            />
                        )}
                    />
                </div>
                <div className="usercard-description">
                    <TextField
                        fullWidth
                        className="usercard-input"
                        variant="outlined"
                        label="Description"
                        multiline
                        rows={4}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <RiDoubleQuotesL />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
                <div className="usercard-btn">
                    <Button fullWidth variant="contained">
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default UserCard
