FUNC.update = {
	test:function(){
		var chaosSum = 0
		var faithfulSum = 0

		if (GLOBALS.pull == 1){
			if (GLOBALS.force < 75000){GLOBALS.force += 1000}
			GLOBALS.center.x = SYS.controls.mouse.x
			GLOBALS.center.y = SYS.controls.mouse.y
		} else {
			if (GLOBALS.force > 100){GLOBALS.force-= 500}
		}

		var jitterNormal = 5
		var jitterPull = 10

		for (var i = 0; i < SYS.units.length; i++) {
			var p = SYS.units[i]

			var chaosX = Math.abs(p.property.locX - GLOBALS.center.x/2)
			var chaosY = Math.abs(p.property.locY - GLOBALS.center.y/2)

			var distance = Math.sqrt(chaosX*chaosX + chaosY*chaosY)
			var maxDistance = Math.sqrt(GLOBALS.center.x*GLOBALS.center.x + GLOBALS.center.y*GLOBALS.center.y)

			if (GLOBALS.pull == 1){
				var factor = (distance*0.05) + 0.25
				var angle = Math.atan2(GLOBALS.center.y - p.property.locY, GLOBALS.center.x - p.property.locX) + (45*Math.PI/180)
				var randomX = Math.round(Math.random()*jitterPull - jitterPull*0.5)
				var randomY = Math.round(Math.random()*jitterPull - jitterPull*0.5)
			} else {
				var factor = (((maxDistance - distance)+GLOBALS.force)*0.001)
				var angle = Math.atan2(GLOBALS.center.y - p.property.locY, GLOBALS.center.x - p.property.locX) + (90*Math.PI/180)
				var randomX = Math.round(Math.random()*jitterNormal - jitterNormal*0.5)
				var randomY = Math.round(Math.random()*jitterNormal - jitterNormal*0.5)
			}

			factor = factor*(p.property.weight)

			var movX = (Math.cos(angle) * factor) + randomX
			var movY = (Math.sin(angle) * factor) + randomY

			p.moveX(movX)
			p.moveY(movY)			

			chaosSum += distance
			if (distance < 10){
				faithfulSum++
			}
		}
		
	}
}

