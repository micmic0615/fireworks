FUNC.draw = {
	units:function(){
		var ctx = GLOBALS.layers['main'].context

		for (var i = 0; i < SYS.units.length; i++) {
			var p = SYS.units[i]
			ctx.beginPath()
			ctx.arc(p.property.locX, p.property.locY, p.property.size, 0, 2 * Math.PI, false)

			switch(p.property.color){
				case 0: var colorString = '255,0,0';break
				case 1: var colorString = '0,255,0';break
				case 2: var colorString = '0,0,255';break
				case 3: var colorString = '255,255,0';break
				case 4: var colorString = '255,0,255';break
				case 5: var colorString = '0,255,255';break
			}

			var gradient = ctx.createRadialGradient(p.property.size, p.property.size, 0, p.property.size, p.property.size, p.property.size);
			gradient.addColorStop(0, 'rgba(255,255,255, 1)');
			gradient.addColorStop(0.075, 'rgba(255,255,255, 1)');
			gradient.addColorStop(0.18, 'rgba('+ colorString +', 0.25 )');
			gradient.addColorStop(1, 'rgba('+ colorString +',0)');

			ctx.fillStyle = gradient

			ctx.globalAlpha = 1
			ctx.translate(p.property.locX - p.property.size,p.property.locY - p.property.size)						
			ctx.fillRect(p.property.size - 50,p.property.size - 50,100,100)
			ctx.translate((p.property.locX - p.property.size)*-1,(p.property.locY - p.property.size)*-1)	

			ctx.closePath()
			ctx.fill()
		}
	}
}

