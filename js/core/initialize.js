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
		SYS.draw(0)
		SYS.update()
	},
}

FUNC.initialize_before = {}
FUNC.initialize_after = {}

FUNC.initialize_before.prep = function(){
	SYS.doc = {}

	SYS.doc.width = GLOBALS.resolution.width 
	SYS.doc.height = GLOBALS.resolution.height

	SYS.doc.halfWidth = GLOBALS.resolution.width*0.5
	SYS.doc.halfHeight = GLOBALS.resolution.height*0.5

	addEvent(window, 'keydown', function(){
		for (var i = 0; i < SYS.controls.keyboard.length; i++) {
			var p = SYS.controls.keyboard[i]
			if (event.keyCode == p.key && p.action == 'keydown'){p.func()}
		}
	})

	addEvent(window, 'keyup', function(){
		for (var i = 0; i < SYS.controls.keyboard.length; i++) {
			var p = SYS.controls.keyboard[i]
			if (event.keyCode == p.key && p.action == 'keyup'){p.func()}
		}
	})

	SYS.PIXI = {}
	SYS.PIXI.stage = new PIXI.Stage(0x66FF99);
	SYS.PIXI.renderer = PIXI.autoDetectRenderer(400, 300);
	document.body.appendChild(SYS.PIXI.renderer.view)

	SYS.PIXI.textures = {}
	SYS.PIXI.textures.wow = PIXI.Texture.fromImage("images/wow.png")

	var bunny = new PIXI.Sprite(SYS.PIXI.textures.wow);
	 
		// center the sprites anchor point
		bunny.anchor.x = 0.5;
		bunny.anchor.y = 0.5;
	 
		// move the sprite t the center of the screen
		bunny.position.x = 200;
		bunny.position.y = 150;
}

addEvent(window, 'load', function(){
	var iniObj = Object.keys(FUNC.initialize_before)
	for (var i = 0; i < iniObj.length; i++) {FUNC.initialize_before[iniObj[i]]()}

	var iniObj = Object.keys(FUNC.initialize)
	for (var i = 0; i < iniObj.length; i++) {FUNC.initialize[iniObj[i]]()}
	
	var iniObj = Object.keys(FUNC.initialize_after)
	for (var i = 0; i < iniObj.length; i++) {FUNC.initialize_after[iniObj[i]]()}
});