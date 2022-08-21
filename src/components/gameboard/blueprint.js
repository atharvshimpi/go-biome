import { useState } from "react"

import biome from "../../assets/images/gamemap/biome.png"
import minion from "../../assets/images/gamemap/minion.png"
import plus from "../../assets/images/gamemap/plus.png"

// dashed
import dashed from "../../assets/images/gamemap/dashed/dashed.png"
import dashedLeftDown from "../../assets/images/gamemap/dashed/dashedLeftDown.png"
import dashedLeftUp from "../../assets/images/gamemap/dashed/dashedLeftUp.png"
import dashedRightDown from "../../assets/images/gamemap/dashed/dashedRightDown.png"
import dashedRightUp from "../../assets/images/gamemap/dashed/dashedRightUp.png"

// zen
import zenLeftDown from "../../assets/images/gamemap/zen/zenLeftDown.png"

export default class BluePrint {
    constructor(tileSize) {
        this.tileSize = tileSize
        this.gameStats = JSON.parse(localStorage.getItem("gamestats"))

        this.minion = new Image()
        this.minion.src = minion

        this.dashed = new Image()
        this.dashed.src = dashed

        this.dashedLeftDown = new Image()
        this.dashedLeftDown.src = dashedLeftDown

        this.dashedLeftUp = new Image()
        this.dashedLeftUp.src = dashedLeftUp

        this.dashedRightDown = new Image()
        this.dashedRightDown.src = dashedRightDown

        this.dashedRightUp = new Image()
        this.dashedRightUp.src = dashedRightUp

        this.plus = new Image()
        this.plus.src = plus
    }

    /*
        Convention :-
        0 - dashed/category
        1 - dashed/category LeftDown
        2 - dashed/category RightUp
        3 - dashed/category RightDown
        4 - dashed/category LeftUp
        5 - biome
        6 - minion
        7 - plus
        8 - backgroundColor
    */

    map = [
        [8, 8, 8, 8, 8, 6],
        [1, 0, 7, 0, 7, 2],
        [4, 7, 0, 7, 0, 3],
        [1, 0, 7, 0, 7, 2],
        [4, 7, 0, 7, 0, 3],
        [1, 0, 7, 0, 7, 2],
        [4, 7, 0, 7, 0, 3],
        [1, 0, 7, 0, 7, 2],
        [5, 8, 8, 8, 8, 8],
    ]

    rects = [
        { x: 2, y: 1 },
        { x: 4, y: 1 },
        { x: 1, y: 2 },
        { x: 3, y: 2 },
        { x: 2, y: 3 },
        { x: 4, y: 3 },
        { x: 1, y: 4 },
        { x: 3, y: 4 },
        { x: 2, y: 5 },
        { x: 4, y: 5 },
        { x: 1, y: 6 },
        { x: 3, y: 6 },
        { x: 2, y: 7 },
        { x: 4, y: 7 },
    ]

    draw(ctx) {
        for (let row = 0; row < this.map.length; row++) {
            for (let col = 0; col < this.map[row].length; col++) {
                let tile = this.map[row][col]
                if (tile === 1)
                    this.#drawImg(
                        this.dashedLeftDown,
                        ctx,
                        col,
                        row,
                        this.tileSize
                    )
                else if (tile === 0)
                    this.#drawImg(this.dashed, ctx, col, row, this.tileSize)
                else if (tile === 2)
                    this.#drawImg(
                        this.dashedRightUp,
                        ctx,
                        col,
                        row,
                        this.tileSize
                    )
                else if (tile === 3)
                    this.#drawImg(
                        this.dashedRightDown,
                        ctx,
                        col,
                        row,
                        this.tileSize
                    )
                else if (tile === 4)
                    this.#drawImg(
                        this.dashedLeftUp,
                        ctx,
                        col,
                        row,
                        this.tileSize
                    )
                else if (tile === 6)
                    this.#drawImg(this.minion, ctx, col, row, this.tileSize)
                else if (tile === 7) {
                    this.#drawImg(this.dashed, ctx, col, row, this.tileSize)
                    this.#drawPlus(this.plus, ctx, col, row, this.tileSize / 2)
                }

                // ctx.strokeStyle = "black"
                // ctx.strokeRect(
                //     col * this.tileSize,
                //     row * this.tileSize,
                //     this.tileSize,
                //     this.tileSize
                // )
            }
        }
    }

    #drawPlus(img, ctx, col, row, size) {
        ctx.fillStyle = "#b17572"
        ctx.fillRect(col * this.tileSize, row * this.tileSize, size, size)
        ctx.drawImage(img, (col + 0.25) * this.tileSize, (row + 0.25) * this.tileSize, size, size)
    }

    #drawImg(img, ctx, col, row, size) {
        ctx.fillStyle = "#b17572"
        ctx.fillRect(col * this.tileSize, row * this.tileSize, size, size)
        ctx.drawImage(img, col * this.tileSize, row * this.tileSize, size, size)
    }

    getBiome() {
        for (let row = 0; row < this.map.length; row++) {
            for (let col = 0; col < this.map[row].length; col++) {
                let tile = this.map[row][col]
                if (tile === 5) {
                    return new Biome(
                        col * this.tileSize,
                        row * this.tileSize,
                        this.tileSize,
                        this,
                        this.gameStats
                    )
                }
            }
        }
    }

    setCanvasSize(canvas) {
        canvas.width = this.map[0].length * this.tileSize
        canvas.height = this.map.length * this.tileSize
    }

    updatePlus(ctx, mouseX, mouseY) {
        var isCollision = false
        for (var i = 0, len = this.rects.length; i < len; i++) {
            var left = this.rects[i].x * 50,
                right = this.rects[i].x * 50 + 50
            var top = this.rects[i].y * 50,
                bottom = this.rects[i].y * 50 + 50
            if (
                right >= mouseX &&
                left <= mouseX &&
                bottom >= mouseY &&
                top <= mouseY
            ) {
                isCollision = true
                break
            }
        }
        console.log(
            "Left : ",
            left,
            "\nRight : ",
            right,
            "\nTop : ",
            top,
            "\nBottom : ",
            bottom
        )
        isCollision ? console.log("Collision!") : console.log("No Collision.")
    }
}

class Biome {
    constructor(x, y, tileSize, tileMap, gameStats) {
        this.x = x
        this.y = y
        this.tileSize = tileSize
        this.tileMap = tileMap
        this.gameStats = gameStats
        // this.biomeMoveCount = (this.gameStats.friendlyBiomePoints - 15) / 5
        this.biomeMoveCount = (45 - 15) / 5
        this.#loadBiomeImages()
    }

    draw(ctx) {
        if (this.biomeMoveCount < 1)
            ctx.drawImage(
                this.biomeImages[0],
                this.x,
                this.y,
                this.tileSize,
                this.tileSize
            )
        else if (this.biomeMoveCount >= 1 && this.biomeMoveCount <= 6)
            ctx.drawImage(
                this.biomeImages[0],
                this.x + (this.biomeMoveCount - 1) * this.tileSize,
                this.y - this.tileSize,
                this.tileSize,
                this.tileSize
            )
        else if (this.biomeMoveCount > 6 && this.biomeMoveCount <= 12) {
            ctx.drawImage(
                this.biomeImages[0],
                this.x + (12 - this.biomeMoveCount) * this.tileSize,
                this.y - 2 * this.tileSize,
                this.tileSize,
                this.tileSize
            )
            // console.log(this.tileMap.map[this.y / this.tileSize - 2][this.x / this.tileSize + (12 - this.biomeMoveCount)])
        } else if (this.biomeMoveCount > 12 && this.biomeMoveCount <= 18)
            ctx.drawImage(
                this.biomeImages[0],
                this.x + (this.biomeMoveCount - 13) * this.tileSize,
                this.y - 3 * this.tileSize,
                this.tileSize,
                this.tileSize
            )
        else if (this.biomeMoveCount > 18 && this.biomeMoveCount <= 24)
            ctx.drawImage(
                this.biomeImages[0],
                this.x + (24 - this.biomeMoveCount) * this.tileSize,
                this.y - 4 * this.tileSize,
                this.tileSize,
                this.tileSize
            )
        else if (this.biomeMoveCount > 24 && this.biomeMoveCount <= 30)
            ctx.drawImage(
                this.biomeImages[0],
                this.x + (this.biomeMoveCount - 25) * this.tileSize,
                this.y - 5 * this.tileSize,
                this.tileSize,
                this.tileSize
            )
        else if (this.biomeMoveCount > 30 && this.biomeMoveCount <= 36)
            ctx.drawImage(
                this.biomeImages[0],
                this.x + (36 - this.biomeMoveCount) * this.tileSize,
                this.y - 6 * this.tileSize,
                this.tileSize,
                this.tileSize
            )
        else if (this.biomeMoveCount > 36 && this.biomeMoveCount <= 42)
            ctx.drawImage(
                this.biomeImages[0],
                this.x + (this.biomeMoveCount - 37) * this.tileSize,
                this.y - 7 * this.tileSize,
                this.tileSize,
                this.tileSize
            )
        else {
            ctx.drawImage(
                this.biomeImages[0],
                this.x + 5 * this.tileSize,
                this.y - 8 * this.tileSize,
                this.tileSize,
                this.tileSize
            )
        }
    }

    update() {
        this.biomeMoveCount += 0.06
    }

    #loadBiomeImages() {
        const biomeImage = new Image()
        biomeImage.src = biome

        this.biomeImages = [biomeImage]
    }
}
