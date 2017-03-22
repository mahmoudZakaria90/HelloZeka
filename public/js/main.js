(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var box = (function(){

	//box MetaData
	var _boxWidth = 55;
	var _boxHeight = 55;

	//box quan
	var _boxQuanHorz = Math.floor(window.innerWidth / _boxWidth);
	var _boxQuanVert = Math.floor(window.innerHeight / _boxHeight);
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
	{name: 'site.png', url: 'https://mahmoudzakaria90.github.io/onlineResume/'},
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
	{name: 'type.svg', url: 'https://www.typescriptlang.org/docs/handbook/basic-types.html'}
];

module.exports = data;
},{}],3:[function(require,module,exports){
var box = require('./_box.js');
var data = require('./_data.js');

var render = (function(){
	for (var i = 0; i < box.length; i++) {
		var _random = Math.random() * box.length;
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
	var audio = document.getElementsByTagName('audio')[0];
	audio.play();
	audio.volume = .1;
	setTimeout(function(){
		document.querySelector('.intro').className += ' display';
	} ,2000)
}

window.onload = function() {
	init();
	document.body.className = "loaded"
}
},{"./_render.js":3}]},{},[4]);
