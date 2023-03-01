import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import select from "../../assets/sounds/UI/Proceed.mp3"
import { IoIosArrowBack } from "react-icons/io"
import "./terms.css"

const AboutResearch = () => {
    const navigate = useNavigate()
    const pref = JSON.parse(localStorage.getItem("preferences"))
    const [soundEnabled, setSoundEnabled] = useState(pref.sound)
    const audio = new Audio(select)
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
                <h1><b>About this research</b></h1>
                {/* Hide this part to maintain center align */}
                {/* <div style={{ opacity: 0 }} className="icon-container">
                    <IoIosArrowBack
                        onClick={() => {
                            audio.play(),
                            navigate("/settings")
                        }}
                        className="icon"
                    />
                </div> */}
            </div>

            <div className="header-intro">
                <h1> <b>1 Introduction</b></h1>
            </div>

            <div className="main-text">
                <p className="text-para1">
                    The human gut consists of diverse friendly and unfriendly microbes, together known as the gut microbiome. Maintaining a balance between these two is crucial to maintain good gut health, and overall wellbeing.<br/> <br/>
                    However, not many of us know how we can influence our gut microbial diversity. So we designed Go-Go Biome, an open-ended digital game to engage people in real-world gut-friendly activities through play.<br/> <br/>
                    Go-Go Biome is part of a PhD research project that aims to understand the design of interactive experiences for gut health engagement.<br/>
                </p>
            </div>

            <div className="header">
                <h1> <b>2 What is the purpose of this research?</b></h1>
            </div>

            <div className="main-text-data">
                <p className="text-para1">
                This research aims to investigate user experience with the design features of the game, including the game mechanics, visual design, audio design, and feedback mechanisms. We will analyze the user experience of the game, focusing on aspects such as engagement, motivation, and reflection. We will also explore the ways in which players interact with the game features, such as the ways in which they use the game to explore and engage in the activities. Ultimately, the findings from this research will culminate into a set of design strategies for designing open-ended play experiences for real-world engagement with gut health.
                </p>
            </div>

            <div className="header">
                <h1> <b>3 What are the questions being addressed through this research?</b></h1>
            </div>

            <div className="main-text-data">
                <p className="text-para1">
                Some of the questions we seek to answer through this research are- How does unstructured play support players in gut health engagement?; What experiences does interaction with the game features enable?; What does interaction with the game tell participants about human-microbial interactions that they did not know before?; What are the key design considerations in building games for real world engagement with such topics? 
                </p>
            </div>

            <div className="header">
                <h1> <b>4 Research Team</b></h1>
            </div>

            <div className="main-text-data">
                <p className="text-para1">
                Go-Go Biome is a research prototype designed and developed by a team of students, early career researchers, and experts from diverse backgrounds including information technology, interaction design, sociology, nutrition and dietetics. Through expert guidance, this project was designed by a PhD student in RMIT University and developed in collaboration with three computer science students from BITS Pilani Goa, India. The game was iteratively designed using research through design (RtD) methodology over a duration of 8 months.  
                </p>
            </div>

            <div className="header">
                <h1> <b>5 Your participation and feedback</b></h1>
            </div>

            <div className="main-text-data">
                <p className="text-para1">
                The game will be tested through a field study which you are now a part of, and it will help us gather important information on your interaction with the game. Your feedback can lead to the generation of a set of design guidelines for designing open-ended play systems. The insights drawn from this research study can inform new ideas and design guidelines that may help future designers to design for open-ended play to engage adults in gut-friendly activities. We thank you for your participation, and your feedback is important and valuable to our research.   
                </p>
            </div>

            <div className="header">
                <h1> <b>Our Team:</b></h1>
            </div>

            <div className="main-text-data">
                <p className="text-para1">
                    <b>Game and UX Design:</b> Nandini Pasumarthy <br/> <br/>
                    <b>Game Development:</b> Back-end developer- Atharv Shimpi, Front-end developer- Pranjal Parashar and Shreyas Nisal<br/> <br/>
                    <b>Expert Guidance:</b>  Dr. Rohit Ashok Khot, Dr. Jessica Danaher and Prof. Elise van den Hoven<br/> <br/>
                    <b>University Affiliation:</b> RMIT University, Victoria, Australia  X BITS Pilani KK Birla, Goa, India <br/> <br/>
                </p>
            </div>
        </div>
    )
}

export default AboutResearch