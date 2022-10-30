import React, { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

import BluePrint from "./blueprint"
import { IoIosArrowBack } from "react-icons/io"

import biome from "../../assets/images/gamemap/biome.png"
import dashed from "../../assets/images/gamemap/dashed/dashed.png"
import dashedLeftDown from "../../assets/images/gamemap/dashed/dashedLeftDown.png"
import dashedLeftUp from "../../assets/images/gamemap/dashed/dashedLeftUp.png"
import dashedRightDown from "../../assets/images/gamemap/dashed/dashedRightDown.png"
import dashedRightUp from "../../assets/images/gamemap/dashed/dashedRightUp.png"
import minion from "../../assets/images/gamemap/minion1.png"
import minionRoad1 from "../../assets/images/gamemap/minion_road.png"
import minionRoad2 from "../../assets/images/gamemap/minion_road2.png"
import minionRoad3 from "../../assets/images/gamemap/minion_road3.png"

import "./gamemap_v2.css"

const GameMap_v2 = () => {
	const [board, setBoard] = useState([
										[8, 8, 8, 8, 8, 6],
										[1, 0, 0, 10, 0, 2],
										[4, 11, 0, 12, 0, 3],
										[1, 0, 10, 0, 10, 2],
										[4, 12, 0, 11, 0, 3],
										[1, 0, 0, 0, 12, 2],
										[4, 0, 11, 0, 0, 3],
										[1, 0, 0, 10, 0, 2],
										[8, 8, 8, 8, 8, 8]
	])
	const navigate = useNavigate()

	const [biomePosition, setBiomePosition] = useState([8, 0])

	const navigateToSocialMap = () => {
		navigate("/socialmap")
	}

	const isMinionCrossed = (tileIndex) => {

        if (tileIndex[0] > biomePosition[0]) {
            return true
        }

        if (biomePosition[0] > tileIndex[0]) {
            return false
        }

        if (biomePosition[0] % 2 === 0) {
            return tileIndex[1] > biomePosition[1]
        }
        
        return tileIndex[1] < biomePosition[1]
    }

	const incrementBiomePosition = () => {
		if (biomePosition[0] === 0 && biomePosition[1] === 5) {
			return
		}
		if (biomePosition[0] % 2 === 0) {
			if (biomePosition[1] === 0) {
				//move up
				setBiomePosition([biomePosition[0] - 1, biomePosition[1]])
			}
			else {
				//move left
				setBiomePosition([biomePosition[0], biomePosition[1] - 1])
			}
		}
		else {
			if (biomePosition[1] === 5) {
				//move up
				setBiomePosition([biomePosition[0] - 1, biomePosition[1]])
			}
			else {
				//move right
				setBiomePosition([biomePosition[0], biomePosition[1] + 1])
			}
		}
	}

	const getTile = (val, row, col) => {
		if (row === biomePosition[0] && col === biomePosition[1]) {
			return <img src={biome} width="64px" height="64px" />
		}
		if (val === 0) {
			return <img src={dashed} width="64px" height="64px" />
		}
		if (val === 1) {
			return <img src={dashedLeftDown} width="64px" height="64px" />
		}
		if (val === 2) {
			return <img src={dashedRightUp} width="64px" height="64px" />
		}
		if (val === 3) {
			return <img src={dashedRightDown} width="64px" height="64px" />
		}
		if (val === 4) {
			return <img src={dashedLeftUp} width="64px" height="64px" />
		}
		if (val === 5) {
			return <img src={biome} width="64px" height="64px" />
		}
		if (val === 6) {
			return <img src={minion} width="64px" height="64px" className="right_aligned" />
		}
		if (val === 10) {
			if (!isMinionCrossed([row, col])) {
				return <img src={minionRoad1} width="64px" height="64px" />
			}
			else {
				return <img src={dashed} width="64px" height="64px" />
			}
		}
		if (val === 11) {
			if (!isMinionCrossed([row, col])) {
				return <img src={minionRoad2} width="64px" height="64px" />
			}
			else {
				return <img src={dashed} width="64px" height="64px" />
			}
		}
		if (val === 12) {
			if (!isMinionCrossed([row, col])) {
				return <img src={minionRoad3} width="64px" height="64px" />
			}
			else {
				return <img src={dashed} width="64px" height="64px" />
			}
		}

		return null
	}

	return(
		<div className="gamemap_container">
			<div className="socialmap_button">
				<button onClick={navigateToSocialMap}>Social Map</button>
			</div>
			{board.map((row, rowIdx) => {
				return <div key={rowIdx} className={"row" + (rowIdx === 0 ? " right" : "")}>
					{row.map((val, index) => {
						return getTile(val, rowIdx, index)
					})}
				</div>
			})}
			<button onClick={incrementBiomePosition}>Move</button>
		</div>
	)
}

export default GameMap_v2