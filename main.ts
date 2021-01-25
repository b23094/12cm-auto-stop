basic.forever(function () {
    if (bitbot.sonar(BBPingUnit.Centimeters) >= 12) {
        bitbot.go(BBDirection.Forward, 60)
    } else {
        bitbot.stop(BBStopMode.Brake)
    }
})
