import React, { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper"

import select from "../../assets/sounds/UI/Proceed.mp3"
import Environment from "../../assets/images/category/environment.svg"
import PhysicalActivity from "../../assets/images/category/physicalactivity.svg"
import Social from "../../assets/images/category/social.svg"
import Zen from "../../assets/images/category/zen.svg"

import { GoLocation } from "react-icons/go"
import { AiOutlineCalendar, AiFillDelete } from "react-icons/ai"
import { FcSpeaker } from "react-icons/fc"
import { BsThreeDotsVertical } from "react-icons/bs"
import { Box, CircularProgress } from "@mui/material"

import "swiper/css"
import "swiper/css/effect-cards"
import "./swiperModal.css"

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

const SwiperModal = ({ gender, cardDetailsData, activityUserCards, setActivityUserCards, cardCategory, setIsCardModalOpen }) => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false)
    const audio = new Audio(select)

    // On song end, set isAudioPlaying to false
    const toggleAudio = () => {
        var audioElem = document.getElementById("audio")
        
        // If audio is already playing, stop it
        if(isAudioPlaying) {
            setIsAudioPlaying(false)
            audioElem.pause()

        // Else start playing it
        } else {
            setIsAudioPlaying(true)
            audioElem.play()
        }
    }

    const handleDelete = (activityId) => {
        // console.log("Before Delete: ", activityUserCards)
        const filteredUserCards = activityUserCards.filter(card => card.activityId !== activityId)
        // console.log("After Delete: ", filteredUserCards)
        setActivityUserCards(filteredUserCards)
        localStorage.setItem("activity-user-cards", JSON.stringify(filteredUserCards))
        setIsCardModalOpen(false)
    }

    return (
        <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
        >
            {cardDetailsData.map((obj, key) => {
                const [cardLoading, setCardLoading] = useState(true)
                const [iconImage, setIconImage] = useState(null)
                const multiGenderAvaialble =
                    obj.icon.split("_").length > 1 ? true : false
                const imageLoaded = () => setCardLoading(false)
                const dateArr = obj.createdAt.split(" ").slice(0, 4)
                // const file = new File(obj?.audio, "demo.mp3", {
                //     type: "audio/mp3",
                //     lastModified: Date.now()
                // })

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
                            <div className="activity-cardstack-top">
                                <div className="activity-cardstack-category-container">
                                    {/* Dummy Tag to adjust alignment */}
                                    <img src={require(`../../assets/images/category/${obj.category}.svg`)} style={{ opacity: 0 }} alt={obj.task} />
                                    <img src={require(`../../assets/images/category/${obj.category}.svg`)} style={{ backgroundColor: categoryTags[obj.categoryId].color }} alt={obj.task} />
                                    <div className="activity-cardstack-ellipsis">
                                        <AiFillDelete
                                            onClick={() => handleDelete(obj.activityId)}
                                            style={{ marginLeft: "0rem" }} 
                                        />
                                    </div>
                                </div>
                                <h1 className="swiper-modal-activity-title">{obj.task}</h1>
                                <div className="activity-cardstack-location">
                                    <GoLocation /><p>{obj.location}</p>
                                </div>
                                <img
                                    style={{
                                        opacity: cardLoading ? 0 : 1, 
                                        marginBottom: obj.icon.length > 4 ? "2rem" : "0rem",
                                        width: "80%",
                                        height: "50%"
                                    }}
                                    onLoad={imageLoaded}
                                    onClick={() =>
                                        audio.play()
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
                            <div className="activity-cardstack-card-description-container" style={{
                                backgroundColor:
                                categoryTags[cardCategory != null ? cardCategory : obj.categoryId].color,
                            }}>
                                <div className="activity-cardstack-card-description">
                                    <p className="cardstack-card-text"><strong>Description</strong>: {obj.description}</p>
                                </div>
                                <div className="activity-cardstack-date-container">
                                    <AiOutlineCalendar />
                                    <div><p className="cardstack-card-date">{`${dateArr[0]}, ${dateArr[2]} ${dateArr[1]} ${dateArr[3]}`}</p></div>
                                </div>
                                {/* <div className="activity-cardstack-date-container">
                                    <FcSpeaker />
                                    <div><p onClick={toggleAudio} className="cardstack-card-date">{isAudioPlaying ? "Pause" : "Play"} Me</p></div>
                                    <audio id="audio" src={obj?.audio} preload="auto">

                                    </audio>
                                </div> */}
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default SwiperModal