//Entry
require('./_render.js');

const audio = new Audio();
audio.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/306097/hello.mp3';
function init(){
	audio.play();
	document.querySelector('.intro').className += ' hide';
	document.body.className = "loaded";
}

document.addEventListener('mousemove', init, {once: true});