import React, { useEffect, useState } from "react"
import { flashDetails } from "../../../../src/data/flash.js"
import select from "../../../assets/sounds/UI/Proceed.mp3"
import biome from "../../../assets/images/shield/biome.png"
import "./preStartInfo.css"
import { useNavigate } from "react-router-dom"
import food from "../../../assets/images/food.svg"
import shazam from "../../../assets/images/shazam.svg"
import friendlyBiome1 from "../../../assets/images/biome/shield.png"
import friendlyBiome2 from "../../../assets/images/biome/ant.png"
import friendlyBiome3 from "../../../assets/images/biome/bugsy.png"
const messages = [
    "Would you like to feed your biome fibre rich foods? ",
    "Would you like to feed your biome with fermented food? ",
    "Want to feed your biome a diverse meal today? ",
    "Want to feed your biome with a home-cooked pot of chicken stew and roasted veggies? ",
    "Want to feed your biome fermented pickles? ",
    "Want to feed your biome fruits? ",
    "Your friendly biome is excited about roasted nuts and dry fruits. Want to indulge? ",
    "Your friendly biome wishes to eat diversely coloured meals with fresh ingredients. Want to indulge? ",
    "Your friendly biome is seeking new friends. Want to feed it some probiotic foods? ",
    "A friend has invited you to a farmer's market. Would you like to go? ",
    "Your local community centre is in need of a volunteer to help with the herb garden. Would you like to engage? ",
    "Would you like to help a friend by caring for their pet dog and a guinea pig while they're away? ",
    "Want to feed your biome probiotics? ",
    "Want to step into your garden and smell your favorite flowers? ",
    "Want to play with clean soil in your backyard? ",
    "Want to feed your biome few shots of alcohol? ",
    "Want to feed your biome a greasy cheese burger? ",
    "Your unfriendly biome would love a third serving of your favourite sugary ice cream. Would you like to feed it? ",
    "Your unfriendly biome is craving a sugar rush. Want to indulge? ",
    "You have been asked to sanitise your hands for the eighth time today. Would you engage in it? ",
    "Want to smoke a cigarette? ",
    "Would you like to lay around and binge watch your favorite series on Netflix? ",
    "Want to feed your biome a full dose of antibiotics? ",
    "Want to watch a netflix episode past your sleep time? ",
]
import EM7 from "../../../assets/images/Biome_Emojis/7.png"
import EM19 from "../../../assets/images/Biome_Emojis/19.png"
var image

const FlashModal = ({
    pref,
    setIsFlashModalOpen,
    setIsFlashEmojiModalOpen,
    setIsFlashEmojiNoModalOpen,
    setIsFlashGoodEmojiModalOpen,
    setIsFlashGoodEmojiNoModalOpen,
}) => {
    var ind = Math.floor(Math.random() * (23 - 0) + 0)
    const [yesImage, setYesImage] = useState(EM19)
    const [noImage, setImage] = useState(EM7)
    const [EmValue, setEmValue] = useState(EM7)
    //const [soundEnabled, setSoundEnabled] = useState(pref.sound)
    const handleYes = () => {

        setEmValue(25)

        setYesImage(yesImage)
        setIsFlashModalOpen(false)
        if (ind < 15) {
            setIsFlashEmojiModalOpen(true)
        } else {
            setIsFlashGoodEmojiModalOpen(true)
        }
    }

    const handleNo = () => {

        setIsFlashModalOpen(false)
        if (ind < 15) {
            setIsFlashEmojiNoModalOpen(true)
        } else {
            setIsFlashGoodEmojiNoModalOpen(true)
        }
    }
    const [text, setText] = useState(
        "Would you like to feed your biome fibre rich foods?"
    )

    useEffect(() => {
        var string_display = messages[ind]
        setText(string_display)
    })

    return (
        <div className="activity-progress-container-status">
            <div className="circle-stat">
                <img
                    src={food}
                    style={{
                        width: "3rem",
                        marginLeft: "0.95rem",
                        marginTop: "0.75rem",
                    }}
                />
            </div>
            <div className="header-status-flash">
                <b>BIOME CONNECT</b>
            </div>
            <div className="image-section-flash">
                <img
                    src={shazam}
                    style={{
                        width: "2rem",
                    }}
                />
            </div>
            <div className="text-flash" style={{ fontSize: "1.2rem" }}>
                <p>{text}</p>
            </div>
            <div>
                <span className="btn-flash">
                    <button onClick={handleYes}>
                        <b> YES </b>
                    </button>
                </span>
                <span className="btn-flash">
                    <button onClick={handleNo}>
                        <b> NO </b>
                    </button>
                </span>
            </div>
        </div>
    )
}

export default FlashModal
