import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"

import { demoNotification } from "../../notifications/demo"
import UserCard from "./userCard"
import { storage } from "../../../firebase"

import skip from "../../../assets/sounds/skip.mp3"
import create from "../../../assets/sounds/create.mp3"

import TextField from "@mui/material/TextField"
import { Avatar, Box, Chip, CircularProgress, InputAdornment } from "@mui/material"
import { Button } from "@material-ui/core"

import { IoIosArrowBack } from "react-icons/io"
import { FaTag } from "react-icons/fa"
import { MdLocationPin } from "react-icons/md"
import { RiDoubleQuotesL } from "react-icons/ri"
import { BsCardImage, BsFillSkipEndFill } from "react-icons/bs"
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
    const userDetails = JSON.parse(localStorage.getItem("user"))
    const gameStats = JSON.parse(localStorage.getItem("gamestats"))
    const [activityUserCard, setActivityUserCard] = useState(JSON.parse(localStorage.getItem("activity-user-cards")))

    const initialState = {
        location: "",
        tag: categoryTags[gameStats.currentActivity.categoryId],
        description: "",
        createdAt: Date(),
    }
    const [isPreviewOn, setIsPreviewOn] = useState(false)
    const [loading, setLoading] = useState(false)
    const [userImageFile, setUserImageFile] = useState(null)
    const [userImageData, setUserImageData] = useState(null)
    const [userCardData, setUserCardData] = useState(initialState)
    const isDisabled = userCardData.location === "" || userCardData.description === ""
    const multiGenderAvaialble = gameStats.currentActivity.icon.split("_").length > 1 ? true : false
    const gender = userDetails.gender
    const cardImageRef = ref(storage, `images/${userDetails.email.split("@")[0]}/${userCardData.createdAt}`)
    const msgTemplate = `Activity currently in progress!\nRemember to log your activity once you finish!`
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

    const navigateUtil = () => {
        demoNotification(msgTemplate)
        const audio = new Audio(skip)
        audio.play()
        if(gameStats.friendlyBiomePoints == 85)
            navigate("/map")
        else
            navigate("/")
    }

    const handleClick = () => {
        setLoading(true)

        if(userImageFile) {
            uploadBytes(cardImageRef, userImageFile)
                .then(() => {
                    console.log("Image Uploaded")

                    listAll(ref(storage, `images/${userDetails.email.split("@")[0]}`)).then((response) => {
                        getDownloadURL(response.items[response.items.length - 1]).then((url) => {
                            activityUserCard.push({
                                location: userCardData.location,
                                description: userCardData.description,
                                task: gameStats.currentActivity.task,
                                category: gameStats.currentActivity.category,
                                categoryId: gameStats.currentActivity.categoryId,
                                icon: url,
                                createdAt: userCardData.createdAt
                            })
                            
                            setActivityUserCard(activityUserCard)
                            localStorage.setItem("activity-user-cards", JSON.stringify(activityUserCard))
                        })
                    })
                })
                .catch((error) => {
                    console.log("Error : ", error)
                })
        } else {
            activityUserCard.push({
                location: userCardData.location,
                description: userCardData.description,
                task: gameStats.currentActivity.task,
                category: gameStats.currentActivity.category,
                categoryId: gameStats.currentActivity.categoryId,
                icon: gameStats.currentActivity.icon,
                activityStartedAt: null,
                activityEndedAt: null,
                createdAt: userCardData.createdAt
            })
            
            setActivityUserCard(activityUserCard)
            localStorage.setItem("activity-user-cards", JSON.stringify(activityUserCard))
        }
        
        const audio = new Audio(create)
        audio.play()
        setTimeout(() => {
            setLoading(false)
            navigateUtil()
        }, 1500)
    }

    return (
        <>
            {isPreviewOn ? (
                <UserCard
                    setIsPreviewOn={setIsPreviewOn}
                    userCardData={userCardData}
                    userImageData={userImageData || require(`../../../assets/images/cards/${gameStats.currentActivity.category}/${multiGenderAvaialble ? `${gameStats.currentActivity.icon}${gender}` : gameStats.currentActivity.icon}.png`)}
                />
            ) : (
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
                    className="add-usercard-bg-container"
                >
                    <div className="top-view">
                        <div style={{ opacity: 0 }} className="icon-container">
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
                                    {loading ? 
                                        <Box sx={{ display: "flex", justifyContent: "center", fontSize: "0.8rem" }}>
                                            <CircularProgress style={{ width: "25px", height: "25px" }} /> 
                                        </Box> 
                                        : 
                                        "Create"
                                    }
                                </Button>
                            </div>
                            <div className="add-usercard-btn-container">
                                <Button
                                    startIcon={<BsFillSkipEndFill />}
                                    onClick={navigateUtil}
                                    className="add-usercard-btn"
                                    fullWidth
                                    variant="contained"
                                >
                                    Skip
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
