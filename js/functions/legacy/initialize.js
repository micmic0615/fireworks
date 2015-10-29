FUNC.initialize_before.test = function(){
	FUNC.events.create.layers(0,'main')
	FUNC.events.create.layers(-1,'trails', true)
	FUNC.events.create.layers(-2,'lights')
}

FUNC.initialize_after.test = function(){
	FUNC.controls.mouse.move()
	FUNC.controls.mouse.click(FUNC.fireworks.create)
	
	FUNC.controls.keyboard.down(81, FUNC.fireworks.create)
	FUNC.controls.keyboard.down(87, FUNC.fireworks.create)
	FUNC.controls.keyboard.down(69, FUNC.fireworks.create)
	FUNC.controls.keyboard.down(82, FUNC.fireworks.create)
}


