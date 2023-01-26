import React, { useEffect } from "react"

import gameBG1 from "../../assets/images/bg/gameState0.png"
import gameBG2 from "../../assets/images/bg/gameState1.png"
import gameBG3 from "../../assets/images/bg/gameState2.png"
import gameBG4 from "../../assets/images/bg/gameState3.png"

import biomeImg1 from "../../assets/images/friendly.png"

import "./gameboard.css"

const Gameboard = () => {
    const biomeGarden = JSON.parse(localStorage.getItem("biome-garden"))
    const gameStats = JSON.parse(localStorage.getItem("gamestats"))

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

        const biomeImg = new Image()
        biomeImg.src = require(`../../assets/images/biome/${biomeGarden.active}.png`)

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
                this.width = 1000
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
        const layer2 = new Layer(backgroundLayer2, 1)
        const layer3 = new Layer(backgroundLayer3, 1)
        const layer4 = new Layer(backgroundLayer4, 1)

        const biome1 = new Player(CANVAS_WIDTH, CANVAS_HEIGHT)

        // change game background based on activity and inactivity
        const gameObject = [layer1, layer2, layer3, layer4]
        // else some error

        function animate() {
            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
            gameObject[gameStats.gameState].draw()
            // object.update()
            biome1.draw(ctx)
            requestAnimationFrame(animate)
        }

        animate()
    }, [])

    return <canvas id="game-board"></canvas>
}

export default Gameboard
