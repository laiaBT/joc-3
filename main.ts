sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.say("caca!!", 100)
})
let mySprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 1 1 1 1 1 2 2 1 1 1 1 1 2 2 
    2 2 1 1 1 1 1 2 2 1 1 1 1 1 2 2 
    2 2 1 f f f 1 2 2 1 f f f 1 2 2 
    2 2 1 f f f 1 2 2 1 f f f 1 2 2 
    2 2 1 f f f 1 2 2 1 f f f 1 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 f 2 2 2 2 f f 2 2 2 2 
    2 2 2 2 2 f f 2 2 f f 2 2 2 2 2 
    2 2 2 2 2 2 f f f 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
let enemic = sprites.create(img`
    . . . . . . . . . e . . . . . . 
    . . . . . . . e e e . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . e e e e e e e e e . . . . 
    . . . e e e e e e e e e . . . . 
    . . e e 1 1 1 e 1 1 1 e e e . . 
    . . e e 1 1 1 e 1 1 1 e e e . . 
    . . e e 1 f 1 e 1 f 1 e e e e . 
    . e e e e e e e e e e e f e e e 
    e e e e e e e e e e e f f e e e 
    e e e e e e f f f f f f e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let mySprite2 = sprites.create(img`
    . . . . . . . . . e . . . . . . 
    . . . . . . . e e e . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . e e e e e e e e e . . . . 
    . . . e e e e e e e e e . . . . 
    . . e e 1 1 1 e 1 1 1 e e e . . 
    . . e e 1 1 1 e 1 1 1 e e e . . 
    . . e e 1 f 1 e 1 f 1 e e e e . 
    . e e e e e e e e e e e f e e e 
    e e e e e e e e e e e f f e e e 
    e e e e e e f f f f f f e e e e 
    e e e e e e e f f f f e e e e e 
    e e e e e e e e f f e e e e e e 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
enemic.setPosition(14, 13)
mySprite2.setPosition(137, 13)
controller.moveSprite(mySprite)
