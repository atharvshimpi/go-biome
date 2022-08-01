import React from "react"

import { BsStack, BsFillShareFill, BsFillVolumeUpFill, BsPhoneVibrateFill, BsFillMoonFill, BsListCheck } from "react-icons/bs"
import { FaUserAlt, FaBookOpen, FaInfo, FaSun, FaBacterium, FaVirus } from "react-icons/fa"
import { GiPlantsAndAnimals, GiForkKnifeSpoon, GiSunPriest } from "react-icons/gi"
import { MdHistory, MdBackup } from "react-icons/md"

export const settingDetails = [
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
        title: "Sound",
        icon: <BsFillVolumeUpFill />,
    },
    {
        id: 6,
        title: "Haptic Vibration",
        icon: <BsPhoneVibrateFill />,
    },
    {
        id: 7,
        title: "Tutorial",
        icon: <FaBookOpen />,
    },
    {
        id: 8,
        title: "Information",
        icon: <FaInfo />,
    },
    {
        id: 9,
        title: "Waking Hours",
        icon: <FaSun />,
    },
    {
        id: 10,
        title: "Sleeping Hours",
        icon: <BsFillMoonFill />,
    },
    {
        id: 11,
        title: "Morning Check-in Hours",
        icon: <GiSunPriest />,
    },
    {
        id: 12,
        title: "Meal Time",
        icon: <GiForkKnifeSpoon />,
    },
    {
        id: 13,
        title: "Set friendly Biome Name",
        icon: <FaBacterium />,
    },
    {
        id: 14,
        title: "Set unfriendly Biome Name",
        icon: <FaVirus />,
    },
    {
        id: 15,
        title: "Set Activity Count",
        icon: <BsListCheck />,
    },
    {
        id: 16,
        title: `Save Progress & feedback`,
        icon: <MdBackup />,
    },
    {
        id: 17,
        title: "Share with friends",
        icon: <BsFillShareFill />,
    },
]