// JavaScript Document
(() => { 

console.log("JS Engaged");

String.prototype.capIt = function() {
	return this.replace(this.charAt(), this.charAt().toUpperCase());
}

//variable stack goes here
let sigils = document.querySelectorAll('.sigilContainer'),
	lightbox = document.querySelector('.lightbox'),
	closeLightBoxButton = document.querySelector('.close-lightbox'),
	vidPlayer = document.querySelector('video'),
	pausePlay = document.querySelector('.controls');

//functions in the middle
function showHouseVideo() {
	// houseName variable, is second class of clicked button, ran through Capitalization function
	let houseName = this.className.split(' ')[1].capIt();
	// set the h1 to our clicked houseName
	document.querySelector('h1').textContent = `House ${houseName}`;
  	//debugger;
  	lightbox.classList.add('show-lightbox');
  	//play the video
  	// vidPlayer.src = `video/House-${houseName}.${vidPlayer.currentSrc.split('.')[1]}`;
  	// vidPlayer.load();
  	vidPlayer.play();
}

function closeLightBox() {
  	lightbox.classList.remove('show-lightbox')
  	//stop and rewind
  	vidPlayer.pause();
  	vidPlayer.currentTime = 0;
}

function controlFunc() {
	let theButton = this.firstElementChild;

	if (vidPlayer.paused == true) {
		vidPlayer.play();
		theButton.dataset.icon =  "pause-circle";
	} else {
		vidPlayer.pause();
		theButton.dataset.icon =  "play-circle";

	}
}

// event handelling at the bottomNav
sigils.forEach(sigil => sigil.addEventListener('click', showHouseVideo));
closeLightBoxButton.addEventListener('click', closeLightBox);
vidPlayer.addEventListener('ended',closeLightBox);
pausePlay.addEventListener('click',controlFunc);

})();
