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
import minion from "../../assets/images/gamemap/minion1.png"
import minionRoad1 from "../../assets/images/gamemap/minion_road.png"
import minionRoad2 from "../../assets/images/gamemap/minion_road2.png"
import minionRoad3 from "../../assets/images/gamemap/minion_road3.png"

import "./socialmap.css"

const SocialMap = () => {
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

	const [biomePosition, setBiomePosition] = useState([8, 0])

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

		return null
	}

	return(
		<div className="gamemap_container">
			{board.map((row, rowIdx) => {
				return <div key={rowIdx} className={"row" + (rowIdx === 0 ? " right" : "")}>
					{row.map((val, index) => {
						return getTile(val, rowIdx, index)
					})}
				</div>
			})}
		</div>
	)
}

export default SocialMap