(() => { console.log("app.js INITIALIZED");
	// attain Video
	const 	vidPlayer = document.querySelector('video'),
			pauseButton = document.querySelectorAll('button')[0],
			playButton = document.querySelectorAll('button')[1],
			rewindButton = document.querySelectorAll('button')[0];

	// AUDIO ON
	function volOn() {
		vidPlayer.muted = false;
	}
	// AUDIO OFF
	function volOff() {
		vidPlayer.muted = true;
	}
	// PLAY
	function playVid() {
		vidPlayer.play();
	}
	// PAUSE
	function pauseVid() {
		vidPlayer.pause();
	}
	// REWINF
	function rewindVid {
		vidPlayer.currentTime -= 5;
	}

	// volume control event listeners
	vidPlayer.addEventListener('mouseover', volOn);
	vidPlayer.addEventListener('mouseout', volOff);
	playButton.addEventListener('click', playVid);
	pauseButton.addEventListener('click', pauseVid);
	rewindButton.addEventListener('click', rewindVid);

})();