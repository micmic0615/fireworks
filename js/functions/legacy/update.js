FUNC.update = {
	fireworks:function(){
		FUNC.loop.units(function(unit){
			switch(unit.property.state){
				case 0:unit.travel();break
				case 1:unit.boom();
			}
		})
	},
	particles:function(){
		for (var i = 0; i < GLOBALS.particles.length; i++) {
			var p = GLOBALS.particles[i]
			if (p.lifespan > 0){
				p.lifespan--

				p.speed*=0.975

				p.locX+=Math.cos(p.angle)*p.speed
				p.locY+=Math.sin(p.angle)*p.speed

				p.locY+=GLOBALS.gravity
			} else {
				GLOBALS.particles.splice(i,1)
			}
		}
	},
	debug:function(){
		var text = SYS.units.length + GLOBALS.particles.length 
		text += '<br>' + SYS.units.length 
		text += '<br>' + 'FPS:' + Math.round (1000/SYS.fps.draw.delta)
		text += '<br>' + 'CPS:' + Math.round (1000/SYS.fps.calc.delta)
		SYS.debug.write(text) 
	}
}

