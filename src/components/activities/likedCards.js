import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper"
import ReactCardFlip from "react-card-flip"

import { demoNotification } from "../notifications/demo"
import select from "../../assets/sounds/Alert_pop.mp3"
import select1 from "../../assets/sounds/UI/Proceed.mp3"

import { BsHeart, BsHeartFill } from "react-icons/bs"
import { Box, CircularProgress } from "@mui/material"

import "./carousal/activityCarousal.css"
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

const LikedCards = ({
    gender,
    gameStats,
    setGameStats,
    likedCardsDetails,
    setLikedCardsDetails,
    cardCategory,
    setIsLikedCardsModalOpen,
    setIsActivityModal1Open,
}) => {
    if (!likedCardsDetails) return null
    const [loading, setLoading] = useState(false)
    const msgTemplate = `Activity currently in progress!\nRemember to log your activity once you finish!`
    const audio = new Audio(select1)

    const handleClick = (e, obj) => {
        e.stopPropagation()
        setLoading(true)
        demoNotification(msgTemplate)

        // set current ongoing activity & it's start time 
        setGameStats({
            ...gameStats,
            activityOngoing: true,
            currentActivity: { 
                ...obj,
                activityTimings: { 
                    activityStart: new Date().toISOString(), 
                    activityFinish: null 
                }
            },
        })

        // set this to localstorage
        localStorage.setItem(
            "gamestats",
            JSON.stringify({
                ...gameStats,
                activityOngoing: true,
                currentActivity: { 
                    ...obj,
                    activityTimings: { 
                        activityStart: new Date().toISOString(), 
                        activityFinish: null 
                    },
                }
            })
        )

        const audio = new Audio(select)
        audio.play()
        setTimeout(() => {
            setLoading(false)
            setIsLikedCardsModalOpen(false)
            setIsActivityModal1Open(true)
        }, 1500)
    }

    const handleLike = (e, obj) => {
        e.stopPropagation()
        audio.play()
    
        const filterArr = likedCardsDetails.filter(likedObj => likedObj.icon !== obj.icon)

        // no such liked card exists --> then add one
        if(filterArr.length === likedCardsDetails.length) {
            likedCardsDetails.push({
                ...obj, 
                categoryId: cardCategory, 
            })
            setLikedCardsDetails(likedCardsDetails)
            localStorage.setItem(
                "liked-cards",
                JSON.stringify(likedCardsDetails)
            )
            // such a liked card exists --> then remove that
        } else {
            setLikedCardsDetails(filterArr)
            localStorage.setItem(
                "liked-cards",
                JSON.stringify(filterArr)
            )
        }
    }

    return (
        <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
        >
            {likedCardsDetails.map((obj, key) => {
                const [isCardFlipped, setIsCardFlipped] = useState(false)
                const [cardLoading, setCardLoading] = useState(true)
                const [isLikePressed, setIsLikePressed] = useState(false)
                const multiGenderAvaialble = obj.icon.split("_").length > 1 ? true : false
                const imageLoaded = () => setCardLoading(false)
                // const isLikedCardFound = likedCardsDetails.find(function(likeObj) {
                //     likeObj.task === obj.task
                // })
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
                                    onClick={() => {
                                        audio.play(),
                                        setIsCardFlipped(!isCardFlipped)
                                    }}
                                    src={require(`../../assets/images/cards/${
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
                                onClick={() => {
                                    audio.play(), 
                                    setIsCardFlipped(!isCardFlipped)
                                }}
                                style={{
                                    backgroundColor:
                                        categoryTags[obj.categoryId].color,
                                }}
                            >
                                <div className="card-content">
                                    <p className="header">{obj.task}</p>
                                    <div className="btngrp">
                                        <button
                                            className="btn"
                                            onClick={(e) => {
                                                audio.play(), 
                                                handleClick(e, obj)
                                            }}
                                        >
                                            {loading ? (
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
                                                "START NOW"
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

export default LikedCards