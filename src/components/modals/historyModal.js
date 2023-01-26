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

const HistoryModal = ({ gender, cardCategory, activity }) => {
    const [cardLoading, setCardLoading] = useState(true)
    const multiGenderAvaialble =
    activity.icon.split("_").length > 1 ? true : false
    const imageLoaded = () => setCardLoading(false)

    return (
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
                <img
                    src={require(`../../assets/images/category/${activity.category}.svg`)}
                    style={{
                        backgroundColor: categoryTags[activity.categoryId].color,
                    }}
                    alt={activity.task}
                />
            </div>
            <h1 className="swiper-modal-activity-title">{activity.task}</h1>
            <div className="activity-cardstack-location">
                <GoLocation />
                <p>{activity.location}</p>
            </div>
            <img
                style={{ opacity: cardLoading ? 0 : 1 }}
                onLoad={imageLoaded}
                onClick={() => audio.play()}
                src={
                    activity.icon.length > 4
                        ? activity.icon
                        : require(`../../assets/images/cards/${activity.category}/${
                            multiGenderAvaialble
                                ? `${activity.icon}${gender}`
                                : activity.icon
                        }.png`)
                }
                alt={activity.icon}
            />
            <div
                className="activity-cardstack-card-description-container"
                style={{
                    backgroundColor:
                        categoryTags[
                            cardCategory != null ? cardCategory : activity.categoryId
                        ].color,
                }}
            >
                <div className="activity-cardstack-card-description">
                    <p className="cardstack-card-text">
                        <strong>Description</strong>: {activity.description}
                    </p>
                </div>
                <div className="activity-cardstack-date-container">
                    <AiOutlineCalendar />
                    <div>
                        <p className="cardstack-card-date">Mon, 22 Aug 2022</p>
                    </div>
                </div>
                {/* <div className="activity-cardstack-date-container">
                                <FcSpeaker />
                                <div><p onClick={toggleAudio} className="cardstack-card-date">{isAudioPlaying ? "Pause" : "Play"} Me</p></div>
                                <audio id="audio" src={activity?.audio} preload="auto">

                                </audio>
                            </div> */}
                <div
                    onClick={() => {
                        audio.play()
                    }}
                    className="repeat-button"
                >
                    Repeat Activity
                </div>
            </div>
        </div>
    )
}

export default HistoryModal
