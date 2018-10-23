FUNC.initialize_before.test = function(){
	FUNC.events.create.layers(0,'main')
	FUNC.events.create.layers(-1,'trails', true)
	FUNC.events.create.layers(-2,'lights')
}

FUNC.initialize_after.test = function(){
	FUNC.update.debug = function(){
		var text = 'Particles:' + SYS.PIXI.stage.children.length
		text += '<br>' + 'Emitters:' + SYS.units.length 
		text += '<br>' + 'FPS:' + Math.round (1000/SYS.fps.draw.delta)
		text += '<br>' + 'CPS:' + Math.round (1000/SYS.fps.calc.delta)
		SYS.debug.write(text) 
	}
}




