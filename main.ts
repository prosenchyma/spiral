turtle.setPosition(0, 0)
turtle.turnRight()
basic.forever(function on_forever() {
    let i: number;
    for (i = 0; i < 5; i++) {
        turtle.forward(4 - i)
        turtle.turnRight()
    }
    for (i = 0; i < 5; i++) {
        turtle.turnLeft()
        turtle.back(i)
    }
})
