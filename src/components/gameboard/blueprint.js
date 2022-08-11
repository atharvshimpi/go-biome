import ghost from "../../assets/images/gamemap/ghost.png"
import pacman from "../../assets/images/gamemap/pacman.png"
import wall from "../../assets/images/gamemap/wall.png"
import yellowDot from "../../assets/images/gamemap/yellowDot.png"
import enemy from "../../assets/images/gamemap/character.png"

export default class BluePrint {
    constructor(tileSize) {
        this.tileSize = tileSize
        this.gameStats = JSON.parse(localStorage.getItem("gamestats"))

        this.yellowDot = new Image()
        this.yellowDot.src = yellowDot

        this.wall = new Image()
        this.wall.src = wall

        this.pacman = new Image()
        this.pacman.src = pacman

        this.ghost = new Image()
        this.ghost.src = ghost

        this.enemy = new Image()
        this.enemy.src = enemy
    }

    map = [
        [1, 1, 5, 1, 4, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1],
        [5, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 5],
        [1, 3, 1, 1, 1, 1],
    ]

    draw(ctx) {
        for (let row = 0; row < this.map.length; row++) {
            for (let col = 0; col < this.map[row].length; col++) {
                let tile = this.map[row][col]
                if (tile === 1)
                    this.#drawImg(this.wall, ctx, col, row, this.tileSize, tile)
                else if (tile === 0)
                    this.#drawImg(
                        this.yellowDot,
                        ctx,
                        col,
                        row,
                        this.tileSize,
                        tile
                    )
                else if (tile === 4)
                    this.#drawImg(
                        this.ghost,
                        ctx,
                        col,
                        row,
                        this.tileSize,
                        tile
                    )
                else if (tile === 5)
                    this.#drawImg(
                        this.enemy,
                        ctx,
                        col,
                        row,
                        this.tileSize,
                        tile
                    )
            }
        }
    }

    #drawImg(img, ctx, col, row, size, tile) {
        if (tile !== 4) {
            ctx.fillStyle = "orange"
            ctx.fillRect(col * this.tileSize, row * this.tileSize, size, size)
        }
        ctx.drawImage(img, col * this.tileSize, row * this.tileSize, size, size)
    }

    getPacman() {
        for (let row = 0; row < this.map.length; row++) {
            for (let col = 0; col < this.map[row].length; col++) {
                let tile = this.map[row][col]
                if (tile === 3) {
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
}

class Pacman {
    constructor(x, y, tileSize, tileMap, gameStats) {
        this.x = x
        this.y = y
        this.tileSize = tileSize
        this.tileMap = tileMap
        this.gameStats = gameStats
        this.biomeMoveCount = (this.gameStats.friendlyBiomePoints - 15) / 5
        this.#loadPacmanImages()
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
                this.pacmanImages[0],
                this.x,
                this.y,
                this.tileSize,
                this.tileSize
            )
        else if (this.biomeMoveCount >= 1 && this.biomeMoveCount <= 4)
            ctx.drawImage(
                this.pacmanImages[0],
                this.x + (this.biomeMoveCount - 1) * this.tileSize,
                this.y - this.tileSize,
                this.tileSize,
                this.tileSize
            )
        else if (this.biomeMoveCount > 4 && this.biomeMoveCount <= 6)
            ctx.drawImage(
                this.pacmanImages[0],
                this.x + 3 * this.tileSize,
                this.y - (this.biomeMoveCount - 3) * this.tileSize,
                this.tileSize,
                this.tileSize
            )
        else if (this.biomeMoveCount > 6 && this.biomeMoveCount <= 9)
            ctx.drawImage(
                this.pacmanImages[0],
                this.x + (9 - this.biomeMoveCount) * this.tileSize,
                this.y - 3 * this.tileSize,
                this.tileSize,
                this.tileSize
            )
        else if (this.biomeMoveCount > 9 && this.biomeMoveCount <= 11)
            ctx.drawImage(
                this.pacmanImages[0],
                this.x,
                this.y - (this.biomeMoveCount - 6) * this.tileSize,
                this.tileSize,
                this.tileSize
            )
        else if (this.biomeMoveCount > 11 && this.biomeMoveCount <= 14)
            ctx.drawImage(
                this.pacmanImages[0],
                this.x + (this.biomeMoveCount - 11) * this.tileSize,
                this.y - 5 * this.tileSize,
                this.tileSize,
                this.tileSize
            )
        else {
            ctx.drawImage(
                this.pacmanImages[0],
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

    #loadPacmanImages() {
        const pacmanImage1 = new Image()
        pacmanImage1.src = pacman

        this.pacmanImages = [pacmanImage1]
    }
}
