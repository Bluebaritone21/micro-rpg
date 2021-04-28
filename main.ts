basic.forever(function () {
    if (input.compassHeading() >= 315 || 45 >= input.compassHeading()) {
        basic.showArrow(ArrowNames.North)
    } else if (input.compassHeading() < 135 && 45 < input.compassHeading()) {
        basic.showArrow(ArrowNames.East)
    } else if (input.compassHeading() < 225 && 135 < input.compassHeading()) {
        basic.showArrow(ArrowNames.South)
    } else {
        basic.showArrow(ArrowNames.West)
    }
})
