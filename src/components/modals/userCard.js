import React from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

import { Button } from "@material-ui/core"

import { IoIosArrowBack } from "react-icons/io"
import { MdLocationPin } from "react-icons/md"
import { RiDoubleQuotesL } from "react-icons/ri"
import { FaTags } from "react-icons/fa"
import { AiFillClockCircle } from "react-icons/ai"

import "./userCard.css"

const UserCard = ({ setIsPreviewOn, userCardData, userImageData }) => {
    const navigate = useNavigate()

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }} 
            className="usercard-bg-container"
        >
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
            <div className="usercard-container" >
                <div style={{ backgroundColor: userCardData.tag.color }} className="usercard-content">
                    <div className="usercard-location">
                        <MdLocationPin className="usercard-icons" />
                        <h5>{userCardData.location}</h5>
                    </div>
                    <div className="usercard-preview-image-container">
                        <img
                            className="usercard-preview-image"
                            src={userImageData}
                        />
                    </div>
                    <div className="usercard-tags">
                        <FaTags className="usercard-icons" />
                        <h5>{userCardData.tag.category}</h5>
                    </div>
                    <div className="usercard-description">
                        <RiDoubleQuotesL className="usercard-icons" />
                        <h5>{userCardData.description}</h5>
                    </div>
                    <div className="usercard-createdAt">
                        <AiFillClockCircle className="usercard-icons" />
                        <h5>{userCardData.createdAt.substring(4, 15)}</h5>
                    </div>
                    <div className="usercard-btn-container">
                        <Button
                            className="usercard-btn"
                            fullWidth
                            variant="contained"
                            onClick={() => setIsPreviewOn(false)}
                        >
                            Go Back
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default UserCard
