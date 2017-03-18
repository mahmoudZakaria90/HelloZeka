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