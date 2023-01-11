import React from 'react'
import { useNavigate } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"

import './gameInformation.css'
import bugsy_population from '../../../assets/images/gameInformation/bugsy_population.png'
import minion_population from '../../../assets/images/gameInformation/minion_population.png'

import needs_attention_img from '../../../assets/images/gameInformation/needs_attention.png'
import low_energy_img from '../../../assets/images/gameInformation/low_energy.png'
import charging_img from '../../../assets/images/gameInformation/charging.png'
import partial_strength_img from '../../../assets/images/gameInformation/partial_strength.png'
import full_strength_img from '../../../assets/images/gameInformation/full_strength.png'
import biome_diversity_img from '../../../assets/images/gameInformation/biome_diversity.png'
import super_diversity_img from '../../../assets/images/gameInformation/super_diversity.png'

import environment_activity_icon from '../../../assets/images/gameInformation/environment.png'
import physical_activity_icon from '../../../assets/images/gameInformation/physical.png'
import social_activity_icon from '../../../assets/images/gameInformation/social.png'
import zen_activity_icon from '../../../assets/images/gameInformation/zen.png'

import liked_cards_icon from '../../../assets/images/gameInformation/liked_cards.svg'
import shuffle_icon from '../../../assets/images/gameInformation/shuffle.png'
import game_board_icon from '../../../assets/images/gameInformation/game_board.svg'
import biome_garden_icon from '../../../assets/images/gameInformation/biome_garden.png'

export default function gameInformation() {

    const navigate = useNavigate()

    return(
        <div className="gameInformation-container">
            <div className="gameInformation-backButton-container">
                    <IoIosArrowBack
                        onClick={() =>{
                            navigate("/")
                        }}
                        className="icon"
                    />
            </div>
            <div className="gameInformation-header">
                <h1>Game Information</h1>
            </div>
            <div className="gameInformation-section-header">
                <h3>Biome Population</h3>
            </div>
            <div className="gameInformation-section-row">
                <div className="gameInformation-section-col col-center">
                    <img src={bugsy_population} width="185px" />
                    <p style={{marginRight: "0px"}}>The friendly biome population</p>
                </div>
                <div className="gameInformation-section-col col-center">
                    <img src={minion_population} width="160px" />
                    <p style={{marginRight: "0px"}}>The unfriendly biome population</p>
                </div>
            </div>
            <div className="gameInformation-section-header">
                <h3>Friendly Biome Energy Status</h3>
            </div>
            <div className="gameInformation-section-row">
                <img src={needs_attention_img} width="120px" />
                <div className="gameInformation-section-col" style={{width: "80%"}}>
                    <p><strong>Needs Attention</strong></p>
                    <p>Appears when the biome needs attention. Engage in an activity to increase biome energy level</p>
                </div>
            </div>
            <div className="gameInformation-section-row">
                <img src={low_energy_img} width="120px" />
                <div className="gameInformation-section-col" style={{width: "80%"}}>
                    <p><strong>Low Energy</strong></p>
                    <p>Indicates low energy level</p>
                </div>
            </div>
            <div className="gameInformation-section-row">
                <img src={charging_img} width="120px" />
                <div className="gameInformation-section-col" style={{width: "80%"}}>
                    <p><strong>Charging</strong></p>
                    <p>Appears when an activity is in progress to indicate that the biome energy is getting charged</p>
                </div>
            </div>
            <div className="gameInformation-section-row">
                <img src={partial_strength_img} width="120px" />
                <div className="gameInformation-section-col" style={{width: "80%"}}>
                    <p><strong>Partial Strength</strong></p>
                    <p>Indicates partial energy in the friendly biome</p>
                </div>
            </div>
            <div className="gameInformation-section-row">
                <img src={full_strength_img} width="120px" />
                <div className="gameInformation-section-col" style={{width: "80%"}}>
                    <p><strong>Full Strength</strong></p>
                    <p>Indicates full energy in the friendly biome</p>
                </div>
            </div>
            <div className="gameInformation-section-row">
                <img src={biome_diversity_img} width="120px" />
                <div className="gameInformation-section-col" style={{width: "80%"}}>
                    <p><strong>Biome Diversity</strong></p>
                    <p>Indicates full energy and diversity in the friendly biome population</p>
                </div>
            </div>
            <div className="gameInformation-section-row">
                <img src={super_diversity_img} width="120px" />
                <div className="gameInformation-section-col" style={{width: "80%"}}>
                    <p><strong>Super Diversity</strong></p>
                    <p>Indicates full energy and greater diversity in the friendly biome population</p>
                </div>
            </div>
            <div className="gameInformation-section-header">
                <h3>Activity Card Decks</h3>
            </div>
            <div className="gameInformation-section-row">
                <div className="gameInformation-section-col col-center">
                    <img src={environment_activity_icon} width="120px" />
                    <p style={{marginRight: '0px', marginTop: '-20px'}}><strong>Go Green</strong></p>
                </div>
                <div className="gameInformation-section-col col-center">
                    <img src={physical_activity_icon} width="120px" />
                    <p style={{marginRight: '0px', marginTop: '-20px'}}><strong>Get Active</strong></p>
                </div>
                <div className="gameInformation-section-col col-center">
                    <img src={social_activity_icon} width="120px" />
                    <p style={{marginRight: '0px', marginTop: '-20px'}}><strong>Get Social</strong></p>
                </div>
                <div className="gameInformation-section-col col-center">
                    <img src={zen_activity_icon} width="120px" />
                    <p style={{marginRight: '0px', marginTop: '-20px'}}><strong>Go Zen</strong></p>
                </div>
            </div>
            <div className="gameInformation-section-row row-center">
                <p style={{marginLeft: '20px', marginTop: '20px', textAlign: 'center'}}>Engage in an activity of your choice. Try to engage in activities from two or more decks each day to help Bugsy gain more friends to protect the trail.</p>
            </div>
            <div className="gameInformation-section-header">
                <h3>Secondary Features</h3>
            </div>
            <div className="gameInformation-section-row row-baseline" style={{flexWrap: 'wrap', marginTop: '20px', marginBottom: '50px'}}>
                <div className="gameInformation-section-col col-center" style={{width: '30%'}}>
                    <div className="secondary-features-image-container">
                        <img src={liked_cards_icon} />
                    </div>
                    <p style={{marginRight: '0px'}}><strong>Liked Cards</strong></p>
                    <p style={{marginRight: '0px', width: '60%', textAlign: 'center'}}>Find your liked cards here</p>
                </div>
                <div className="gameInformation-section-col col-center" style={{width: '30%'}}>
                    <div className="secondary-features-image-container">
                        <img src={shuffle_icon} />
                    </div>
                    <p style={{marginRight: '0px'}}><strong>Shuffle</strong></p>
                    <p style={{marginRight: '0px', width: '60%', textAlign: 'center'}}>Generates a random activity card for you</p>
                </div>
                <div className="gameInformation-section-col col-center" style={{width: '30%'}}>
                    <div className="secondary-features-image-container">
                        <img src={game_board_icon} />
                    </div>
                    <p style={{marginRight: '0px'}}><strong>Game Board</strong></p>
                    <p style={{marginRight: '0px', width: '60%', textAlign: 'center'}}>Watch your friendly biome as it moves ahead on the trail.</p>
                </div>
                <div className="gameInformation-section-col col-center" style={{width: '30%', marginTop: '20px'}}>
                    <div className="secondary-features-image-container">
                        <img src={biome_garden_icon} />
                    </div>
                    <p style={{marginRight: '0px'}}><strong>Biome Garden</strong></p>
                    <p style={{marginRight: '0px', width: '60%', textAlign: 'center'}}>Access your new friendly biome in the biome garden</p>
                </div>
            </div>
        </div>
    )
}