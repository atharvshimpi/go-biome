import React from "react"

import "./activityHistoryDrpDwn.css"

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

export const ActivityHistoryDrpDwn = ({ activity, setIsHistoryModalOpen }) => {
    const userDetails = JSON.parse(localStorage.getItem("user"))
    const multiGenderAvaialble = activity.icon.split("_").length > 1 ? true : false

    const handleClick = () => {
        setIsHistoryModalOpen(true)
    }

    return (
        <div 
            className="drp-dwn-container" 
            style={{ backgroundColor: categoryTags[activity.categoryId].color }}
            onClick={handleClick}
        >
            <div className="activity-history-icon-container">
                <img src={require(`../../assets/images/cards/${activity.category}/${multiGenderAvaialble ? `${activity.icon}${userDetails.gender}` : activity.icon}.png`)} alt={activity.icon} />
            </div>
            <div className="activity-history-details-container">
                <h6 className="drp-dwn-heading">{activity.task}</h6>
                <span className="drp-dwn-category" style={{ backgroundColor: categoryTags[activity.categoryId].avatarColor }}>{activity.category}</span>
            </div>
            <div className="points">
                <h2 className="drp-dwn-points">+{activity.points}</h2>
            </div>
        </div>
    )
}
