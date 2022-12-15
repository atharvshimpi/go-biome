import React from "react"
import { useNavigate } from "react-router-dom"

import { IoIosArrowBack } from "react-icons/io"
import "./terms.css"

const Terms = () => {
    const navigate = useNavigate()
    return(
        <div className="contain">
            <div className="header">
                <div className="icon-container">
                    <IoIosArrowBack
                        onClick={() => navigate("/")}
                        className="icon"
                    />
                </div>
                <h1><b>Terms and Conditions</b></h1>
                {/* Hide this part to maintain center align */}
                <div style={{ opacity: 0 }} className="icon-container">
                    <IoIosArrowBack
                        onClick={() => navigate("/")}
                        className="icon"
                    />
                </div>
            </div>

            <div className="main-text">
                <p className="text-para1">
                    By playing Go-Go Biome you consent to participate in a research study 
                    on the design of interactive experiences to engage with gut health factors.
                    The following data as listed below will be collected for academic research purposes.
                    You may choose to provide additional consent for the use of your data 
                    (images and activity descriptions) in our research publications and promotion in both digital and analog formats.<br/>
                </p>

                <p className="text-para2">
                    Playing Go-Go Biome requires users to participate in real world activities as part of the gameplay. 
                    The choice of activities will be up to the individual user to decide from a set of activities listed in the game cards. <br/>
                </p>
            </div>

            <div className="header">
                <h1> <b>Your Data:</b></h1>
            </div>

            <div className="main-text-data">
                <p className="text-para1">
                    By agreeing to play Go-Go Biome you consent to participate in a research study
                    on the design of interactive experiences to engage with gut health factors. 
                    Playing Go-Go Biome requires users to participate in real world activities as part of the gameplay. 
                    The choice of activities will be up to the individual user to choose from a set of activities listed in the game cards. 
                    As part of the gameplay, we will be collecting the following data from you for academic research purpose.<br/>
                </p>

                <p className="text-para2">
                    Wherever possible, users are requested to anonymise themselves in usernames and description tags so as to help us maintain your privacy.
                </p>

                <p style={{ marginBottom: "0.5rem" }} className="text-para2">
                    Other information regarding this research and data handling can be accessed in the About section under the Settings tab. For further details about this research, please contact the research team at <a href="mailto: hafp.tech@gmail.com">hafp.tech@gmail.com</a>.
                </p>
            </div>
        </div>
    )
}

export default Terms