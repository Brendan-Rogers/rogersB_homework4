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
	pausePlay = document.querySelector('.controls'),
	imageBanner = document.querySelector('#houseImages');

//functions in the middle
function vidInit() {
	// houseName variable, is second class of clicked button, ran through Capitalization function
	let houseName = this.className.split(' ')[1].capIt();
	let vidSource = vidPlayer.currentSrc.split('.')[1];
	// set the h1 to our clicked houseName
	document.querySelector('h1').textContent = `House ${houseName}`;
  	//debugger;
  	lightbox.classList.add('show-lightbox');
  	vidPlayer.src = `video/House-${houseName}.${vidSource}`;
  	vidPlayer.load();
  	vidPlayer.play();

  	scrollBanners(this.dataset.offset);
}

function scrollBanners(offset) {
	//move the banner image to the left
	let moveIt = offset * 600 + "px";

	imageBanner.style.right = moveIt;
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
sigils.forEach(sigil => sigil.addEventListener('click', vidInit));
closeLightBoxButton.addEventListener('click', closeLightBox);
vidPlayer.addEventListener('ended',closeLightBox);
pausePlay.addEventListener('click',controlFunc);

})();
