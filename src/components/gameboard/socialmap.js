import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

import BluePrint from "./blueprint"
import { IoIosArrowBack } from "react-icons/io"

import biome from "../../assets/images/gamemap/biome.png"
import dashed from "../../assets/images/gamemap/dashed/dashed.png"
import dashedLeftDown from "../../assets/images/gamemap/dashed/dashedLeftDown.png"
import dashedLeftUp from "../../assets/images/gamemap/dashed/dashedLeftUp.png"
import dashedRightDown from "../../assets/images/gamemap/dashed/dashedRightDown.png"
import dashedRightUp from "../../assets/images/gamemap/dashed/dashedRightUp.png"
import minion from "../../assets/images/gamemap/minion.png"

import select from "../../assets/sounds/UI/Game_map.mp3"

import { firestore } from "../../firebase"
import { collection, getDocs } from "firebase/firestore"

import "./socialmap.css"

const SocialMap = () => {
    const pref = JSON.parse(localStorage.getItem("preferences"))
    const [soundEnabled, setSoundEnabled] = useState(pref.sound)
    const audio = new Audio(select)
    const navigate = useNavigate()

    const [board, setBoard] = useState([
        [8, 8, 8, 8, 8, 6],
        [1, 0, 0, 0, 0, 2],
        [4, 0, 0, 0, 0, 3],
        [1, 0, 0, 0, 0, 2],
        [4, 0, 0, 0, 0, 3],
        [1, 0, 0, 0, 0, 2],
        [4, 0, 0, 0, 0, 3],
        [1, 0, 0, 0, 0, 2],
        [8, 8, 8, 8, 8, 8]
    ])

    // const [biomePosition, setBiomePosition] = useState([8, 0])
    const [socialBiomePoints, setSocialBiomePoints] = useState({})
    const [socialBiomePositions, setSocialBiomePositions] = useState({})

    useEffect(() => {

        const getFirestoreData = async () => {
            const firestoreData = await getDocs(collection(firestore, "users"))

            const biomePositions = {}

            firestoreData.forEach(doc => {
                biomePositions[doc.data().details.username] = doc.data().stats.friendlyBiomePoints
            })

            setSocialBiomePoints(biomePositions)
        }

        getFirestoreData()
    }, [])

    useEffect(() => {
        const biomePositions = {}
        for (let username in socialBiomePoints) {
            const stepsForward = (socialBiomePoints[username] - 15) / 5
            biomePositions[username] = getBiomePosition(stepsForward)
        }

        setSocialBiomePositions(biomePositions)
    }, [socialBiomePoints])

    const getBiomePosition = (steps) => {
        const biomePosition = [8, 0]
        while (steps--) {
            if (biomePosition[0] === 0 && biomePosition[1] === 5) {
                return
            }
            if (biomePosition[0] % 2 === 0) {
                if (biomePosition[1] === 0) {
                    //move up
                    biomePosition[0]--
                }
                else {
                    //move left
                    biomePosition[1]--
                }
            }
            else {
                if (biomePosition[1] === 5) {
                    //move up
                    biomePosition[0]--
                }
                else {
                    //move right
                    biomePosition[1]++
                }
            }
        }

        return biomePosition
    }

    const usersOnTile = (row, col) => {
        const users = []
        for (let socialBiome in socialBiomePositions) {
            if (socialBiomePositions[socialBiome][0] === row && socialBiomePositions[socialBiome][1] === col) {
                users.push(socialBiome)
            }
        }

        if (users.length > 0) {
            return users
        }

        return null
    }

    const getTile = (val, row, col) => {
        const usernames = usersOnTile(row, col)
        if (usernames) {
            return <div key={row*8 + col} className="social_biome_img">
                <div style={{position: "relative", top: 0, right: "-50px"}}>
                    {usernames.map((username, index) => {
                        return <p key={index} className="social_username" style={{fontSize: "8px"}}>{username}</p>
                    })}
                </div>
                <img src={biome} width="64px" height="64px" />
            </div>
        }
        if (val === 0) {
            return <img key={row*8 + col} src={dashed} width="64px" height="64px" />
        }
        if (val === 1) {
            return <img key={row*8 + col} src={dashedLeftDown} width="64px" height="64px" />
        }
        if (val === 2) {
            return <img key={row*8 + col} src={dashedRightUp} width="64px" height="64px" />
        }
        if (val === 3) {
            return <img key={row*8 + col} src={dashedRightDown} width="64px" height="64px" />
        }
        if (val === 4) {
            return <img key={row*8 + col} src={dashedLeftUp} width="64px" height="64px" />
        }
        if (val === 5) {
            return <img key={row*8 + col} src={biome} width="64px" height="64px" />
        }
        if (val === 6) {
            return <img key={row*8 + col} src={minion} width="64px" height="64px" className="right_aligned" />
        }

        return null
    }

    let k = 1

    return(
        <div className="gamemap_container">
            <div className="socialmap_button">
                <button onClick={() =>{ 
                    if(soundEnabled){audio.play()}
                    navigate("/map")
                }}>Personal Map</button>
            </div>
            {board.map((row, rowIdx) => {
                return <div key={k++} className={"row" + (rowIdx === 0 ? " right" : "")}>
                    {row.map((val, index) => {
                        return getTile(val, rowIdx, index)
                    })}
                </div>
            })}
        </div>
    )
}

export default SocialMap