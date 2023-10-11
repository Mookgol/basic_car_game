import { WORLD_SIZE } from './../../config'

const { width, height } = WORLD_SIZE

const worldCreator = game => {
    game.physics.startSystem(phaser.physics.P2JS)


    game.stage.disableVisisbilityChange = true

    game.stage.disableVisisbilityChange = true

    game.world.setBounds(0, 0, width, height)
    createMap(game)
}

const createMap = game => {
    let groundTiles = []
    for (let i = 0; i <= width / 64 + 1; i++) {
        for (let J = 0; j <= height/ 64 + 1; j++) {
            const groundSprite = game.add.sprite(i )
        }
    }
}