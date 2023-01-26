import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCreative } from "swiper"
import { addDays, eachWeekOfInterval, format, subDays } from "date-fns"
import { eachDayOfInterval } from "date-fns/esm"

import select from "../../../assets/sounds/UI/Proceed.mp3"
import "./activityHistory.css"
import "swiper/css"
import "swiper/css/effect-cards"
import { ActivityHistoryDrpDwn } from "../../modals/activityHistoryDrpDwn"
import { Box, Modal } from "@material-ui/core"
import HistoryModal from "../../modals/historyModal"

// month
const dates = eachWeekOfInterval(
    {
        start: subDays(new Date(), 14),
        end: addDays(new Date(), 14),
    },
    {
        weekStartsOn: 1,
    }
).reduce((acc, cur) => {
    const allDays = eachDayOfInterval({
        start: cur,
        end: addDays(cur, 6)
    })

    acc.push(allDays)
    return acc
}, [])

const ActivityHistory = ({ activityHistory }) => {
    const userDetails = JSON.parse(localStorage.getItem("user"))
    const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false)
    const [selectedDay, setSelectedDay] = useState(new Date()) // default set to today's date
    const [displayData, setDisplayData] = useState({})
    const audio = new Audio(select)
    // activityHistory.reverse().map((activity, key) => {
    //     return (
    //         <ActivityHistoryDrpDwn key={key} activity={activity} />
    //     )
    // })

    const handleClick = (day) => {
        setSelectedDay(day)

        // set the "display data" to all the activities performed in that day(date-month-year)
        const tempData = activityHistory.filter(obj => 
            new Date(obj.activityTimings.activityFinish).getDate() === day.getDate() 
                && 
            new Date(obj.activityTimings.activityFinish).getMonth() === day.getMonth()
                &&
            new Date(obj.activityTimings.activityFinish).getYear() === day.getYear()
        )
        setDisplayData(tempData)
        audio.play()
    }

    return (
        <div>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCreative]}
                className="mySwiper swiper-history"
                initialSlide={2}
            >
                {dates.map((week, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="activity-history-row">
                                {week.map((day, key) => {
                                    const dayTxt = format(day, "EEEEE")
                                    return (
                                        <div key={key} onClick={() => handleClick(day)} className={`${day.getDate() === new Date().getDate() && day.getMonth() === new Date().getMonth() ? `curr-day` : ``} ${selectedDay.getDate() === day.getDate() && selectedDay.getMonth() === day.getMonth() ? `selected-day` : ``}`}>
                                            <p>{dayTxt}</p>
                                            <p>{day.getDate()}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <div className="activity-history-content">
                {displayData.length > 0 ? (
                    displayData.map((activity, key) => {
                        return (
                            <div key={key}>
                                <Modal
                                    open={isHistoryModalOpen}
                                    onClose={() => setIsHistoryModalOpen(false)}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    className="modal-container"
                                >
                                    <Box className="modal-content">
                                        {/* <HistoryModal gender={userDetails.gender} cardCategory={null} activity={activity} /> */}
                                    </Box>
                                </Modal>
                                {!isHistoryModalOpen && <ActivityHistoryDrpDwn activity={activity} setIsHistoryModalOpen={setIsHistoryModalOpen} />}
                            </div>
                        )
                    })
                ) : (
                    <h1>No Activity Performed on this day!</h1>
                )}
            </div>
        </div>
    )
}

export default ActivityHistory