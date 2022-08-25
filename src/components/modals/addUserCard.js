import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

import TextField from "@mui/material/TextField"
import { Avatar, Chip, InputAdornment } from "@mui/material"
import { Button } from "@material-ui/core"

import UserCard from "./userCard"

import { IoIosArrowBack } from "react-icons/io"
import { FaTag } from "react-icons/fa"
import { MdLocationPin } from "react-icons/md"
import { RiDoubleQuotesL } from "react-icons/ri"
import { BsCardImage } from "react-icons/bs"
import { AiFillLock } from "react-icons/ai"

import "./addUserCard.css"

const categoryTags = [
    {
        category: "Environment",
        color: "#94B394",
        avatarColor: "#619461"
    },
    {
        category: "Physical Activity",
        color: "#FED966",
        avatarColor: "#ffc100"
    },
    {
        category: "Social",
        color: "#B886C1",
        avatarColor: "#a560b1"
    },
    {
        category: "Zen",
        color: "#F2A1A0",
        avatarColor: "#e97170"
    },
]

const AddUserCard = () => {
    const gameStats = JSON.parse(localStorage.getItem("gamestats"))
    const [activityUserCard, setActivityUserCard] = useState(JSON.parse(localStorage.getItem("activity-user-card")))

    const initialState = {
        location: "",
        tag: categoryTags[gameStats.currentActivity.categoryId],
        description: "",
        createdAt: Date(),
    }
    const [isPreviewOn, setIsPreviewOn] = useState(false)
    const [userImageFile, setUserImageFile] = useState(null)
    const [userImageData, setUserImageData] = useState(null)
    const [userCardData, setUserCardData] = useState(initialState)
    const isDisabled = userCardData.location === "" || userCardData.description === "" || !userImageData
    const navigate = useNavigate()

    const handleChange = (e) => {
        setUserCardData({ ...userCardData, [e.target.id]: e.target.value })
    }

    const handleImageChange = (e) => {
        setUserImageFile(e.target.files[0])
        const fileReader = new FileReader()

        fileReader.addEventListener("load", () => {
            setUserImageData(fileReader.result)
        })

        fileReader.readAsDataURL(e.target.files[0])
    }

    const handleClick = () => {

    }

    return (
        <>
            {isPreviewOn ? (
                <UserCard
                    setIsPreviewOn={setIsPreviewOn}
                    userCardData={userCardData}
                    userImageData={userImageData}
                />
            ) : (
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
                    className="add-usercard-bg-container"
                >
                    <div className="top-view">
                        <div className="icon-container">
                            <IoIosArrowBack
                                onClick={() => navigate("/")}
                                className="icon"
                            />
                        </div>
                        <h2>User Card</h2>
                        <div
                            style={{ opacity: 0 }}
                            className="avatar-container"
                        >
                            <img
                                className="avatar"
                                src=""
                            />
                        </div>
                    </div>
                    <div className="add-usercard-container">
                        <div style={{ backgroundColor: categoryTags[gameStats.currentActivity.categoryId].color }} className="add-usercard-content">
                            <div className="add-usercard-location">
                                <TextField
                                    fullWidth
                                    id="location"
                                    label="Location"
                                    inputProps={{ maxLength: 20 }}
                                    variant="outlined"
                                    className="add-usercard-input"
                                    value={userCardData.location}
                                    onChange={(e) => handleChange(e)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <MdLocationPin />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                            <div className="add-usercard-image">
                                <Button
                                    fullWidth
                                    className="add-usercard-input"
                                    variant="contained"
                                    component="label"
                                >
                                    <div className="add-usercard-image-text">
                                        <BsCardImage
                                            style={{ color: "rgba(0, 0, 0, 0.54)" }}
                                        />
                                        {userImageFile
                                            ? userImageFile.name.length > 18 ? `${userImageFile.name.split("").splice(0, 17).join("")}...` : userImageFile.name
                                            : "Upload Photo"}
                                    </div>
                                    <input
                                        accept="image/*"
                                        type="file"
                                        onChange={(e) => handleImageChange(e)}
                                        hidden
                                    />
                                </Button>
                            </div>
                            <div className="add-usercard-tags">
                                <TextField
                                    fullWidth
                                    disabled
                                    className="add-usercard-input"
                                    id="tag"
                                    variant="outlined"
                                    label="Activity Category"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <FaTag />
                                                <Chip
                                                    style={{ backgroundColor: userCardData.tag.avatarColor }}
                                                    avatar={
                                                        <Avatar
                                                            style={{ backgroundColor: userCardData.tag.color }}
                                                            alt={userCardData.tag.category}
                                                            // maybe we can add the activity logo here 
                                                            src="/static/images/avatar/1.jpg"
                                                        />
                                                    }
                                                    label={userCardData.tag.category}
                                                    variant="outlined"
                                                    className="category-chip"
                                                />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                            <div className="add-usercard-description">
                                <TextField
                                    fullWidth
                                    className="add-usercard-input"
                                    variant="outlined"
                                    id="description"
                                    label="Description"
                                    inputProps={{ maxLength: 30 }}
                                    value={userCardData.description}
                                    onChange={(e) => handleChange(e)}
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
                            <div className="add-usercard-btn-container">
                                <Button
                                    startIcon={isDisabled ? <AiFillLock /> : null}
                                    disabled={isDisabled}
                                    onClick={() => setIsPreviewOn(true)}
                                    className="add-usercard-btn"
                                    fullWidth
                                    variant="contained"
                                >
                                    Preview
                                </Button>
                            </div>
                            <div className="add-usercard-btn-container">
                                <Button
                                    startIcon={isDisabled ? <AiFillLock /> : null}
                                    disabled={isDisabled}
                                    className="add-usercard-btn"
                                    fullWidth
                                    variant="contained"
                                    onClick={handleClick}
                                >
                                    Create
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    )
}

export default AddUserCard
