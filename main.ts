basic.forever(function () {
    if (input.compassHeading() <= 0 && 0 <= input.compassHeading()) {
        basic.showArrow(ArrowNames.North)
    } else if (input.compassHeading() < 135 && 45 < input.compassHeading()) {
        basic.showArrow(ArrowNames.East)
    } else if (false) {
        basic.showArrow(ArrowNames.South)
    } else {
        basic.showArrow(ArrowNames.West)
    }
})
