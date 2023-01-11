import React from "react"
import { useNavigate } from "react-router-dom"

import { IoIosArrowBack } from "react-icons/io"
import select from "../../assets/sounds/UI/Proceed.mp3"
import "./terms.css"

const Creative = () => {
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
                <h1><b>Creative Commons Attribution :</b></h1>
                {/* Hide this part to maintain center align */}
                <div style={{ opacity: 0 }} className="icon-container">
                    <IoIosArrowBack
                        onClick={() =>{ audio.play(),navigate("/")}}
                        className="icon"
                    />
                </div>
            </div>

            <div className="data-image">
                <img src={require("../../assets/images/cc-large.png")} width="200rem" height="200rem" style={{margin: "-10px"}} />
            </div>
        </div>
    )
}

export default Creative