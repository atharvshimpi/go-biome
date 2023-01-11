import React from "react"
import { useNavigate } from "react-router-dom"

import { IoIosArrowBack } from "react-icons/io"
import "./terms.css"
import select from "../../assets/sounds/UI/Proceed.mp3"

const Participation = () => {
    const audio = new Audio(select)
    const navigate = useNavigate()

    return(
        <div className="contain">
            <div className="header">
                <div className="icon-container">
                    <IoIosArrowBack
                        onClick={() => {
                            audio.play(),
                            navigate("/settings")
                        }}
                        className="icon"
                    />
                </div>
                <h1><b>Your Consent :</b></h1>
                {/* Hide this part to maintain center align */}
                <div style={{ opacity: 0 }} className="icon-container">
                    <IoIosArrowBack
                        onClick={() => {audio.play(),navigate("/")}}
                        className="icon"
                    />
                </div>
            </div>
        </div>
    )
}

export default Participation