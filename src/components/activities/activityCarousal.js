import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper"

import Friendly from "../../assets/images/friendly.png"

import "./activityCarousal.css"
import "swiper/css"
import "swiper/css/effect-cards"

const ActivityCarousal = () => {
    return (
        <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            slidesPerView={1}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="card-container">
                    <div className="card-content">
                        <div className="circle">
                            <div className="image">
                                <img src={Friendly} alt={Friendly.split("/")[3].split(".")[0]} />
                            </div>
                        </div>
                        <p className="header">
                            Hello
                        </p>
                        <div className="btngrp">
                            <button className="btn">Start now</button>
                            <button className="btn">Later</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card-container">
                    <div className="card-content">
                        <div className="circle">
                            <div className="image">
                                <img src={Friendly} alt={Friendly.split("/")[3].split(".")[0]} />
                            </div>
                        </div>
                        <p className="header">
                            Cuddle with your pet/s
                        </p>
                        <div className="btngrp">
                            <button className="btn">Start now</button>
                            <button className="btn">Later</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default ActivityCarousal
