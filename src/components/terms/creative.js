import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { IoIosArrowBack } from "react-icons/io"
import select from "../../assets/sounds/UI/Proceed.mp3"
import "./terms.css"

const Creative = () => {
    const audio = new Audio(select)
    const navigate = useNavigate()
    const pref = JSON.parse(localStorage.getItem("preferences"))
    const [soundEnabled, setSoundEnabled] = useState(pref.sound)
    return(
        <div className="contain">
            <div className="header">
                <div className="icon-container">
                    <IoIosArrowBack
                        onClick={() => {
                            if(soundEnabled){audio.play()}
                            navigate("/settings")
                        }}
                        className="icon"
                    />
                </div>
                <h1><b>Creative Commons Attribution :</b></h1>
                {/* Hide this part to maintain center align */}
                <div style={{ opacity: 0 }} className="icon-container">
                    <IoIosArrowBack
                        onClick={() =>{ 
                            if(soundEnabled){audio.play()}
                            navigate("/")
                        }}
                        className="icon"
                    />
                </div>
            </div>

            <div className="data-image">
                <img src={require("../../assets/images/cc-large.png")} width="200rem" height="200rem" style={{margin: "-10px"}} />
            </div>

            <div className="main-text-data">
                <p className="text-para1-creative">
                We are grateful for the illustrations from various artists, and for making it available for public use. A huge thanks to you! ♥️ <br/><br/>
                Biome emoji from Freepik: <a href="https://www.freepik.com/ ">https://www.freepik.com/ </a><br/><br/>
                Activity card decks (Go Green, Get Active, Get Social, Go Zen) Illustrations from Story Set: <a href="https://storyset.com/">https://storyset.com/ </a> <br/><br/>
                Game Background, Celebration Image, Happy and Sad Gut Images from Adobe Stock: <a href="https://stock.adobe.com/au/">https://stock.adobe.com/au/ </a> <br/><br/>
                Game UI icons from Noun Project: <a href="https://thenounproject.com/">https://thenounproject.com/ </a> <br/><br/>
                Sound effects from ZapSplat: <a href="https://www.zapsplat.com/">https://www.zapsplat.com/ </a> <br/><br/>
                Low Biome Energy Status sound effect “PowerDown7” by Eric Matyas: <a href="www.soundimage.org">www.soundimage.org </a> <br/><br/>
                </p>
            </div>
        </div>
    )
}

export default Creative