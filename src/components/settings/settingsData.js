import React from "react"

import {
    BsStack,
    BsFillShareFill,
    BsFillVolumeUpFill,
    BsPhoneVibrateFill,
    BsFillMoonFill,
    BsFillImageFill,
    BsFillCloudArrowUpFill
} from "react-icons/bs"
import {
    FaUserAlt,
    FaBookOpen,
    FaInfo,
    FaSun,
    FaBacterium,
    FaVirus,
    FaBook,
    FaResearchgate,
    FaGamepad,
} from "react-icons/fa"
import {
    GiPlantsAndAnimals,
    GiForkKnifeSpoon,
    GiSunPriest,
} from "react-icons/gi"
import { MdHistory, MdBackup } from "react-icons/md"
import { FiLogOut } from "react-icons/fi"
import { 
    AiOutlineQuestionCircle,
    AiOutlineTeam,
    AiOutlineCopyrightCircle
} from "react-icons/ai"

export const settingDetails = [
    {
        id: 0,
        title: "Profile Picture",
        icon: <BsFillImageFill />,
    },
    {
        id: 1,
        title: "Change Username",
        icon: <FaUserAlt />,
    },
    {
        id: 2,
        title: "Activity Card Stack",
        icon: <BsStack />,
    },
    {
        id: 3,
        title: "Activity History",
        icon: <MdHistory />,
    },
    {
        id: 4,
        title: "Biome Garden",
        icon: <img
            src={require(`../../assets/images/biomeGarden.png`)}
            style={{ width: "16px" }}
        />,
    },
    {
        id: 5,
        title: "Logout",
        icon: <FiLogOut />,
    },
    {
        id: 6,
        title: "Sound",
        icon: <BsFillVolumeUpFill />,
    },
    {
        id: 7,
        title: "Backup Data",
        icon: <BsFillCloudArrowUpFill />,
    },
    // {
    //     id: 7,
    //     title: "Haptic Vibration",
    //     icon: <BsPhoneVibrateFill />,
    // },
    // {
    //     id: 7,
    //     title: "Tutorial",
    //     icon: <FaBookOpen />,
    // },
    // {
    //     id: 8,
    //     title: "Information",
    //     icon: <FaInfo />,
    // },
    {
        id: 8,
        title: "Waking Hours",
        icon: <FaSun />,
    },
    {
        id: 9,
        title: "Sleeping Hours",
        icon: <BsFillMoonFill />,
    },
    // {
    //     id: 9,
    //     title: "Morning Check-in Hours",
    //     icon: <GiSunPriest />,
    // },
    // {
    //     id: 10,
    //     title: "Meal Time",
    //     icon: <GiForkKnifeSpoon />,
    // },
    {
        id: 10,
        title: "Set friendly Biome Name",
        icon: <FaBacterium />,
    },
    // {
    //     id: 14,
    //     title: "Set unfriendly Biome Name",
    //     icon: <FaVirus />,
    // },
    {
        id: 11,
        title: "Terms and Conditions",
        icon: <FaBook />,
    },
    {
        id: 12,
        title: "About this research",
        icon: <FaResearchgate />,
    },
    {
        id: 13,
        title: "Questionnaire",
        icon: <AiOutlineQuestionCircle/>,
    },
    // {
    //     id: 18,
    //     title: "Your Participation and Consent",
    //     icon: <AiOutlineTeam/>,
    // },
    {
        id: 14,
        title: "Creative Commons Attribution",
        icon: <AiOutlineCopyrightCircle/>,
    },
    {
        id: 15,
        title: "Game Information",
        icon: <FaGamepad />,
    },
]
