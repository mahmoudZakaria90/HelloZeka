var box = require('./_box.js');
var data = require('./_data.js');

var render = (function(){
	for (var i = 0; i < box.length; i++) {
		var _random = Math.floor(Math.random() * box.length * 8);
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