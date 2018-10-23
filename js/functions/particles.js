FUNC.particles = {}
FUNC.particles.types = {}

FUNC.particles.create = function(property){
	var particle = new PIXI.Sprite(SYS.PIXI.textures[property.type])
	
	particle.anchor.x = 0.5;
	particle.anchor.y = 0.5;

	particle.property = property
	particle.property.baseLifeSpan = property.lifeSpan
	particle.particle = true

	particle.position.x = SYS.doc.width * 2
	particle.position.y = SYS.doc.height * 2

	particle.zIndex = property.zIndex

	SYS.PIXI.stage.addChild(particle);

	return particle	
}

FUNC.particles.travel = function(p){
	p.position.x = p.property.locX
	p.position.y = p.property.locY

	if (p.property.flicker == undefined){
		var lifeRatio = (p.property.lifeSpan/p.property.baseLifeSpan) * (1 + (Math.random()*1 - 0.5))
	} else {
		var lifeRatio = (p.property.lifeSpan/p.property.baseLifeSpan) * (1 + ((Math.random()*p.property.flicker) - (p.property.flicker*0.5)))
	}
	
	if (lifeRatio > 1){lifeRatio = 1}
	
	p.scale.x = lifeRatio
	p.scale.y = lifeRatio
	p.alpha = lifeRatio
}

FUNC.update['particleEngine'] = function(){
	for (var i = 0; i < SYS.PIXI.stage.children.length; i++) {
		var p = SYS.PIXI.stage.children[i]
		if (p.particle == true){
			if (p.property.lifeSpan > 0){
				p.property.lifeSpan --
				if (FUNC.particles.types[p.property.type] != undefined){
					FUNC.particles.types[p.property.type](p)
				}
				FUNC.particles.travel(p)
			} else {
				SYS.PIXI.stage.removeChild(p)
			}
		}
	}
	sortArray(SYS.PIXI.stage.children, 'zIndex')
}