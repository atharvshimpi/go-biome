import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper"

import select from "../../assets/sounds/UI/Proceed.mp3"
import Environment from "../../assets/images/category/environment.svg"
import PhysicalActivity from "../../assets/images/category/physicalactivity.svg"
import Social from "../../assets/images/category/social.svg"
import Zen from "../../assets/images/category/zen.svg"

import { GoLocation } from "react-icons/go"
import { AiOutlineCalendar } from "react-icons/ai"
import { Box, CircularProgress } from "@mui/material"

import "swiper/css"
import "swiper/css/effect-cards"
import "./swiperModal.css"
import { useEffect } from "react"

const categoryTags = [
    {
        category: "Environment",
        color: "#94B394",
        avatarColor: "#619461",
    },
    {
        category: "Physical Activity",
        color: "#FED966",
        avatarColor: "#ffc100",
    },
    {
        category: "Social",
        color: "#B886C1",
        avatarColor: "#a560b1",
    },
    {
        category: "Zen",
        color: "#F2A1A0",
        avatarColor: "#e97170",
    },
]

const SwiperModal = ({ gender, activityUserCards, cardCategory }) => {
    return (
        <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
        >
            {activityUserCards.map((obj, key) => {
                const [cardLoading, setCardLoading] = useState(true)
                const [iconImage, setIconImage] = useState(null)
                const multiGenderAvaialble =
                    obj.icon.split("_").length > 1 ? true : false
                const imageLoaded = () => setCardLoading(false)

                useEffect(() => {
                    if(obj.categoryId == 0)
                        setIconImage(Environment)
                    else if(obj.categoryId == 1)
                        setIconImage(PhysicalActivity)
                    else if(obj.categoryId == 2)
                        setIconImage(Social)
                    else
                        setIconImage(Zen)
                }, [])

                return (
                    <SwiperSlide key={key}>
                        <div
                            className="activity-cardstack-card-container"
                            style={{ backgroundColor: "#ffffff" }}
                        >
                            {cardLoading && (
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontSize: "0.8rem",
                                        position: "relative",
                                        left: cardLoading ? 0 : 0,
                                    }}
                                >
                                    <CircularProgress
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                        }}
                                    />
                                </Box>
                            )}
                            <div className="activity-cardstack-category-container">
                                <img src={require(`../../assets/images/category/${obj.category}.svg`)} style={{ backgroundColor: categoryTags[obj.categoryId].color }} alt={obj.task} />
                            </div>
                            <h1 className="swiper-modal-activity-title">{obj.task}</h1>
                            <div className="activity-cardstack-location">
                                <GoLocation /><p>{obj.location}</p>
                            </div>
                            <img
                                style={{ opacity: cardLoading ? 0 : 1 }}
                                onLoad={imageLoaded}
                                // onClick={() =>
                                //     setIsCardFlipped(!isCardFlipped)
                                // }
                                src={obj.icon.length > 4 ? obj.icon : require(`../../assets/images/cards/${
                                    obj.category
                                }/${
                                    multiGenderAvaialble
                                        ? `${obj.icon}${gender}`
                                        : obj.icon
                                }.png`)}
                                alt={obj.icon}
                            />
                            <div className="activity-cardstack-card-description-container" style={{
                                backgroundColor:
                                categoryTags[cardCategory != null ? cardCategory : obj.categoryId].color,
                            }}>
                                <div className="activity-cardstack-card-description">
                                    <p className="cardstack-card-text"><strong>Description</strong>: {obj.description}</p>
                                </div>
                                <div className="activity-cardstack-date-container">
                                    <AiOutlineCalendar />
                                    <div><p className="cardstack-card-date">Mon, 22 Aug 2022</p></div>
                                </div>
                                <div onClick={() => {}} className="repeat-button">
                                    Repeat Activity
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default SwiperModal