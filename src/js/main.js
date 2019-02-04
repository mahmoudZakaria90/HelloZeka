//Entry
require('./_render.js');

const audio = new Audio();
audio.src = '../audio/hello.mp3';
function init(){
	this.play();
	document.querySelector('.intro').className += ' hide';
	document.body.className = "loaded";
}

audio.addEventListener('loadedmetadata', init);