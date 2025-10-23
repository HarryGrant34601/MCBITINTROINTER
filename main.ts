let Score = 0
function Start () {
    music.stopAllSounds()
    Score = 34
    EndGame()
}
input.onButtonPressed(Button.AB, function () {
    Start()
})
function EndGame () {
    basic.showString("Your Score was" + Score)
    music.setVolume(255)
    music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.LoopingInBackground)
}
basic.forever(function () {
	
})
