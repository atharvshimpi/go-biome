import React from "react"
import { useNavigate } from "react-router-dom"

import { IoIosArrowBack } from "react-icons/io"
import select from "../../assets/sounds/UI/Proceed.mp3"
import "./terms.css"

const Terms = () => {
    const audio = new Audio(select)
    const navigate = useNavigate()

    return(
        <div className="contain">
            <div className="header">
                <div className="icon-container">
                    <IoIosArrowBack
                        onClick={() => {
                            audio.play(),
                            navigate("/")
                        }}
                        className="icon"
                    />
                </div>
                <h1><b>Terms and Conditions</b></h1>
                {/* Hide this part to maintain center align */}
                <div style={{ opacity: 0 }} className="icon-container">
                    <IoIosArrowBack
                        onClick={() => {
                            audio.play(),
                            navigate("/")
                        }}
                        className="icon"
                    />
                </div>
            </div>

            <div className="main-text">
                <p className="text-para1">
                By agreeing to play Go-Go Biome you consent to participate in a research study on the design of interactive experiences to engage with gut health factors. Playing Go-Go Biome requires users to participate in real world activities as part of the gameplay. The choice of activities will be up to the individual user to choose from a set of activities listed in the game cards. As part of the gameplay, we will be collecting the following data from you for academic research purposes.<br/>
                </p>
            </div>

            <div className="data-images">
                <div className="data-image">
                    <img src={require("../../assets/images/tnc/check.png")} width="60px" height="60px" style={{margin: "-10px"}} />
                    <img src={require("../../assets/images/tnc/images.png")} width="60px" height="60px" />
                    <h2 className="data-image-title">Images</h2>
                </div>
                <div className="data-image">
                    <img src={require("../../assets/images/tnc/check.png")} width="60px" height="60px" style={{margin: "-10px"}} />
                    <img src={require("../../assets/images/tnc/image_description.png")} width="60px" height="60px" />
                    <h2 className="data-image-title">Image Description</h2>
                </div>
                <div className="data-image">
                    <img src={require("../../assets/images/tnc/check.png")} width="60px" height="60px" style={{margin: "-10px"}} />
                    <img src={require("../../assets/images/tnc/voice_note.png")} width="60px" height="60px" />
                    <h2 className="data-image-title">Voice Notes</h2>
                </div>
                <div className="data-image">
                    <img src={require("../../assets/images/tnc/check.png")} width="60px" height="60px" style={{margin: "-10px"}} />
                    <img src={require("../../assets/images/tnc/game_analytics.png")} width="60px" height="60px" />
                    <h2 className="data-image-title">Game Analytics</h2>
                </div>
                <div className="data-image">
                    <img src={require("../../assets/images/tnc/check.png")} width="60px" height="60px" style={{margin: "-10px"}} />
                    <img src={require("../../assets/images/tnc/survey.png")} width="60px" height="60px" />
                    <h2 className="data-image-title">Survey</h2>
                </div>
            </div>

            <div className="header">
                <h1> <b>Your Data:</b></h1>
            </div>

            <div className="main-text-data">
                <p className="text-para1">
                Playing Go-Go Biome requires users to take images of the activities they engage in during the course of the game to make a visual record of their game moves in the form of user activity cards. These cards include <strong>images</strong> from activities, any <strong>image description</strong> added by you, and a <strong>voice note</strong> in case you wish to record any experiences pertaining to the activity. Users can be creative in the way they capture images- and avoid taking selfies where possible. All data collected through this game will be accessed only by the user and later by the research team for the sake of data analysis for our research. All such data will be handled as per our research data management plan. Kindly note, &quot;you&quot; (the user) are not the subject of our research, we are interested in the ways in which the game is played and the activities users participate in, the corresponding feedback from the game, and your interaction with the game components. Wherever possible, users are requested to anonymise themselves in usernames and description tags so as to help us maintain your privacy. Data in the form of <strong>game analytics</strong> will be collected to understand your interaction with the game features. You are also invited to participate in a <strong>survey</strong> to help us understand your experience with the game, this can be greatly beneficial for our research.
                </p>

                <p style={{ marginBottom: "0.5rem" }} className="text-para2">
                    Other information regarding this research and data handling can be accessed under the <strong>Settings tab &gt; About section</strong>. For further details about this research, please feel free to contact the research team at <a href="mailto:hafp.tech@gmail.com" style={{color: "#000", fontWeight: "bold", textDecoration: "underline"}}>hafp.tech@gmail.com</a>.
                </p>
            </div>
        </div>
    )
}

export default Terms