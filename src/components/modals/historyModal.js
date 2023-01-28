import React, { useState } from "react"
import { Box, CircularProgress } from "@material-ui/core"

import { GoLocation } from "react-icons/go"
import { AiOutlineCalendar } from "react-icons/ai"

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

const HistoryModal = ({ gender, cardCategory, activityId  }) => {
    const activityCardStack = JSON.parse(localStorage.getItem("activity-user-cards"))
    const filteredCard = activityCardStack.filter(card => card.activityId === activityId)[0]
    
    const [cardLoading, setCardLoading] = useState(true)
    const multiGenderAvaialble =
    filteredCard?.icon.split("_").length > 1 ? true : false
    const imageLoaded = () => setCardLoading(false)
    const dateArr = filteredCard.createdAt.split(" ").slice(0, 4)

    return (
        <div
            className="activity-cardstack-card-container"
            style={{ backgroundColor: "#ffffff", margin: "0 1rem" }}
        >
            {cardLoading && filteredCard !== undefined && (
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
            {filteredCard === undefined ? (
                <h1>No Card Made</h1>
            ) : (
                <>
                    <div className="activity-cardstack-top">
                        <div className="activity-cardstack-category-container">
                            <img
                                src={require(`../../assets/images/category/${filteredCard.category}.svg`)}
                                style={{
                                    backgroundColor: categoryTags[filteredCard.categoryId].color,
                                }}
                                alt={filteredCard.task}
                            />
                        </div>
                        <h1 className="swiper-modal-activity-title">{filteredCard.task}</h1>
                        <div className="activity-cardstack-location">
                            <GoLocation />
                            <p>{filteredCard.location}</p>
                        </div>
                        <img
                            style={{ 
                                opacity: cardLoading ? 0 : 1, 
                                marginBottom: filteredCard.icon.length > 4 ? "2rem" : "0rem",
                                width: "80%"
                            }}
                            onLoad={imageLoaded}
                            onClick={() => audio.play()}
                            src={
                                filteredCard.icon.length > 4
                                    ? filteredCard.icon
                                    : require(`../../assets/images/cards/${filteredCard.category}/${
                                        multiGenderAvaialble
                                            ? `${filteredCard.icon}${gender}`
                                            : filteredCard.icon
                                    }.png`)
                            }
                            alt={filteredCard.icon}
                        />
                    </div>
                    <div
                        className="activity-cardstack-card-description-container"
                        style={{
                            backgroundColor:
                                categoryTags[
                                    cardCategory != null ? cardCategory : filteredCard.categoryId
                                ].color,
                        }}
                    >
                        <div className="activity-cardstack-card-description">
                            <p className="cardstack-card-text">
                                <strong>Description</strong>: {filteredCard.description}
                            </p>
                        </div>
                        <div className="activity-cardstack-date-container">
                            <AiOutlineCalendar />
                            <div>
                                <p className="cardstack-card-date">{`${dateArr[0]}, ${dateArr[2]} ${dateArr[1]} ${dateArr[3]}`}</p>
                            </div>
                        </div>
                        {/* <div className="activity-cardstack-date-container">
                                        <FcSpeaker />
                                        <div><p onClick={toggleAudio} className="cardstack-card-date">{isAudioPlaying ? "Pause" : "Play"} Me</p></div>
                                        <audio id="audio" src={activity?.audio} preload="auto">

                                        </audio>
                                    </div> */}
                    </div>
                </>
            )}
            
        </div>
    )
}

export default HistoryModal
