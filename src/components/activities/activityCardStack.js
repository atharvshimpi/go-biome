import React from "react"

import ActivityCarousal from "./activityCarousal"
import { Box, Modal } from "@mui/material"
import { useState } from "react"
import SwiperModal from "../modals/swiperModal"

const ActivityCardStack = ({ activityUserCards, setOpen }) => {
    // if activty card arrya is empty 
    if(!activityUserCards)
        return 

    const userDetails = JSON.parse(localStorage.getItem("user"))
    const [gameStats, setGameStats] = useState(JSON.parse(localStorage.getItem("gamestats")))
    const [isCardModalOpen, setIsCardModalOpen] = useState(true)
    return (
        <>
            {/* carousal */}
            <Modal
                open={isCardModalOpen}
                onClose={() => {
                    setIsCardModalOpen(false)
                    setOpen(false)
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="modal-container"
                style={{ opacity: 1 }}
            >
                <Box className="modal-content">
                    <SwiperModal gender={userDetails.gender} activityUserCards={activityUserCards} cardCategory={null} />
                </Box>
            </Modal>
        </>
    )
}

export default ActivityCardStack