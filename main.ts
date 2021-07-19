basic.showString(":)")
let schallpegel = input.soundLevel()
basic.forever(function () {
    schallpegel = input.soundLevel()
    led.plotBarGraph(
    schallpegel,
    255
    )
    if (schallpegel > 150) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
