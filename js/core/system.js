var GLOBALS = {}
var FUNC = {}
var OBJ = {}

var SYS = {}
SYS.IDs = {
	units:0,
	layers:0
}
SYS.units = []
SYS.layers = []
SYS.controls = {}

SYS.draw = function(){
	for (var i = 0; i < SYS.layers.length; i++) {
		var p = SYS.layers[i]
		var ctx = SYS.layers[i].context
		ctx.clearRect(0,0,p.canvas.width,p.canvas.height)
	}

	var drawObj = Object.keys(FUNC.draw)
	for (var i = 0; i < drawObj.length; i++) {FUNC.draw[drawObj[i]]()}
	requestAnimationFrame(SYS.draw)
}

SYS.update = function(){
	var updateObj = Object.keys(FUNC.update)
	for (var i = 0; i < updateObj.length; i++) {FUNC.update[updateObj[i]]()}
	setTimeout(function(){SYS.update()},1000/GLOBALS.fps.calc)
}

SYS.declare = function(name,type,object){
	if (name != undefined){
		GLOBALS[type][name] = object
		SYS[type].push(GLOBALS[type][name])
	} else {
		SYS[type].push(object)
	}
}