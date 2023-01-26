import React from "react"
import { useNavigate } from "react-router-dom"

import {
    Button,
    Checkbox,
    TextField,
    withStyles,
    FormControl,
    FormControlLabel,
    InputLabel,
    InputAdornment,
    Select,
    MenuItem,
    Box,
    CircularProgress,
} from "@material-ui/core"

import { IoIosArrowBack } from "react-icons/io"
import "./terms.css"
import select from "../../assets/sounds/UI/Proceed.mp3"

const Questionnaire = () => {
    const audio = new Audio(select)
    const navigate = useNavigate()

    const handleSubmit = () => {
        // setDefault()
        // localStorage.setItem("preferences", JSON.stringify(answers))
        // setLoading(true)

        navigate("/settings")
        // audio.play()
        // setTimeout(() => {
        //     setLoading(false)
        //     navigate("/settings")
        // }, 1000)
    }

    return (
        <div className="contain">
            <div className="header">
                <div className="icon-container">
                    <IoIosArrowBack
                        onClick={() => {
                            audio.play(), navigate("/settings")
                        }}
                        className="icon"
                    />
                </div>
                <h1>
                    <b>Questionnaire</b>
                </h1>
                {/* Hide this part to maintain center align */}
                <div style={{ opacity: 0 }} className="icon-container">
                    <IoIosArrowBack
                        onClick={() => {
                            audio.play(), navigate("/")
                        }}
                        className="icon"
                    />
                </div>
            </div>

            <div className="header-intro">
                <h1>
                    {" "}
                    <b>Awareness:</b>
                </h1>
            </div>

            <div className="main-text">
                <p className="text-para1">
                    <b>1:</b> Before playing Go-go Biome, I was aware of the
                    role of the gut microbiome for a healthy gut. (1 Strongly
                    disagree to 5 Strongly agree)
                    <br />
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio4"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio5"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>2:</b> Go-go Biome helped me understand the role of
                    various factors such as physical activity, diet,
                    environmental, social and zen activities on the diversity of
                    the gut microbiome. (1 Strongly disagree to 5 Strongly
                    agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions1"
                            id="inlineRadio6"
                            value="option6"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio6"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions1"
                            id="inlineRadio7"
                            value="option7"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio7"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions1"
                            id="inlineRadio8"
                            value="option8"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio8"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions1"
                            id="inlineRadio9"
                            value="option9"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio9"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions1"
                            id="inlineRadio10"
                            value="option10"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio10"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>3:</b> Eating a variety of coloured fresh food (i.e.
                    fruits and vegetables) can influence the growth of
                    beneficial microbes in the gut. (1 Strongly disagree to 5
                    Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions2"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions2"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions2"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions2"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions2"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>4:</b> It is important to engage in a range of activities
                    to maintain a healthy gut microbiome. (1 Strongly disagree
                    to 5 Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions3"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions3"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions3"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions3"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions3"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                </p>
            </div>

            <div className="header">
                <h1>
                    {" "}
                    <b>Game Mechanics:</b>
                </h1>
            </div>

            <div className="main-text-data">
                <p className="text-para1">
                    <b>1:</b> Logging my game activities through images, text
                    and audio helped me to slow down and pay attention to my
                    experience during the activity. (1 Strongly disagree to 5
                    Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions4"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions4"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions4"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions4"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions4"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>2:</b> I enjoyed revisiting and viewing the range of my
                    completed activities in the activity card stack. (1 Strongly
                    disagree to 5 Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions5"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions5"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions5"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions5"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions5"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>3:</b> I enjoyed unlocking the new friendly biome in the
                    biome garden. (1 Strongly disagree to 5 Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions6"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions6"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions6"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions6"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions6"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>4:</b> I enjoyed having the option of choosing from a
                    variety of activities in the game. (1 Strongly disagree to 5
                    Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions7"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions7"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions7"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions7"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions7"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>5:</b> I now understand that 85:15 is a representation of
                    an ideal balance between the friendly and unfriendly gut
                    biome population. (1 Strongly disagree to 5 Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions8"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions8"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions8"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions8"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions8"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>6:</b> The ideal game ratio of 85:15 served as a
                    reference for me to try to accomplish through my daily
                    activities. (1 Strongly disagree to 5 Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions9"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions9"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions9"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions9"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions9"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>7:</b> The biome energy status served as a reminder for
                    me to pay attention to the needs of the friendly gut biome.
                    (1 Strongly disagree to 5 Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions10"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions10"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions10"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions10"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions10"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                </p>
            </div>

            <div className="header">
                <h1>
                    {" "}
                    <b>Game Features:</b>
                </h1>
            </div>

            <div className="main-text-data">
                <p className="text-para1">
                    <b>1:</b> The biome energy status and its progression with
                    my activity were fun and engaging. (1 Strongly disagree to 5
                    Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions11"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions11"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions11"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions11"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions11"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>2:</b> I noticed an increase in the friendly biome
                    population and a decrease in the unfriendly biome population
                    after each activity. (1 Strongly disagree to 5 Strongly
                    agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions12"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions12"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions12"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions12"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions12"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>3:</b> The biome flashcards with questions helped me
                    realise what I already know and what I don’t yet know about
                    the gut microbiome. (1 Strongly disagree to 5 Strongly
                    agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions13"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions13"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions13"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions13"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions13"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>4:</b> The resetting of biome population on the
                    homescreen everyday reminds me that I need to work towards
                    increasing my friendly biome daily to maintain a
                    well-balanced gut. (1 Strongly disagree to 5 Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions14"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions14"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions14"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions14"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions14"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>5:</b> The game features encouraged me to think of my
                    everyday activities as influencers of my gut microbiome and
                    its balance. (1 Strongly disagree to 5 Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions15"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions15"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions15"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions15"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions15"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                </p>
            </div>

            <div className="header">
                <h1>
                    {" "}
                    <b>Visuals:</b>
                </h1>
            </div>

            <div className="main-text-data">
                <p className="text-para1">
                    <b>1:</b> The visual representation of the gut microbiome in
                    the form of friendly and unfriendly biome characters helped
                    me understand the importance of balancing the two. (1
                    Strongly disagree to 5 Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions16"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions16"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions16"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions16"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions16"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>2:</b> The visuals in the different activity decks
                    motivated me to explore new and diverse activities. (1
                    Strongly disagree to 5 Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions17"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions17"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions17"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions17"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions17"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>3:</b> I enjoyed moving my friendly biome on the game map
                    and slaying unfriendly biome as I progressed. (1 Strongly
                    disagree to 5 Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions18"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions18"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions18"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions18"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions18"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>4:</b> The visual interface of the app was appealing to
                    me. (For example, app styling, notifications, background,
                    game map, etc.) (1 Strongly disagree to 5 Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions19"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions19"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions19"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions19"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions19"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>5:</b> Revisiting my activity history helped me keep a
                    tab on the diversity of my activities and motivated me to
                    engage in these activities more frequently. (1 Strongly
                    disagree to 5 Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions20"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions20"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions20"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions20"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions20"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                </p>
            </div>

            <div className="header">
                <h1>
                    {" "}
                    <b>Game Concept:</b>
                </h1>
            </div>

            <div className="main-text-data">
                <p className="text-para1">
                    <b>1:</b> Go-Go Biome has helped me understand how my
                    everyday activities can influence the growth of beneficial
                    gut microbes. (1 Strongly disagree to 5 Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions21"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions21"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions21"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions21"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions21"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>2:</b> Go-Go Biome conveyed the importance of our
                    everyday habits on our gut health. (1 Strongly disagree to 5
                    Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions22"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions22"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions22"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions22"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions22"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>3:</b> Playing Go-go Biome has caused me to reflect on my
                    habits and activities, and consider how I could include more
                    biome friendly activities into my regular schedule. (1
                    Strongly disagree to 5 Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions23"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions23"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions23"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions23"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions23"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>4:</b> Go-Go Biome is a novel and playful way to
                    understand how external and internal factors influence our
                    experience of gut health. (1 Strongly disagree to 5 Strongly
                    agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions24"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions24"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions24"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions24"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions24"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>5:</b> Go-Go Biome has encouraged me to consider
                    exploring more diverse activities to increase the growth of
                    beneficial gut microbes. (1 Strongly disagree to 5 Strongly
                    agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions25"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions25"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions25"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions25"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOption25"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>6:</b> Go-Go Biome has encouraged me to engage with my
                    gut health by taking small but consistent action towards it.
                    (1 Strongly disagree to 5 Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions26"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions26"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions26"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions26"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions26"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>7:</b> The biome balance depicted by 85:15
                    (friendly:unfriendly biome) is representational of a
                    well-balanced gut. (1 Strongly disagree to 5 Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions27"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions27"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions27"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions27"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions27"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>8:</b> Go-Go Biome helped me understand that a healthy
                    gut is not a destination, but a lifelong process that needs
                    small and consistent actions to be taken regularly. (1
                    Strongly disagree to 5 Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions28"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions28"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions28"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions28"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions28"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                </p>
            </div>

            <div className="header">
                <h1>
                    {" "}
                    <b>User experience:</b>
                </h1>
            </div>

            <div className="main-text-data">
                <p className="text-para1">
                    <b>1:</b> The application and the game interface were easy
                    and enjoyable to use and explore. (1 Strongly disagree to 5
                    Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions29"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions29"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions29"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions29"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions29"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>2:</b> I found it easy to navigate through the app. (1
                    Strongly disagree to 5 Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions30"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions30"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions30"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions30"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions30"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>3:</b> I found it easy to document my activities and
                    create my card stack. (1 Strongly disagree to 5 Strongly
                    agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions31"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions31"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions31"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions31"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions31"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                    <b>4:</b> I understood what I needed to do to play the game.
                    (1 Strongly disagree to 5 Strongly agree)
                    <div className="form-check form-check-inline">
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions32"
                            id="inlineRadio1"
                            value="option1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                        >
                            {" "}
                            1
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions32"
                            id="inlineRadio2"
                            value="option2"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                        >
                            {" "}
                            2
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions32"
                            id="inlineRadio1"
                            value="option3"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                        >
                            {" "}
                            3
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions32"
                            id="inlineRadio2"
                            value="option4"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                        >
                            {" "}
                            4
                        </label>
                        &emsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions32"
                            id="inlineRadio2"
                            value="option5"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                        >
                            {" "}
                            5
                        </label>
                    </div>
                </p>
            </div>
            <button
                style={{
                    backgroundColor: "#f3bc78",
                    marginBottom: 0,
                }}
                className="questions-btn"
                onClick={() => {
                    audio.play()
                    navigate("/settings")
                }}
            >
                Submit
            </button>
        </div>
    )
}

export default Questionnaire
