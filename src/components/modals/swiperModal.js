import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper"
import ReactCardFlip from "react-card-flip"

import { Box, CircularProgress } from "@mui/material"
import "swiper/css"
import "swiper/css/effect-cards"


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
                const [isCardFlipped, setIsCardFlipped] = useState(false)
                const [cardLoading, setCardLoading] = useState(true)
                const multiGenderAvaialble =
                    obj.icon.split("_").length > 1 ? true : false
                const imageLoaded = () => setCardLoading(false)
                return (
                    <SwiperSlide key={key}>
                        <ReactCardFlip
                            isFlipped={isCardFlipped}
                            flipDirection="horizontal"
                        >
                            {/* Front Side */}
                            <div
                                className="card-container"
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
                                <img
                                    style={{ opacity: cardLoading ? 0 : 1 }}
                                    onLoad={imageLoaded}
                                    onClick={() =>
                                        setIsCardFlipped(!isCardFlipped)
                                    }
                                    src={obj.icon.length > 4 ? obj.icon : require(`../../assets/images/cards/${
                                        obj.category
                                    }/${
                                        multiGenderAvaialble
                                            ? `${obj.icon}${gender}`
                                            : obj.icon
                                    }.png`)}
                                    alt={obj.icon}
                                />
                            </div>
                            {/* Back Side */}
                            <div
                                className="card-container"
                                onClick={() => setIsCardFlipped(!isCardFlipped)}
                                style={{
                                    backgroundColor:
                                        categoryTags[cardCategory != null ? cardCategory : obj.categoryId].color,
                                }}
                            >
                                <div className="card-content">
                                    <p className="header">{obj.task}</p>
                                    <div className="btngrp">
                                        <button
                                            className="btn"
                                            onClick={(e) => handleClick(e, obj)}
                                        >
                                            {cardLoading ? (
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent:
                                                            "center",
                                                        fontSize: "0.8rem",
                                                    }}
                                                >
                                                    <CircularProgress
                                                        style={{
                                                            width: "30px",
                                                            height: "30px",
                                                        }}
                                                    />
                                                </Box>
                                            ) : (
                                                "Start now"
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </ReactCardFlip>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default SwiperModal