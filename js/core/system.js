var GLOBALS = {}
var FUNC = {}
var OBJ = {}

var SYS = {}

SYS.IDs = {
	units:0,
	layers:0
}

SYS.fps = {}

SYS.fps.draw = {
	date:[Date.now(),Date.now()],
	delta:'',
	interval:''
}

SYS.fps.calc = {
	date:[Date.now(),Date.now()],
	delta:'',
	interval:''
}

SYS.units = []
SYS.layers = []
SYS.controls = {}

SYS.controls.mouse = {x:0,y:0}
SYS.controls.keyboard = []

GLOBALS.units = {}
GLOBALS.layers = {}

FUNC.draw = {}
FUNC.update = {}

SYS.debug = {
	enabled:false,
	div:document.createElement('div'),
	text:'',
	initialize:function(){
		SYS.debug.enabled = true
		SYS.debug.div.style.width = 'auto'
		SYS.debug.div.style.height = 'auto'
		SYS.debug.div.style.left = '5px'
		SYS.debug.div.style.top = '5px'
		SYS.debug.div.style.position = 'fixed'
		SYS.debug.div.style.zIndex = '99999'
		SYS.debug.div.style.pointerEvents = 'none'
		SYS.debug.div.style.color = '#fff'
		SYS.debug.div.style.fontSize = '8'
		SYS.debug.div.style.fontFamily = '"Courier New", Courier, monospace'
		document.body.appendChild(SYS.debug.div)
		SYS.debug.display()
	},
	write:function(text){
		SYS.debug.text = text
	},
	display:function(){
		if (SYS.debug.enabled){SYS.debug.div.innerHTML = '<span style=" user-select:none; -webkit-user-select:none">' + SYS.debug.text + '</span>'} else {console.log('debug is not enabled')}
		setTimeout(function(){SYS.debug.display()},200)
	},
	compute:function(property){
		if (SYS.debug.enabled){
			SYS.fps[property].date[0] = SYS.fps[property].date[1]
			SYS.fps[property].date[1] = Date.now()
			SYS.fps[property].delta = SYS.fps[property].date[1] - SYS.fps[property].date[0]
		}
	}
}

SYS.draw = function(){
	SYS.debug.compute('draw')
	SYS.PIXI.renderer.render(SYS.PIXI.stage)

	var drawObj = Object.keys(FUNC.draw)
	for (var i = 0; i < drawObj.length; i++) {FUNC.draw[drawObj[i]]()}

   	requestAnimationFrame(SYS.draw)
}

SYS.update = function(){
	SYS.debug.compute('calc')
	var updateObj = Object.keys(FUNC.update)

	for (var i = 0; i < updateObj.length; i++) {FUNC.update[updateObj[i]]()}

	requestAnimationFrame(SYS.update)
}

SYS.declare = function(name,type,object){
	if (name != undefined){
		GLOBALS[type][name] = object
		SYS[type].push(GLOBALS[type][name])
	} else {
		SYS[type].push(object)
	}
}