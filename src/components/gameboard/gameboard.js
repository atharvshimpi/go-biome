import React, { useEffect } from "react"

import gameBG1 from "../../assets/images/bg/Layer_1.png"
import gameBG2 from "../../assets/images/bg/Layer_2.png"
import gameBG3 from "../../assets/images/bg/Layer_3.png"
import gameBG4 from "../../assets/images/bg/Layer_5.png"
import gameBG5 from "../../assets/images/bg/Layer_6.png"
import gameBG6 from "../../assets/images/bg/Layer_7.png"

import biomeImg1 from "../../assets/images/friendly.png"

import "./gameboard.css"

const Gameboard = () => {
    useEffect(() => {
        const canvas = document.getElementById("game-board")
        const ctx = canvas.getContext("2d")
        const CANVAS_WIDTH = (canvas.width = 1000)
        const CANVAS_HEIGHT = (canvas.height = window.outerHeight)

        let gameSpeed = 5

        const backgroundLayer1 = new Image()
        backgroundLayer1.src = gameBG1
        const backgroundLayer2 = new Image()
        backgroundLayer2.src = gameBG2
        const backgroundLayer3 = new Image()
        backgroundLayer3.src = gameBG3
        const backgroundLayer4 = new Image()
        backgroundLayer4.src = gameBG4
        const backgroundLayer5 = new Image()
        backgroundLayer5.src = gameBG5
        const backgroundLayer6 = new Image()
        backgroundLayer6.src = gameBG6

        const biomeImg = new Image()
        biomeImg.src = biomeImg1

        class Player {
            constructor(gameWidth, gameHeight) {
                this.gameWidth = gameWidth
                this.gameHeight = gameHeight
                this.width = 200
                this.height = 150
                this.x = -40
                this.y = this.gameHeight - this.height - 280
                this.image = biomeImg
            }

            draw(context) {
                context.fillStyle = "transparent"
                context.globalAlpha = 1
                context.fillRect(this.x, this.y, this.width, this.height)
                context.drawImage(
                    this.image,
                    this.x,
                    this.y,
                    this.width,
                    this.height
                )
            }

            updateX() {
                this.x = -20
            }
        }

        class Layer {
            constructor(image, speedModifier) {
                this.x = 0
                this.y = 0
                this.width = 3420
                this.height = window.outerHeight
                this.image = image
                this.speedModifier = speedModifier
                this.speed = gameSpeed * this.speedModifier
            }

            update() {
                this.speed = gameSpeed * this.speedModifier
                if (this.x <= -this.width) {
                    this.x = 0
                }
                this.x = Math.floor(this.x - this.speed)
            }

            draw() {
                ctx.globalAlpha = 1
                ctx.drawImage(
                    this.image,
                    this.x,
                    this.y,
                    this.width,
                    this.height
                )
                ctx.drawImage(
                    this.image,
                    this.x + this.width,
                    this.y,
                    this.width,
                    this.height
                )
            }
        }

        const layer1 = new Layer(backgroundLayer1, 1)
        const layer2 = new Layer(backgroundLayer2, 0.8)
        const layer3 = new Layer(backgroundLayer3, 0.6)
        const layer4 = new Layer(backgroundLayer4, 0.4)
        const layer5 = new Layer(backgroundLayer5, 0.6)
        const layer6 = new Layer(backgroundLayer6, 0.2)

        const biome1 = new Player(CANVAS_WIDTH, CANVAS_HEIGHT)

        const gameObjects = [layer6, layer4, layer3, layer5, layer2, layer1]

        function animate() {
            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
            gameObjects.forEach((object) => {
                object.draw()
                // object.update()
            })
            biome1.draw(ctx)
            requestAnimationFrame(animate)
        }

        animate()
    }, [])

    return <canvas id="game-board"></canvas>
}

export default Gameboard
