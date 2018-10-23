FUNC.particles.types.dust = function(p){
	if (p.property.forceMagnitude - p.property.forceDecay > 0){p.property.forceMagnitude -= p.property.forceDecay}
	p.property.locX += Math.cos(p.property.forceAngle)*p.property.forceMagnitude
	p.property.locY += Math.sin(p.property.forceAngle)*(p.property.forceMagnitude) + GLOBALS.gravity
}

FUNC.particles.types.dust2 = function(p){
	if (p.property.forceMagnitude - p.property.forceDecay > 0){p.property.forceMagnitude -= p.property.forceDecay}
	p.property.locX += Math.cos(p.property.forceAngle)*p.property.forceMagnitude
	p.property.locY += Math.sin(p.property.forceAngle)*(p.property.forceMagnitude) + GLOBALS.gravity
}

FUNC.particles.types.dust3 = function(p){
	if (p.property.forceMagnitude - p.property.forceDecay > 0){p.property.forceMagnitude -= p.property.forceDecay}
	p.property.locX += Math.cos(p.property.forceAngle)*p.property.forceMagnitude
	p.property.locY += Math.sin(p.property.forceAngle)*(p.property.forceMagnitude) + GLOBALS.gravity
}

FUNC.particles.types.flare = function(p){
	if (p.property.lifeSpan/p.property.baseLifeSpan < 0.95){
		if (p.property.forceMagnitude - p.property.forceDecay > 0){p.property.forceMagnitude -= p.property.forceDecay}
		p.property.locX += Math.cos(p.property.forceAngle)*p.property.forceMagnitude
		p.property.locY += Math.sin(p.property.forceAngle)*(p.property.forceMagnitude) + GLOBALS.gravity
	}
}

FUNC.particles.types.flare2 = function(p){
	if (p.property.lifeSpan/p.property.baseLifeSpan < 0.95){
		if (p.property.forceMagnitude - p.property.forceDecay > 0){p.property.forceMagnitude -= p.property.forceDecay}
		p.property.locX += Math.cos(p.property.forceAngle)*p.property.forceMagnitude
		p.property.locY += Math.sin(p.property.forceAngle)*(p.property.forceMagnitude) + GLOBALS.gravity
	}
}

FUNC.particles.types.flare3 = function(p){
	if (p.property.lifeSpan/p.property.baseLifeSpan < 0.95){
		if (p.property.forceMagnitude - p.property.forceDecay > 0){p.property.forceMagnitude -= p.property.forceDecay}
		p.property.locX += Math.cos(p.property.forceAngle)*p.property.forceMagnitude
		p.property.locY += Math.sin(p.property.forceAngle)*(p.property.forceMagnitude) + GLOBALS.gravity
	}
}

FUNC.particles.types.fountainDust = function(p){
	if (p.property.forceMagnitude - p.property.forceDecay > 0){p.property.forceMagnitude -= p.property.forceDecay}
	p.property.locX += Math.cos(p.property.forceAngle)*p.property.forceMagnitude
	p.property.locY += Math.sin(p.property.forceAngle)*(p.property.forceMagnitude) + GLOBALS.gravity
}

FUNC.particles.types.fountainFlare = function(p){
	if (p.property.lifeSpan/p.property.baseLifeSpan < 0.95){
		if (p.property.forceMagnitude - p.property.forceDecay > 0){p.property.forceMagnitude -= p.property.forceDecay}
		p.property.locX += Math.cos(p.property.forceAngle)*p.property.forceMagnitude
		p.property.locY += Math.sin(p.property.forceAngle)*(p.property.forceMagnitude) + GLOBALS.gravity
	}
}