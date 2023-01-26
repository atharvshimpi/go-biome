import React from "react"
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
import EM1 from "../../../assets/images/Biome_Emojis/1.png"
import EM2 from "../../../assets/images/Biome_Emojis/2.png"
import EM3 from "../../../assets/images/Biome_Emojis/3.png"
import EM4 from "../../../assets/images/Biome_Emojis/4.png"
import EM5 from "../../../assets/images/Biome_Emojis/5.png"
import EM6 from "../../../assets/images/Biome_Emojis/6.png"
import EM7 from "../../../assets/images/Biome_Emojis/7.png"
import EM8 from "../../../assets/images/Biome_Emojis/8.png"
import EM9 from "../../../assets/images/Biome_Emojis/9.png"
import EM10 from "../../../assets/images/Biome_Emojis/10.png"
import EM11 from "../../../assets/images/Biome_Emojis/11.png"
import EM12 from "../../../assets/images/Biome_Emojis/12.png"
import EM13 from "../../../assets/images/Biome_Emojis/13.png"
import EM14 from "../../../assets/images/Biome_Emojis/14.png"
import EM15 from "../../../assets/images/Biome_Emojis/15.png"
import EM16 from "../../../assets/images/Biome_Emojis/16.png"
import EM17 from "../../../assets/images/Biome_Emojis/17.png"
import EM18 from "../../../assets/images/Biome_Emojis/18.png"
import EM19 from "../../../assets/images/Biome_Emojis/19.png"
import EM20 from "../../../assets/images/Biome_Emojis/20.png"
import EM21 from "../../../assets/images/Biome_Emojis/21.png"
import EM22 from "../../../assets/images/Biome_Emojis/22.png"
import EM23 from "../../../assets/images/Biome_Emojis/23.png"
import EM24 from "../../../assets/images/Biome_Emojis/24.png"
import EM25 from "../../../assets/images/Biome_Emojis/25.png"
import EM26 from "../../../assets/images/Biome_Emojis/26.png"
import EM27 from "../../../assets/images/Biome_Emojis/27.png"
import EM28 from "../../../assets/images/Biome_Emojis/28.png"
import EM29 from "../../../assets/images/Biome_Emojis/29.png"
import EM30 from "../../../assets/images/Biome_Emojis/30.png"
import EM31 from "../../../assets/images/Biome_Emojis/31.png"
import EM32 from "../../../assets/images/Biome_Emojis/32.png"
import EM33 from "../../../assets/images/Biome_Emojis/33.png"
import EM34 from "../../../assets/images/Biome_Emojis/34.png"
import EM35 from "../../../assets/images/Biome_Emojis/35.png"
import EM36 from "../../../assets/images/Biome_Emojis/36.png"
import EM37 from "../../../assets/images/Biome_Emojis/37.png"
const pref = JSON.parse(localStorage.getItem("preferences"))
const gameStats = JSON.parse(localStorage.getItem("gamestats"))
const messages = [
    "Would you like to feed your biome fibre rich foods? ",
    "Would you like to feed your biome with fermented food? ",
    "Want to feed your biome a diverse meal today? ",
    "Want to feed your biome few shots of alcohol? ",
    "Want to feed your biome with a home-cooked pot of chicken stew and roasted veggies? ",
    "Want to feed your biome fermented pickles? ",
    "Want to feed your biome a greasy cheese burger? ",
    "Want to feed your biome fruits? ",
    "Your unfriendly biome would love a third serving of your favourite sugary ice cream. Would you like to feed it? ",
    "Your unfriendly biome is craving a sugar rush. Want to indulge? ",
    "Your friendly biome is excited about roasted nuts and dry fruits. Want to indulge? ",
    "Your friendly biome wishes to eat diversely coloured meals with fresh ingredients. Want to indulge? ",
    "Your friendly biome is seeking new friends. Want to feed it some probiotic foods? ",
    "You have been asked to sanitise your hands for the eighth time today. Would you engage in it? ",
    "Want to smoke a cigarette? ",
    "A friend has invited you to a farmer's market. Would you like to go? ",
    "Your local community centre is in need of a volunteer to help with the herb garden. Would you like to engage? ",
    "Would you like to help a friend by caring for their pet dog and a guinea pig while they're away? ",
    "Would you like to lay around and binge watch your favorite series on Netflix? ",
    "Want to feed your biome a full dose of antibiotics? ",
    "Want to feed your biome probiotics? ",
    "Want to step into your garden and smell your favorite flowers? ",
    "Want to play with clean soil in your backyard? ",
    "Want to watch a netflix episode past your sleep time? ",
]

var image

const FlashGoodEmojiNoModal = ({ userDetails, pref, setIsFlashEmojiNoModalOpen, ind }) => {
    const no_emoji = [EM16, EM27, EM21, EM2, EM32, EM29, EM37]
    var indno_emoji = Math.floor(Math.random() * (7 - 0) + 0)
    const handleYes = () => {
        const audio = new Audio(select)
        audio.play()
        setIsFlashEmojiNoModalOpen(false)
    }

    const handleNo = () => {
        const audio = new Audio(select)
        audio.play()
        setIsFlashModalOpen(false)
    }
    return (
        <div className="activity-progress-container-status">
            <div className="header-status-flash-emoji">
                <b>BIOME CONNECT</b>
            </div>
            <div className="image-section-flash-emoji">
                <img
                    src={shazam}
                    style={{
                        width: "2rem",
                    }}
                />
            </div>

            <div className="name-emoji-modal">
                <b>{userDetails.username}</b> says
            </div>

            <div>
                <span className="btn-flash-img">
                    <img src={friendlyBiome1} style={{ width: "5rem" }} />
                </span>
                <span className="btn-flash-img">
                    <img
                        src={no_emoji[indno_emoji]}
                        style={{ width: "5rem" }}
                    />
                </span>
            </div>
        </div>
    )
}

export default FlashGoodEmojiNoModal
