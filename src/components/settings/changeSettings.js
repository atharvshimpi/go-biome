import React from "react"
import { Link } from "react-router-dom"

import emptyTemplate from "../../assets/images/emptyTemplate.svg"

export const changeUsername = ({ notify, user, setUser, loading, setLoading, setOpen }) => {

    const handleSubmit = () => {
        localStorage.setItem("user", JSON.stringify(user))
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setOpen(false)
            notify()
        }, 1000)
    }

    return (
        <div className="change-input-container">
            <input 
                className="change-input" 
                value={user.username}
                onChange={(e) => setUser({...user, username : e.target.value})}
            />
            <button onClick={handleSubmit} className="change-button">{loading ? "Loading..." : "Update"}</button>
        </div>
    )
}

export const activityCardStack = (activityUserCards) => {

    return (
        <div className="change-input-container">
            {activityUserCards.length > 0 ? 
                <h1>Exists</h1>
                :
                <div className="empty-container">
                    <p className="empty-heading">Add your first Card? <Link className="empty-redirect" to="/">Click Here</Link></p>
                    <img className="empty-img" src={emptyTemplate} alt="no cards" />
                </div>
            }
        </div>
    )
}

export const activityHistory = (activityHistory) => {

    return (
        <div className="change-input-container">
            {activityHistory.length > 0 ? 
                <h1>Exists</h1>
                :
                <div className="empty-container">
                    <p className="empty-heading">Complete an activity? <Link className="empty-redirect" to="/">Click Here</Link></p>
                    <img className="empty-img" src={emptyTemplate} alt="no cards" />
                </div>
            }
        </div>
    )
}

export const biomeGarden = (biomeGarden) => {

    return (
        <div className="biome-container">
            {biomeGarden?.map((biome, key) => (
                <div key={key} className="biome-image">
                    <img src={require(`../../assets/images/biome/${biome}`)} alt={biome.split(".")[0]} />
                </div>
            ))}
        </div>
    )
}