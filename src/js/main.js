//Entry
require('./_render.js');

function init(){
	document.querySelector('.intro').className += ' hide';
	document.body.className = "loaded";
}
window.addEventListener('load', init);