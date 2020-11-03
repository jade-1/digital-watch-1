input.onButtonPressed(Button.A, function () {
    if (Hours < 23) {
        Hours += 1
    } else {
        Hours = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    AmPm = !(AmPm)
})
input.onButtonPressed(Button.B, function () {
    if (Minutes < 59) {
        Minutes += 1
    } else {
        Minutes = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    adjust = Hours
    if (AmPm) {
        if (Hours > 12) {
            adjust = Hours - 12
        } else {
            if (Hours == 0) {
                adjust = 12
            }
        }
    }
    time = "" + adjust
    time = "" + adjust + ":"
    if (Minutes < 10) {
        time = "" + time + "0"
    }
    time = "" + time + Minutes
    if (AmPm) {
        if (Hours > 11) {
            time = "" + time + "PM"
        } else {
            time = "" + time + "AM"
        }
    }
    basic.showString(time)
})
let Hours = 0
let Minutes = 0
let adjust = 0
let time = ""
let AmPm = false
AmPm = false
time = ""
adjust = 0
Minutes = 0
Hours = 0
basic.forever(function () {
    basic.pause(60000)
    if (Minutes < 59) {
        Minutes += 1
    } else {
        Minutes = 0
        if (Hours < 23) {
            Hours += 1
        } else {
            Hours = 0
        }
    }
})
