FUNC.draw = {
	// main:function(){
	// 	var ctx = GLOBALS.layers['main'].context
		
	// 	ctx.beginPath()

	// 	FUNC.loop.units(function(unit){
	// 		if (unit.property.state == 0){
	// 			switch(unit.property.type){
	// 				case 'default':
	// 					var gradient = ctx.createRadialGradient(unit.property.size, unit.property.size, 0, unit.property.size, unit.property.size, unit.property.size);
	// 					gradient.addColorStop(0, 'rgba(255,255,255, 1)');
	// 					gradient.addColorStop(0.05, 'rgba(255,255,255, 1)');
	// 					gradient.addColorStop(0.15, 'rgba('+ unit.property.color +', 0.25 )');
	// 					gradient.addColorStop(1, 'rgba('+ unit.property.color +',0)');
	// 			}

	// 			ctx.fillStyle = gradient

	// 			ctx.translate(unit.property.locX - unit.property.size,unit.property.locY - unit.property.size)						
	// 			ctx.fillRect(unit.property.size - 50,unit.property.size - 50,100,100)
	// 			ctx.translate((unit.property.locX - unit.property.size)*-1,(unit.property.locY - unit.property.size)*-1)	

				
	// 		}
	// 	})

	// 	ctx.closePath()
	// 	ctx.fill()
	// },
	// trails:function(){
	// 	var ctx = GLOBALS.layers['trails'].context	

	// 	ctx.beginPath()
	// 	for (var i = 0; i < GLOBALS.particles.length; i++) {
	// 		var p = GLOBALS.particles[i]

	// 		var gradient = ctx.createRadialGradient(p.size, p.size, 0, p.size, p.size, p.size);
	// 		gradient.addColorStop(0, 'rgba(255,255,255, 1)');
	// 		gradient.addColorStop(0.05, 'rgba(255,255,255, 1)');
	// 		gradient.addColorStop(0.15, 'rgba('+ p.color +', 0.25 )');
	// 		gradient.addColorStop(1, 'rgba('+ p.color +',0)');
	// 		ctx.fillStyle = gradient

	// 		ctx.globalAlpha = (p.lifespan/p.baseLifeSpan)*(Math.random()*1+0.5)
	// 		ctx.translate(p.locX - p.size,p.locY - p.size)						
	// 		ctx.fillRect(p.size - 50,p.size - 50,100,100)
	// 		ctx.translate((p.locX - p.size)*-1,(p.locY - p.size)*-1)	
	// 	}
		
	// 	ctx.closePath()
	// 	ctx.fill()
	// }
	// pixi:function(){
		
	// 		// create a new Sprite using the texture
	// 	var bunny = new PIXI.Sprite(texture);
	 
	// 	// center the sprites anchor point
	// 	bunny.anchor.x = 0.5;
	// 	bunny.anchor.y = 0.5;
	 
	// 	// move the sprite t the center of the screen
	// 	bunny.position.x = 200;
	// 	bunny.position.y = 150;
	// }
}

