namespace SpriteKind {
    export const StatusBar = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . 2 . 
        2 2 2 
        . 1 . 
        . 1 . 
        . 1 . 
        `, ship, 0, -100)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
    projectile.setFlag(SpriteFlag.AutoDestroy, true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 200)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(4, 200)
    sprites.destroy(otherSprite, effects.fire, 200)
})
let E1: Sprite = null
let E2: Sprite = null
let E3: Sprite = null
let projectile: Sprite = null
let ship: Sprite = null
let idle = 0
ship = sprites.create(img`
    . . . . . . . 1 . . . . . . . 
    . . . . . . . 1 . . . . . . . 
    . . . . . . . 1 . . . . . . . 
    . . . . . . 1 1 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . 
    . . . 2 . . 1 1 1 . . 2 . . . 
    . . . 2 . . 1 1 1 . . 2 . . . 
    . . . 1 . 1 1 1 1 1 . 1 . . . 
    2 . . 1 8 1 1 2 1 1 8 1 . . 2 
    2 . . 8 1 1 2 2 2 1 1 8 . . 2 
    1 . . 1 1 1 2 1 2 1 1 1 . . 1 
    1 . 1 1 1 1 1 1 1 1 1 1 1 . 1 
    1 1 1 1 1 2 1 1 1 2 1 1 1 1 1 
    1 1 1 . 2 2 1 1 1 2 2 . 1 1 1 
    1 1 . . 2 2 . 1 . 2 2 . . 1 1 
    1 . . . . . . 1 . . . . . . 1 
    `, SpriteKind.Player)
ship.setPosition(75, 90)
controller.moveSprite(ship, 100, 0)
ship.setStayInScreen(true)
effects.starField.startScreenEffect()
info.setLife(4)
info.setScore(0)
game.onUpdateInterval(5000, function () {
    E3 = sprites.create(img`
        . . . . . . 7 . 7 . . . . . . . 
        . . . . . . 7 . 7 . . . . . . . 
        . . . 7 7 4 4 7 4 4 7 7 . . . . 
        . . . . 7 4 4 7 4 4 7 . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . 7 5 5 7 5 5 7 . . . . . 
        . . 7 7 7 5 5 5 5 5 7 7 7 . . . 
        7 7 7 7 7 5 5 5 5 5 7 7 7 7 7 . 
        . 7 7 7 7 5 5 5 5 5 7 7 7 7 7 . 
        7 7 4 7 7 . 4 . 4 . 7 7 4 7 . . 
        7 7 4 7 . . 4 . 4 . . 7 4 7 7 . 
        7 4 7 7 . . . . . . . 7 7 4 7 . 
        7 4 4 7 . . . . . . . 7 4 4 7 . 
        7 4 4 7 . . . . . . . 7 4 4 7 . 
        7 7 7 7 . . . . . . . 7 7 7 7 . 
        . 7 7 . . . . . . . . . 7 7 . . 
        `, SpriteKind.Enemy)
    E3.setPosition(randint(5, 155), idle)
    E3.setVelocity(randint(-50, 50), 50)
    E3.ay = 100
    E3.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(2000, function () {
    E2 = sprites.create(img`
        8 . . . . 5 . . . . 8 
        . 8 . 5 2 5 2 5 . 8 . 
        . . 8 2 2 5 2 2 8 . . 
        . . . 5 5 5 5 5 . . . 
        . . . 8 5 5 5 8 . . . 
        . . 8 8 2 2 2 8 8 . . 
        . 8 8 . 2 2 2 . 8 8 . 
        8 8 8 . 5 5 5 . 8 8 8 
        8 8 . . 2 2 2 . . 8 8 
        8 8 . . . 2 . . . 8 8 
        `, SpriteKind.Enemy)
    E2.setPosition(randint(5, 155), idle)
    E2.setVelocity(randint(-50, 50), 50)
    E2.ay = 50
    E2.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(1000, function () {
    E1 = sprites.create(img`
        . . 2 . . 8 . 8 . . 2 . . 
        . 2 2 . . 8 . 8 . . 2 2 . 
        . 2 2 . b 2 b 2 b . 2 2 . 
        . 2 2 . b b b b b . 2 2 . 
        . 2 2 2 2 b b b 2 2 2 2 . 
        . . 2 2 2 8 8 8 2 2 2 . . 
        . . . 2 2 8 8 8 2 2 . . . 
        . . 2 2 2 b b b 2 2 2 . . 
        . 2 2 2 . 8 8 8 . 2 2 2 . 
        . . 2 2 . . . . . 2 2 . . 
        `, SpriteKind.Enemy)
    E1.setPosition(randint(5, 155), idle)
    E1.setVelocity(0, 50)
    E1.setFlag(SpriteFlag.AutoDestroy, true)
})
