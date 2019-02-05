//Entry
require('./_render.js');

function init(){
	setTimeout(function(){
		document.querySelector('.intro').className += ' hide';
	}, 2000)
	document.body.className = "loaded";
}
window.addEventListener('load', init);