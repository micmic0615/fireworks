FUNC.initialize = {
	setLayers:function(){
		sortArray(SYS.layers,'sort')
	},
	execute:function(){
		SYS.draw(0)
		SYS.update()
	},
}

FUNC.initialize_before = {}
FUNC.initialize_after = {}

FUNC.initialize_before.prep = function(){
	SYS.imageList = document.getElementById('imagesList').innerHTML.split('|')
	SYS.imageList.splice(SYS.imageList.length-1, 1)

	SYS.doc = {}
	SYS.doc.width = GLOBALS.resolution.width 
	SYS.doc.height = GLOBALS.resolution.height
	SYS.doc.halfWidth = SYS.doc.width*0.5
	SYS.doc.halfHeight = SYS.doc.height*0.5

	function getScreenBounds(){
		SYS.screen.width = document.body.getBoundingClientRect().width
		SYS.screen.height = document.body.getBoundingClientRect().height
		SYS.screen.halfWidth = document.body.getBoundingClientRect().width*0.5
		SYS.screen.halfHeight = document.body.getBoundingClientRect().height*0.5
	}

	SYS.screen = {}
	getScreenBounds()

	addEvent(window, 'load', function(){
		getScreenBounds()
	});

	addEvent(window, 'keydown', function(){if (GLOBALS.runGame){
		for (var i = 0; i < SYS.controls.keyboard.length; i++) {
			var p = SYS.controls.keyboard[i]
			if (event.keyCode == p.key && p.action == 'keydown'){
				var limiter = false
				for (var i2 = 0; i2 < FUNC.controls.keyboard.limiter.length; i2++) {if (FUNC.controls.keyboard.limiter[i2] == event.keyCode){limiter = true;break}}
				if (limiter == false){FUNC.controls.keyboard.limiter.push(event.keyCode); p.func(p.params)}
			}
		}	
	}})

	addEvent(window, 'keyup', function(){if (GLOBALS.runGame){
		for (var i2 = 0; i2 < FUNC.controls.keyboard.limiter.length; i2++) {if (FUNC.controls.keyboard.limiter[i2] == event.keyCode){FUNC.controls.keyboard.limiter.splice(i2,1);break}	}
	}});

	addEvent(window, 'keyup', function(){if (GLOBALS.runGame){
		for (var i = 0; i < SYS.controls.keyboard.length; i++) {
			var p = SYS.controls.keyboard[i]
			if (event.keyCode == p.key && p.action == 'keyup'){
				p.func(p.params)
			}
		}
	}})

	if (document.getElementById(GLOBALS.body) == null){GLOBALS.body = document.body} 
	else {GLOBALS.body = document.getElementById(GLOBALS.body)}

	SYS.PIXI = {}
	SYS.PIXI.stage = new PIXI.Stage(0x66FF99);
	SYS.PIXI.renderer = PIXI.autoDetectRenderer(SYS.doc.width, SYS.doc.height, {transparent:true}, true);
	GLOBALS.body.appendChild(SYS.PIXI.renderer.view)

	SYS.PIXI.textures = {}
	for (var i = 0; i < SYS.imageList.length; i++) {
		var p = SYS.imageList[i]
		SYS.PIXI.textures[p.split('images/')[1].split('.')[0]] = PIXI.Texture.fromImage(p)
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