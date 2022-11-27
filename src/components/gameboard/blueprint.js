import biome from "../../assets/images/biome/shield.png"
import minion from "../../assets/images/gamemap/minion.png"

// dashed
import dashed from "../../assets/images/gamemap/dashed/dashed.png"
import dashedLeftDown from "../../assets/images/gamemap/dashed/dashedLeftDown.png"
import dashedLeftUp from "../../assets/images/gamemap/dashed/dashedLeftUp.png"
import dashedRightDown from "../../assets/images/gamemap/dashed/dashedRightDown.png"
import dashedRightUp from "../../assets/images/gamemap/dashed/dashedRightUp.png"

import minionRoad1 from "../../assets/images/minion/minion1.png"
import minionRoad2 from "../../assets/images/minion/minion2.png"
import minionRoad3 from "../../assets/images/minion/minion3.png"

export default class BluePrint {
    constructor(tileSize) {
        this.tileSize = tileSize
        this.mapStats = JSON.parse(localStorage.getItem("mapstats"))

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

        this.minionRoad1 = new Image()
        this.minionRoad1.src = minionRoad1

        this.minionRoad2 = new Image()
        this.minionRoad2.src = minionRoad2

        this.minionRoad3 = new Image()
        this.minionRoad3.src = minionRoad3

        this.minionLocations = []
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
        8 - backgroundColor
        10, 11, 12 - minion on road
    */

    map = [
        [8, 8, 8, 8, 8, 6],
        [1, 0, 0, 10, 0, 2],
        [4, 11, 0, 12, 0, 3],
        [1, 0, 10, 0, 10, 2],
        [4, 12, 0, 11, 0, 3],
        [1, 0, 0, 0, 12, 2],
        [4, 0, 11, 0, 0, 3],
        [1, 0, 0, 10, 0, 2],
        [5, 8, 8, 8, 8, 8],
    ]

    draw(ctx) {
        for (let row = 0; row < this.map.length; row++) {
            for (let col = 0; col < this.map[row].length; col++) {
                let tile = this.map[row][col]
                if (tile === 0)
                    this.#drawImg(this.dashed, ctx, col, row, this.tileSize)
                else if (tile === 1)
                    this.#drawImg(
                        this.dashedLeftDown,
                        ctx,
                        col,
                        row,
                        this.tileSize
                    )
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
                else if (tile === 6) {
                    this.#drawImg(this.minion, ctx, col, row, this.tileSize)
                }
                else if (tile === 10) {
                    if (!this.isMinionCrossed([row, col])) {
                        this.#drawImg(this.minionRoad1, ctx, col, row, this.tileSize)
                    }
                    else {
                        this.#drawImg(this.dashed, ctx, col, row, this.tileSize)
                    }
                }
                else if (tile === 11) {
                    if (!this.isMinionCrossed([row, col])) {
                        this.#drawImg(this.minionRoad2, ctx, col, row, this.tileSize)
                    }
                    else {
                        this.#drawImg(this.dashed, ctx, col, row, this.tileSize)
                    }
                }
                else if (tile === 12) {
                    if (!this.isMinionCrossed([row, col])) {
                        this.#drawImg(this.minionRoad3, ctx, col, row, this.tileSize)
                    }
                    else {
                        this.#drawImg(this.dashed, ctx, col, row, this.tileSize)
                    }
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
                        this.mapStats
                    )
                }
            }
        }
    }

    setCanvasSize(canvas) {
        canvas.width = this.map[0].length * this.tileSize
        canvas.height = this.map.length * this.tileSize
    }

    isMinionCrossed(tileIndex) {
        const biomeIndex = []

        for (let i = 0; i < this.map.length; i++) {
            if (this.map[i].includes(BIOME_INDEX)) {
                biomeIndex.push(i)
                biomeIndex.push(this.map[i].indexOf(BIOME_INDEX))
            }
        }

        if (tileIndex[0] > biomeIndex[0]) {
            return true
        }

        if (biomeIndex[0] > tileIndex[0]) {
            return false
        }

        console.log(biomeIndex[0] % 2 === 0)
        console.log(biomeIndex[1], tileIndex[1])

        if (biomeIndex[0] % 2 === 0) {
            return tileIndex[1] > biomeIndex[1]
        }

        return tileIndex[1] < biomeIndex[1]
    }
}

class Biome {
    constructor(x, y, tileSize, tileMap, mapStats) {
        this.x = x
        this.y = y
        this.tileSize = tileSize
        this.tileMap = tileMap
        this.mapStats = mapStats
        this.biomeMoveCount = (this.mapStats.friendlyBiomePoints - 15) / 5
        // this.biomeMoveCount = (15 - 15) / 5
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
        else if (this.biomeMoveCount > 6 && this.biomeMoveCount <= 12)
            ctx.drawImage(
                this.biomeImages[0],
                this.x + (12 - this.biomeMoveCount) * this.tileSize,
                this.y - 2 * this.tileSize,
                this.tileSize,
                this.tileSize
            )
        else if (this.biomeMoveCount > 12 && this.biomeMoveCount <= 18)
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
