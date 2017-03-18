//Entry
require('./_render.js');


function init(){
	document.getElementsByTagName('audio')[0].volume = .1;
	setTimeout(function(){
		document.querySelector('.intro').className += ' display';
	} ,2000)
}

init();