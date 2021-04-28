basic.forever(function () {
    if (input.compassHeading() >= 315 || 45 >= input.compassHeading()) {
        basic.showArrow(ArrowNames.North)
        serial.writeLine("N")
    } else if (input.compassHeading() < 135 && 45 < input.compassHeading()) {
        basic.showArrow(ArrowNames.West)
        serial.writeLine("E")
    } else if (input.compassHeading() <= 225 && 135 <= input.compassHeading()) {
        basic.showArrow(ArrowNames.South)
        serial.writeLine("S")
    } else {
        basic.showArrow(ArrowNames.East)
        serial.writeLine("W")
    }
})
