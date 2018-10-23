FUNC.initialize_before.test = function(){
	FUNC.events.create.layers(0,'main')
	FUNC.events.create.layers(1,'fore')
	FUNC.events.create.layers(-1,'back')
}

FUNC.initialize_after.test = function(){
	var createNum = 500
	while(createNum > 0){

		var weight = (Math.random()*8 + 2)/10
		FUNC.events.create.units(
			{
				locX:GLOBALS.resolution.width/2 - (Math.random()*4 - 2), 
				locY:GLOBALS.resolution.height/2 - (Math.random()*4 - 2), 
				weight:weight,
				size:(1-weight)*10, 
				color: Math.floor(Math.random()*6)
			}
		)
		createNum--
	}

	FUNC.controls.getMouseLoc()
}

addEvent(window, 'mousedown', function(){
	GLOBALS.pull = 1
});

addEvent(window, 'mouseup', function(){
	GLOBALS.pull = 0
});