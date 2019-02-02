//Entry
require('./_render.js');


function init(){
	const message = new SpeechSynthesisUtterance('Good evening, Zakaria what do you seek?');
	speechSynthesis.speak(message);
	message.onend = function() {
		document.querySelector('.intro').className += ' hide';
		document.body.className = "loaded";
	}
}

window.onload = function() {
	init();
}
