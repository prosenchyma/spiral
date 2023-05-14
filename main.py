turtle.set_position(0, 0)
turtle.turn_right()

def on_forever():
    for i in range(5):
        turtle.forward(4 - i)
        turtle.turn_right()
    for i in range(5):
        turtle.turn_left()
        turtle.back(i)        
basic.forever(on_forever)
