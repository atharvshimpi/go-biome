import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, EffectFade } from "swiper"

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
            pagination={{ clickable: true }}
            className="mySwiper"
        >
            <SwiperSlide className="rectangle">
                <div className="rectangle1">
                    <div className="circle">
                        <div className="image">
                            <img src="images/pet.png" style={{ width: "115%"}} />
                        </div>
                    </div>
                    <p style={{ color:"rgba(15, 13, 13, 0.66)"}} id="header">
                        Cuddle with your pet/s
                    </p>
                </div>
                <div className="button">Start now</div>
                <div className="button1">Later</div>
            </SwiperSlide>
        </Swiper>
    )
}

export default ActivityCarousal
