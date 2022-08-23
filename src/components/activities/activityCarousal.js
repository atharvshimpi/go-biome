import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper"

import Friendly from "../../assets/images/friendly.png"

import "./activityCarousal.css"
import "swiper/css"
import "swiper/css/effect-cards"

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

const ActivityCarousal = ({ cardDetailsData, cardCategory }) => {
    if(!cardDetailsData)
        return null

    return (
        <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
        >
            {cardDetailsData.map((obj, key) => {
                return (
                    <SwiperSlide key={key}>
                        <div className="card-container" style={{ backgroundColor: categoryTags[cardCategory].color }}>
                            <div className="card-content">
                                <div className="circle">
                                    <div className="image">
                                        <img src={Friendly} alt={Friendly.split("/")[3].split(".")[0]} />
                                    </div>
                                </div>
                                <p className="header">
                                    {obj.task}
                                </p>
                                <div className="btngrp">
                                    <button className="btn">Start now</button>
                                    <button className="btn">Later</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )})}
        </Swiper>
    )
}

export default ActivityCarousal
