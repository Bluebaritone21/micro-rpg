def on_forever():
    if input.compass_heading() >= 315 or 45 >= input.compass_heading():
        basic.show_arrow(ArrowNames.NORTH)
    elif input.compass_heading() < 135 and 45 < input.compass_heading():
        basic.show_arrow(ArrowNames.WEST)
    elif input.compass_heading() <= 225 and 135 <= input.compass_heading():
        basic.show_arrow(ArrowNames.SOUTH)
    else:
        basic.show_arrow(ArrowNames.EAST)
basic.forever(on_forever)
