FUNC.initialize = {
	setLayers:function(){
		sortArray(SYS.layers,'sort')

		for (var i = 0; i < SYS.layers.length; i++) {
			var p = SYS.layers[i]
			document.body.appendChild(p.canvas)
			p.canvas.width = GLOBALS.resolution.width
			p.canvas.height = GLOBALS.resolution.height
		}
	},
	execute:function(){
		SYS.draw()
		SYS.update()
	},
}

FUNC.initialize_before = {}
FUNC.initialize_after = {}

FUNC.initialize_before.mouse = function(){
	SYS.controls.mouse = {
		x:GLOBALS.resolution.width/2,
		y:GLOBALS.resolution.height/2,
	}
}

addEvent(window, 'load', function(){
	var iniObj = Object.keys(FUNC.initialize_before)
	for (var i = 0; i < iniObj.length; i++) {FUNC.initialize_before[iniObj[i]]()}

	var iniObj = Object.keys(FUNC.initialize)
	for (var i = 0; i < iniObj.length; i++) {FUNC.initialize[iniObj[i]]()}
	
	var iniObj = Object.keys(FUNC.initialize_after)
	for (var i = 0; i < iniObj.length; i++) {FUNC.initialize_after[iniObj[i]]()}
});