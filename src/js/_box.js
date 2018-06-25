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
