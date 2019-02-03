//Entry
require('./_render.js');

function init(){
	const message = new SpeechSynthesisUtterance('Good evening, Zeekaas what do you seek?');
	window.speechSynthesis.speak(message);
	message.onend = function() {
		document.querySelector('.intro').className += ' hide';
		document.body.className = "loaded";
	}
}

window.addEventListener('mousemove', init, {
	once: true
})
