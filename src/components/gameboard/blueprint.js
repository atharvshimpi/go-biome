import biome from "../../assets/images/gamemap/biome.png"
import minion from "../../assets/images/gamemap/minion.png"
import plus from "../../assets/images/gamemap/plus.png"
import dashed from "../../assets/images/gamemap/dashed.png"
import dashedLeftDown from "../../assets/images/gamemap/dashedLeftDown.png"
import dashedLeftUp from "../../assets/images/gamemap/dashedLeftUp.png"
import dashedRightDown from "../../assets/images/gamemap/dashedRightDown.png"
import dashedRightUp from "../../assets/images/gamemap/dashedRightUp.png"

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
        0 - dashed
        1 - dashedLeftDown
        2 - dashedRightUp
        3 - dashedRightDown
        4 - dashedLeftUp
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
        { x: 2, y: 1, clicked: false },
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
                    if (1)
                        this.#drawPlus(
                            this.plus,
                            ctx,
                            col,
                            row,
                            this.tileSize / 2
                        )
                }

                // ctx.strokeStyle = "black"
                // ctx.strokeRect(col * this.tileSize, row * this.tileSize, this.tileSize, this.tileSize)
            }
        }
    }

    #drawPlus(img, ctx, col, row, size) {
        ctx.fillStyle = "#b17572"
        ctx.fillRect(col * this.tileSize, row * this.tileSize, size, size)
        ctx.drawImage(
            img,
            (col + 0.25) * this.tileSize,
            (row + 0.25) * this.tileSize,
            size,
            size
        )
    }

    #drawImg(img, ctx, col, row, size) {
        ctx.fillStyle = "#b17572"
        ctx.fillRect(col * this.tileSize, row * this.tileSize, size, size)
        ctx.drawImage(img, col * this.tileSize, row * this.tileSize, size, size)
    }

    getPacman() {
        for (let row = 0; row < this.map.length; row++) {
            for (let col = 0; col < this.map[row].length; col++) {
                let tile = this.map[row][col]
                if (tile === 5) {
                    return new Pacman(
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
            var left = this.rects[i].x * this.tileSize,
                right = left + this.tileSize
            var top = this.rects[i].y * this.tileSize,
                bottom = top + this.tileSize
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
        isCollision
            ? console.log("Collision!")
            : console.log("No Collision Detected!")
    }
}

class Pacman {
    constructor(x, y, tileSize, tileMap, gameStats) {
        this.x = x
        this.y = y
        this.tileSize = tileSize
        this.tileMap = tileMap
        this.gameStats = gameStats
        this.biomeMoveCount = (this.gameStats.friendlyBiomePoints - 15) / 5
        this.#loadBiomeImages()
    }

    /*
        biome - 15
        minion - 85

        done an activity - +5

        biome - 20
        minion - 80
    */

    draw(ctx) {
        if (this.biomeMoveCount < 1)
            ctx.drawImage(
                this.biomeImages[0],
                this.x,
                this.y,
                this.tileSize,
                this.tileSize
            )
        else if (this.biomeMoveCount >= 1 && this.biomeMoveCount <= 4)
            ctx.drawImage(
                this.biomeImages[0],
                this.x + (this.biomeMoveCount - 1) * this.tileSize,
                this.y - this.tileSize,
                this.tileSize,
                this.tileSize
            )
        else if (this.biomeMoveCount > 4 && this.biomeMoveCount <= 6)
            ctx.drawImage(
                this.biomeImages[0],
                this.x + 3 * this.tileSize,
                this.y - (this.biomeMoveCount - 3) * this.tileSize,
                this.tileSize,
                this.tileSize
            )
        else if (this.biomeMoveCount > 6 && this.biomeMoveCount <= 9)
            ctx.drawImage(
                this.biomeImages[0],
                this.x + (9 - this.biomeMoveCount) * this.tileSize,
                this.y - 3 * this.tileSize,
                this.tileSize,
                this.tileSize
            )
        else if (this.biomeMoveCount > 9 && this.biomeMoveCount <= 11)
            ctx.drawImage(
                this.biomeImages[0],
                this.x,
                this.y - (this.biomeMoveCount - 6) * this.tileSize,
                this.tileSize,
                this.tileSize
            )
        else if (this.biomeMoveCount > 11 && this.biomeMoveCount <= 14)
            ctx.drawImage(
                this.biomeImages[0],
                this.x + (this.biomeMoveCount - 11) * this.tileSize,
                this.y - 5 * this.tileSize,
                this.tileSize,
                this.tileSize
            )
        else {
            ctx.drawImage(
                this.biomeImages[0],
                this.x + 3 * this.tileSize,
                this.y - 6 * this.tileSize,
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
