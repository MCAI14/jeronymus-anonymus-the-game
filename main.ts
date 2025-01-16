sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite2, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(-1)
    info.changeLifeBy(-1)
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    sprites.destroy(Villager)
    info.changeScoreBy(1)
    info.changeLifeBy(1)
})
info.onLifeZero(function () {
    game.setGameOverEffect(false, effects.confetti)
})
let Villager: Sprite = null
game.splash("Jeronymus Anonymus", "Diz-Fruta!")
tiles.setCurrentTilemap(tilemap`level0`)
let Jeronymus_Anonymus = sprites.create(assets.image`Jeronymus Anonymus`, SpriteKind.Player)
controller.moveSprite(Jeronymus_Anonymus, 150, 0)
Jeronymus_Anonymus.setPosition(62, 68)
info.setScore(0)
info.setLife(50)
game.onUpdateInterval(1000, function () {
    Villager = sprites.create(assets.image`Villager`, SpriteKind.Enemy)
    Villager.setPosition(randint(10, 145), 5)
    Villager.setVelocity(0, 10)
})
