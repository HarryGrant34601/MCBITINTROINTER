function Start () {
    music.stopAllSounds()
    // If end condition is met, it calls the end 
    if (true) {
        EndGame()
    }
}
input.onButtonPressed(Button.AB, function () {
    Start()
})
function EndGame () {
    let Score = 0
    basic.showString("Your Score was" + Score)
    music.setVolume(255)
    music.play(music.tonePlayable(131, music.beat(BeatFraction.Breve)), music.PlaybackMode.LoopingInBackground)
}
basic.forever(function () {
	
})
