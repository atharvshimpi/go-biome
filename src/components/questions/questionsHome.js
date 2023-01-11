import React, { useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

import { IoIosArrowBack } from "react-icons/io"

import logo from '../../assets/images/logo.png'
import gut1 from '../../assets/images/gut10.png'
import gut2 from '../../assets/images/gut2.png'
import game_narrative_1 from '../../assets/images/onboarding/game_narrative_1.png'
import game_narrative_2 from '../../assets/images/onboarding/game_narrative_2.png'
import bugsy from '../../assets/images/friendly.png'
import icons from '../../assets/images/icons.png'

import select1 from "../../assets/sounds/UI/CardTap.mp3"
import "./questions.css"

const QuestionsHome = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const audio = new Audio(select1)
    const [cardShown, setCardShown] = useState(0)

    const handleTap = () => {
        audio.play()
        if (cardShown < 6) {
            setCardShown(cardShown + 1)
        }
    }

    const handleBack = () => {
        if (cardShown > 0) {
            setCardShown(cardShown - 1)
        }
    }

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
            className="questions-container"
            style={{
                backgroundImage: (cardShown === 4 ? 
                    `url(${process.env.PUBLIC_URL + "/images/bg/gameState3.png"})` :
                    `url(${process.env.PUBLIC_URL + "/images/bg/gameState1.png"})`
                ),
                backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="questions-backButton" onClick={handleBack}>
                <IoIosArrowBack className="icon" />
            </div>
            <div className="questions-header">
                <img src={logo} height="60px" width="60px" style={{backgroundColor: "#fff", borderRadius: "0.6rem"}} />
                <div className="questions-title-container">
                    <h1>Go-Go Biome</h1>
                </div>
            </div>
            {/* First onboarding card */}
            {cardShown === 0 &&
                    <div className="questions-content" onClick={handleTap}>
                        <div className="questions-heading">
                            <h1>
                                Welcome to Go-Go Biome,{" "}
                                <span className="username">{user.username}</span>!
                            </h1>
                        </div>
                        <div className="questions-about">
                            <p className="questions-title-text">
                                Did you know?
                            </p>
                            <p>The human gut consists of diverse friendly and unfriendly microbes, together known as the gut microbiome. Maintaining a balance between these two is crucial to maintain good gut health, and an imbalance can result in a variety of auto-immune illnesses.</p>
                            <div className="questions-about-img-container">
                                <img src={gut1} width="120px" />
                                <img src={gut2} width="120px" />
                            </div>
                            <p>However, many of us do not know how we can influence our gut microbial diversity.</p>
                        </div>
                    </div>
                }

            {/* Second onboarding card */}
            {cardShown === 1 &&
                <div className="questions-content" onClick={handleTap}>
                    <div className="questions-about">
                        <p className="questions-title-text">
                            So here&apos;s what we did...
                        </p>
                        <p style={{marginTop: "20px"}}>
                            We designed Go-Go Biome, an open-ended digital game to engage people in real-world gut-friendly activities through play.
                        </p>
                        </div>
                </div>
            }

            {/* Third onboarding card */}
            {cardShown === 2 &&
                <div className="questions-content" onClick={handleTap}>
                    <div className="questions-about">
                        <p className="questions-title-text">
                            What we aim to achieve...
                        </p>
                        <p style={{marginTop: "20px"}}>Go-Go Biome is part of a PhD research project that aims to understand the design of interactive experiences for gut health engagement.</p>
                    </div>
                </div>
            }

            {/* Fourth onboarding card */}
            {cardShown === 3 &&
                <div className="questions-content" style={{paddingBottom: 0}} onClick={handleTap}>
                    <div className="questions-about">
                        <p className="questions-title-text">
                            Game Narrative:
                        </p>
                        <p style={{marginTop: "20px"}}>It was once a splendid trail where Bugsy, the friendly biome, and Minion, the unfriendly biome lived in harmony with one another.</p>
                        <img src={game_narrative_1} style={{marginTop: 'auto'}} />
                    </div>
                </div>
            }

            {/* Fifth onboarding card */}
            {cardShown === 4 &&
                <div className="questions-content" style={{paddingBottom: 0}} onClick={handleTap}>
                    <div className="questions-about">
                        <p className="questions-title-text">
                            Game Narrative:
                        </p>
                        <p style={{marginTop: "20px"}}>But suddenly, owing to some human factors, the minions increased in population, destroying most of Bugsy&apos;s friends. The trail is now a dark and eerie place with minions lurking around every corner. </p>
                        <img src={game_narrative_2} style={{marginTop: 'auto'}} />
                    </div>
                </div>
            }

            {/* Sixth onboarding card */}
            {cardShown === 5 &&
                <div className="questions-content" style={{paddingBottom: 0}} onClick={handleTap}>
                    <div className="questions-about">
                        <p className="questions-title-text">
                            Game Narrative:
                        </p>
                        <p style={{marginTop: "20px"}}><strong>Your mission: </strong> Energise Bugsy by engaging in diverse activities and help it to make new friends. Balance Bugsy&apos;s and Minion&apos;s population to a ratio of 85:15, this depicts a happy and well-balanced gut.</p>
                        <img src={game_narrative_1} style={{marginTop: 'auto'}} />
                    </div>
                </div>
            }

            {/* Sixth onboarding card */}
            {cardShown === 6 &&
                <div className="questions-content" style={{paddingBottom: 0}} onClick={handleTap}>
                    <div className="questions-about">
                        <p className="questions-title-text">
                            Game Narrative:
                        </p>
                        <p style={{marginTop: "20px"}}>Let&apos;s go and engage in diverse activites and help Bugsy restore the balance it once enjoyed. Beware! The Minions have to be kept under check every day to protect the trail.</p>
                        <div className="questions-content-final-image-container">
                            <img src={bugsy} width="120px" className="questions-bugsy-img" />
                            <img src={icons} width="180px" />
                        </div>
                    </div>

                    <div className="questions-btn-container">
                            <button
                                className="questions-btn"
                                onClick={() => navigate("/questions?q=1")}
                            >
                                LET&apos;S GO!
                            </button>
                        </div>
                </div>
            }
        </motion.div>
    )
}

export default QuestionsHome
