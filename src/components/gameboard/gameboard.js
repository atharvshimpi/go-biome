import React from "react"

import gboard1 from "../../assets/images/gboard1.png"
import "./gameboard.css"

const Gameboard = () => {
    return (
        <>
            <div className="gameboard-container">
                <div className="gboard-img-container">
                    <img className="gboard-img" src={gboard1} alt="gboard1" />
                </div>
            </div>
            <div className="biome-character"></div>
        </>
    )
}

export default Gameboard