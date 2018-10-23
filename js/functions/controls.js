FUNC.initialize_after.keybindings = function(){
	FUNC.controls.keyboard.down('S',function(){
		FUNC.emitter.set({
			type:"default",
			locX:Math.round(SYS.screen.halfWidth-(0.35*SYS.screen.halfWidth)),
			locY:Math.round(SYS.screen.height*1 - 30),
			targetX:SYS.screen.width*0.125,
			targetY:SYS.screen.height*0.45,
			lifeSpan:60
		})
		FUNC.scoring.read('small')
	})

	FUNC.controls.keyboard.down('D',function(){
		FUNC.emitter.set({
			type:"default",
			locX:Math.round(SYS.screen.halfWidth-(0.25*SYS.screen.halfWidth)),
			locY:Math.round(SYS.screen.height*1 - 30),
			targetX:SYS.screen.width*0.25,
			targetY:SYS.screen.height*0.45,
			lifeSpan:60
		})
		FUNC.scoring.read('small')
	})

	FUNC.controls.keyboard.down('F',function(){
		FUNC.emitter.set({
			type:"big",
			locX:Math.round(SYS.screen.halfWidth-(0.15*SYS.screen.halfWidth)),
			locY:Math.round(SYS.screen.height*1 - 30),
			targetX:SYS.screen.width*0.375,
			targetY:SYS.screen.height*0.25,
			lifeSpan:60
		})
		FUNC.scoring.read('big')
	})

	FUNC.controls.keyboard.down('J',function(){
		FUNC.emitter.set({
			type:"big",
			locX:Math.round(SYS.screen.halfWidth+(0.15*SYS.screen.halfWidth)),
			locY:Math.round(SYS.screen.height*1 - 30),
			targetX:SYS.screen.width*0.625,
			targetY:SYS.screen.height*0.25,
			lifeSpan:60
		})
		FUNC.scoring.read('big')
	})

	FUNC.controls.keyboard.down('K',function(){
		FUNC.emitter.set({
			type:"default",
			locX:Math.round(SYS.screen.halfWidth+(0.25*SYS.screen.halfWidth)),
			locY:Math.round(SYS.screen.height*1 - 30),
			targetX:SYS.screen.width*0.75,
			targetY:SYS.screen.height*0.45,
			lifeSpan:60
		})
		FUNC.scoring.read('small')
	})

	FUNC.controls.keyboard.down('L',function(){
		FUNC.emitter.set({
			type:"default",
			locX:Math.round(SYS.screen.halfWidth+(0.35*SYS.screen.halfWidth)),
			locY:Math.round(SYS.screen.height*1 - 30),
			targetX:SYS.screen.width*0.875,
			targetY:SYS.screen.height*0.45,
			lifeSpan:60
		})
		FUNC.scoring.read('small')
	})

	FUNC.controls.keyboard.down('space',function(){
		GLOBALS.fountain = true
		FUNC.scoring.read('hold')
	})

	FUNC.controls.keyboard.up('space', function(){
		GLOBALS.fountain = false
		FUNC.scoring.read('release')
	})

	setInterval(function(){
		if (GLOBALS.fountain == true){
			FUNC.emitter.set({
				type:"fountain",
				locX:Math.round(SYS.screen.halfWidth),
				locY:Math.round(SYS.screen.height*1 - 30),
				targetX:SYS.screen.halfWidth,
				targetY:SYS.screen.height*0.35,
				lifeSpan:45
			})
		} 
	},1000/20)
}