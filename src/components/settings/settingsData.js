import React from "react"

import {
    BsStack,
    BsFillShareFill,
    BsFillVolumeUpFill,
    BsPhoneVibrateFill,
    BsFillMoonFill,
    BsFillImageFill
} from "react-icons/bs"
import {
    FaUserAlt,
    FaBookOpen,
    FaInfo,
    FaSun,
    FaBacterium,
    FaVirus,
    FaBook,
} from "react-icons/fa"
import {
    GiPlantsAndAnimals,
    GiForkKnifeSpoon,
    GiSunPriest,
} from "react-icons/gi"
import { MdHistory, MdBackup } from "react-icons/md"
import { FiLogOut } from "react-icons/fi"

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
        icon: <GiPlantsAndAnimals />,
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
        title: "Haptic Vibration",
        icon: <BsPhoneVibrateFill />,
    },
    {
        id: 8,
        title: "Tutorial",
        icon: <FaBookOpen />,
    },
    {
        id: 9,
        title: "Information",
        icon: <FaInfo />,
    },
    {
        id: 10,
        title: "Waking Hours",
        icon: <FaSun />,
    },
    {
        id: 11,
        title: "Sleeping Hours",
        icon: <BsFillMoonFill />,
    },
    {
        id: 12,
        title: "Morning Check-in Hours",
        icon: <GiSunPriest />,
    },
    {
        id: 13,
        title: "Meal Time",
        icon: <GiForkKnifeSpoon />,
    },
    {
        id: 14,
        title: "Set friendly Biome Name",
        icon: <FaBacterium />,
    },
    {
        id: 15,
        title: "Set unfriendly Biome Name",
        icon: <FaVirus />,
    },
    {
        id: 16,
        title: "Terms and Conditions",
        icon: <FaBook />,
    }
]
