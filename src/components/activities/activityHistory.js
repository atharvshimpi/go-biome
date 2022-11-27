import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCreative } from "swiper"
import { addDays, eachWeekOfInterval, format, subDays } from "date-fns"
import { eachDayOfInterval } from "date-fns/esm"

import "./activityHistory.css"
import "swiper/css"
import "swiper/css/effect-cards"

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
    // activityHistory.reverse().map((activity, key) => {
    //     return (
    //         <ActivityHistoryDrpDwn key={key} activity={activity} />
    //     )
    // })
    return (
        <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCreative]}
            className="mySwiper"
        >
            {dates.map((week, index) => {
                return ( 
                    <SwiperSlide key={index}>
                        <div className="activity-history-row">
                            {week.map((day, key) => {
                                const dayTxt = format(day, "EEEEE")
                                return (
                                    <div key={key}>
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
    )
}

export default ActivityHistory