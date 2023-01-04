import React, { useState } from "react"

import { Box, Modal } from "@mui/material"
import SwiperModal from "../../modals/swiperModal"

import Environment from "../../../assets/images/category/environment.svg"
import Social from "../../../assets/images/category/social.svg"
import Physicalactivity from "../../../assets/images/category/physicalactivity.svg"
import Zen from "../../../assets/images/category/zen.svg"

import "./activityCardStack.css"

const ActivityCardStack = ({ activityUserCards, setOpen }) => {
    // if activty card arrya is empty 
    if(!activityUserCards)
        return 

    const userDetails = JSON.parse(localStorage.getItem("user"))
    const [gameStats, setGameStats] = useState(JSON.parse(localStorage.getItem("gamestats")))
    const [isCardModalOpen, setIsCardModalOpen] = useState(false)
    const [cardDetailsData, setCardDetailsData] = useState([])
    
    const handleCardModalOpen = (categoryId) => {
        const tempData = activityUserCards.filter(obj => obj.categoryId == categoryId)
        setCardDetailsData(tempData)

        setIsCardModalOpen(true)
    }

    const categorySpecificCardsCount = (categoryId) => {
        return activityUserCards.filter(obj => obj.categoryId == categoryId).length
    }

    return (
        <>
            {/* carousal */}
            <Modal
                open={isCardModalOpen}
                onClose={() => { setIsCardModalOpen(false) }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="modal-container"
            >
                <Box className="modal-content">
                    <SwiperModal gender={userDetails.gender} activityUserCards={cardDetailsData} cardCategory={null} />
                </Box>
            </Modal>
            <div className="activity-card-stack-container">
                <p className="activity-card-stack-heading">Total Count : { categorySpecificCardsCount(0) + categorySpecificCardsCount(1) + categorySpecificCardsCount(2) + categorySpecificCardsCount(3) } </p>
                <div className="activity-cards">
                    <div
                        onClick={() => handleCardModalOpen(0)}
                        style={{ backgroundColor: "#94B394" }}
                        className="cards"
                    >
                        <img src={Environment} alt="environment" />
                    </div>
                    <div
                        onClick={() => handleCardModalOpen(1)}
                        style={{ backgroundColor: "#FED966" }}
                        className="cards"
                    >
                        <img src={Physicalactivity} alt="physicalActivity" />
                    </div>
                    <div
                        onClick={() => handleCardModalOpen(2)}
                        style={{ backgroundColor: "#B886C1" }}
                        className="cards"
                    >
                        <img src={Social} alt="social" />
                    </div>
                    <div
                        onClick={() => handleCardModalOpen(3)}
                        style={{ backgroundColor: "#F2A1A0" }}
                        className="cards"
                    >
                        <img src={Zen} alt="zen" />
                    </div>
                </div>
                <div className="activity-cards-count">
                    <div
                        style={{ backgroundColor: "#94B394" }}
                        className="cards"
                    >
                        {categorySpecificCardsCount(0)}
                    </div>
                    <div
                        style={{ backgroundColor: "#FED966" }}
                        className="cards"
                    >
                        {categorySpecificCardsCount(1)}
                    </div>
                    <div
                        style={{ backgroundColor: "#B886C1" }}
                        className="cards"
                    >
                        {categorySpecificCardsCount(2)}
                    </div>
                    <div
                        style={{ backgroundColor: "#F2A1A0" }}
                        className="cards"
                    >
                        {categorySpecificCardsCount(3)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActivityCardStack