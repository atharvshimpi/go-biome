import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper"

import ReactCardFlip from "react-card-flip"

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

const ActivityCarousal = ({ gameStats, cardDetailsData, cardCategory, setIsCardModalOpen, setIsActivityProgressModalOpen }) => {
    if(!cardDetailsData)
        return null

    const gender = "M"

    const handleClick = () => {
        localStorage.setItem("gamestats", JSON.stringify({ ...gameStats, activityOngoing: true }))
        setIsCardModalOpen(false)
        setIsActivityProgressModalOpen(true)
    }

    return (
        <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
        >
            {cardDetailsData.map((obj, key) => {
                const [isCardFlipped, setIsCardFlipped] = useState(false)
                const multiGenderAvaialble = obj.icon.split("_").length > 1 ? true : false
                return (
                    <SwiperSlide key={key}>
                        <ReactCardFlip isFlipped={isCardFlipped} flipDirection="horizontal">
                            {/* Front Side */}
                            <div className="card-container" style={{ backgroundColor: "#ffffff" }}>
                                <img onClick={() => setIsCardFlipped(!isCardFlipped)} src={require(`../../assets/images/cards/${obj.category}/${multiGenderAvaialble ? `${obj.icon}${gender}` : obj.icon}.png`)} alt={obj.icon} />
                            </div>
                            {/* Back Side */}
                            <div className="card-container" onClick={() => setIsCardFlipped(!isCardFlipped)} style={{ backgroundColor: categoryTags[cardCategory].color }}>
                                <div className="card-content">
                                    <p className="header">
                                        {obj.task}
                                    </p>
                                    <div className="btngrp">
                                        <button className="btn" onClick={handleClick}>Start now</button>
                                    </div>
                                </div>
                            </div>
                        </ReactCardFlip>
                    </SwiperSlide>
                )})}
        </Swiper>
    )
}

export default ActivityCarousal


/*
<div className="card-container" style={{ backgroundColor: categoryTags[cardCategory].color }}>
                                <div className="card-content">
                                    <div className="circle">
                                        <div className="image">
                                            <img onClick={() => setIsCardFlipped(!isCardFlipped)} src={require(`../../assets/images/cards/${obj.category}/${multiGenderAvaialble ? `${obj.icon}${gender}` : obj.icon}.png`)} alt={obj.icon} />
                                        </div>
                                    </div>
                                    <p className="header">
                                        {obj.task}
                                    </p>
                                    <div className="btngrp">
                                        <button className="btn" onClick={handleClick}>Start now</button>
                                    </div>
                                </div>
                            </div>
*/