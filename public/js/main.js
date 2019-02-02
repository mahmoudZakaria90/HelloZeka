(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var box = (function(){

	//box MetaData
	var _boxWidth = 70;
	var _boxHeight = 70;

	//box quan
	var _boxQuanHorz = Math.floor( ( ( window.innerWidth ) / 2 )/ _boxWidth );
	var _boxQuanVert = Math.floor( ( ( window.innerHeight) / 2 )/ _boxHeight );
	var len = _boxQuanHorz * _boxQuanVert;

	//box creation
	function create(){
		var el = document.createElement('a');
		el.style.width = window.innerWidth / _boxQuanHorz + 'px';
		el.style.height = window.innerHeight / _boxQuanVert  + 'px';
		el.className = 'box';
		document.body.appendChild(el);
		return el;
	}

	return {
		create: create,
		length: len
	}

})();

module.exports = box;

},{}],2:[function(require,module,exports){
var data = [
	{name: 'jira.png', url: 'https://jira.mondiamedia.com/secure/Dashboard.jspa'},
	{name: 'stash.png', url: 'https://stash.mondiamedia.com/projects/MMGS'},
	{name: 'h4p.jpeg', url: 'http://h4p.mondiamedia.com:8080/TT/business'},
	{name: 'codepen.png', url: 'http://codepen.io/Mahmoud-Zakaria/pens/public/'},
	{name: 'gmail.jpg', url: 'https://mail.google.com/mail/u/0/#inbox'},
	{name: 'site.png', url: 'https://mahmoudzakaria90.github.io/personalsite/'},
	{name: 'twitter.png', url: 'https://twitter.com/zekas90'},
	{name: 'linkedin.png', url: 'https://www.linkedin.com/in/mahmoud-zakaria-04454599/'},
	{name: 'youtube.png', url: 'https://www.youtube.com'},
	{name: 'upwork.png', url: 'https://www.upwork.com/ab/find-work/'},
	{name: 'github.jpg', url: 'https://github.com/mahmoudZakaria90'},
	{name: 'insta.png', url: 'https://www.instagram.com/m.zakria90/'},
	{name: 'whats.png', url: 'https://web.whatsapp.com/'},
	{name: 'trans.png', url: 'https://translate.google.com.eg/?rlz=1C5CHFA_enEG727EG727&ion=1&espv=2&um=1&ie=UTF-8&hl=en&client=tw-ob#auto/en/'},
	{name: 'w3.jpg', url: 'https://www.w3schools.com/'},
	{name: 'google.png', url: 'https://www.google.com'},
	{name: 'wiki.png', url: 'http://wiki.hh.arvm.de/bin/view/ProjectsRnD/o2+Games+Documentation'},
	{name: 'people.png', url:'https://www.peopleperhour.com/freelancer/mahmoud/front-end-developer-ui-ux-designer/1526559'},
	{name: 'ng.png', url: 'https://angular.io/docs/ts/latest/guide/learning-angular.html'},
	{name: 'type.svg', url: 'https://www.typescriptlang.org/docs/handbook/basic-types.html'},
	{name: 'stack.png', url: 'http://stackoverflow.com/'},
	{name: 'vue.png', url: 'https://vuejs.org/v2/guide/'},
	{name: 'mdn.png', url: 'https://developer.mozilla.org/en-US/'},
	{name: 'info.png', url: 'http://javascript.info/closure'},
	{name: 'babel.png', url: 'https://babeljs.io/learn-es2015/'},
	{name: 'keep.png', url: 'https://keep.google.com/#home'}
];

module.exports = data;
},{}],3:[function(require,module,exports){
var box = require('./_box.js');
var data = require('./_data.js');

var render = (function(){
	for (var i = 0; i < box.length; i++) {
		var _random = Math.floor(Math.random() * box.length * 50);
		var _random2 = Math.floor(Math.random() * data.length);
		var el = box.create();
		el.id = 'box' + i;
		el.style.transform = "translateZ("+_random+"px)";
		el.style.backgroundImage = "url(img/"+data[_random2].name+")";
		el.href = data[_random2].url;
		el.setAttribute('target','_blank');
	}

})();

module.exports = render;

},{"./_box.js":1,"./_data.js":2}],4:[function(require,module,exports){
//Entry
require('./_render.js');


function init(){
	const message = new SpeechSynthesisUtterance('Good evening, Zakaria what do you seek?');
	window.speechSynthesis.speak(message);
	message.onend = function() {
		document.querySelector('.intro').className += ' hide';
		document.body.className = "loaded";
	}
}

window.onmousemove = function() {
	init();
}

},{"./_render.js":3}]},{},[4]);
