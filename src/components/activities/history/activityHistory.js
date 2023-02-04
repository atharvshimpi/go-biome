import React, { useState, useEffect } from "react"
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
        start: new Date("2023-02-01"),
        end: new Date("2023-05-31"),
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

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const ActivityHistory = ({ activityHistory }) => {
    const userDetails = JSON.parse(localStorage.getItem("user"))
    const [activityId, setActivityId] = useState(null)
    const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false)
    const [selectedDay, setSelectedDay] = useState(new Date()) // default set to today's date
    const [displayData, setDisplayData] = useState({})
    const audio = new Audio(select)
    // activityHistory.reverse().map((activity, key) => {
    //     return (
    //         <ActivityHistoryDrpDwn key={key} activity={activity} />
    //     )
    // })

    const handleSetActivityData = (day) => {
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
    }

    const handleClick = (day) => {
        handleSetActivityData(day)
        audio.play()
    }

    function diffInWeeks(date2, date1) {
        let diff =(date2.getTime() - date1.getTime()) / 1000
        diff /= (60 * 60 * 24 * 7)
        return Math.abs(Math.round(diff))
    }

    useEffect(() => {
        handleSetActivityData(selectedDay)
    }, [])

    return (
        <div>
            <h1
                className="activity-history-month"    
            >
                {months[selectedDay.getMonth()]}, {selectedDay.getFullYear()}
            </h1>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCreative]}
                className="mySwiper swiper-history"
                initialSlide={diffInWeeks(new Date(), new Date("2023-02-01"))}
            >
                {dates.map((week, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="activity-history-row">
                                {week.map((day, key) => {
                                    const dayTxt = format(day, "EEEEE")
                                    return (
                                        <div 
                                            key={key} 
                                            onClick={() => handleClick(day)} 
                                            className={`${day.getDate() === new Date().getDate() && day.getMonth() === new Date().getMonth() ? `curr-day` : ``} ${selectedDay.getDate() === day.getDate() && selectedDay.getMonth() === day.getMonth() ? `selected-day` : ``}`}
                                        >
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
                                        <HistoryModal gender={userDetails.gender} cardCategory={null} activityId={activityId} />
                                    </Box>
                                </Modal>
                                {!isHistoryModalOpen && <ActivityHistoryDrpDwn activity={activity} setIsHistoryModalOpen={setIsHistoryModalOpen} setActivityId={setActivityId} />}
                            </div>
                        )
                    })
                ) : (
                    <Box className="activity-history-empty-message">
                        Uh-oh, you have not performed any activity on this day.
                    </Box>
                )}
            </div>
        </div>
    )
}

export default ActivityHistory