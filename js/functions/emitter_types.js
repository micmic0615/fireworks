FUNC.emitter.types.ui = function(node, params, sprite){
	node.property.offset = 0
	node.property.prevX = params.locX
	node.property.prevY = params.locY
	node.property.density = 4

	node.property.flare = FUNC.particles.create({
		locX:params.locX,
		locY:params.locY,
		lifeSpan:30,
		forceAngle:0,
		forceMagnitude:0,
		forceDecay:0,
		flicker:0,
		type:sprite,
		zIndex:1
	})
}


FUNC.emitter.types.default = function(node, params){
	node.property.offset = ranDir()* Math.random()*0.75
	node.property.prevX = params.locX
	node.property.prevY = params.locY
	node.property.density = 10

	node.property.particles = {
		count: 3,
		jitterStrength: 8,
		lifeBase: 15,
		lifeRandom: 30,
		forceAngle: 80,
		forceMagnitudeBase: 1,
		forceMagnitudeRandom: 3,
		forceDecay: 0.15,
		type: 'dust',
		zIndex: 0
	}

	node.property.flare = FUNC.particles.create({
		locX:params.locX,
		locY:params.locY,
		lifeSpan:30,
		forceAngle:node.property.angle,
		forceMagnitude:node.property.speed*0.35,
		forceDecay:0.15,
		type:'flare',
		zIndex:1
	})
}

FUNC.emitter.types.big = function(node, params){
	node.property.offset = ranDir()* Math.random()*0.5
	node.property.prevX = params.locX
	node.property.prevY = params.locY
	node.property.density = 10

	node.property.particles = {
		count: 2,
		jitterStrength: 4,
		lifeBase: 15,
		lifeRandom: 10,
		forceAngle: 80,
		forceMagnitudeBase: 0.5,
		forceMagnitudeRandom: 3,
		forceDecay: 0.15,
		type: 'dust3',
		zIndex: 0
	}

	node.property.flare = FUNC.particles.create({
		locX:params.locX,
		locY:params.locY,
		lifeSpan:30,
		forceAngle:node.property.angle,
		forceMagnitude:node.property.speed*0.35,
		forceDecay:0.15,
		type:'flare3',
		zIndex:1
	})

	node.property.boom = {
		countMin:15,
		countMax:20,
		lifeSpan:20,
		forceAngle:360,
		forceDistanceMin:80,
		forceDistanceMax:240,
		emitterType:'speck'
	}
}

FUNC.emitter.types.speck = function(node, params){
	node.property.offset = 0
	node.property.prevX = params.locX
	node.property.prevY = params.locY
	node.property.density = 10

	node.property.particles = {
		count: 2,
		jitterStrength: 2,
		lifeBase: 15,
		lifeRandom: 15,
		forceAngle: 40,
		forceMagnitudeBase: 1,
		forceMagnitudeRandom: 3,
		forceDecay: 0.15,
		type: 'dust2',
		zIndex: 0
	}

	node.property.flare = FUNC.particles.create({
		locX:params.locX,
		locY:params.locY,
		lifeSpan:30,
		forceAngle:node.property.angle,
		forceMagnitude:node.property.speed*0.35,
		forceDecay:0.15,
		type:'flare2',
		zIndex:1
	})
}

FUNC.emitter.types.fountain = function(node, params){
	node.property.offset = ranDir()* Math.random()*0.75
	node.property.prevX = params.locX
	node.property.prevY = params.locY
	node.property.density = 15

	node.property.particles = {
		count: 3,
		jitterStrength: 8,
		lifeBase: 45,
		lifeRandom: 15,
		forceAngle: 80,
		forceMagnitudeBase: 1,
		forceMagnitudeRandom: 3,
		forceDecay: 0.15,
		type: 'fountainDust',
		zIndex: 0
	}

	node.property.flare = FUNC.particles.create({
		locX:params.locX,
		locY:params.locY,
		lifeSpan:15,
		forceAngle:node.property.angle,
		forceMagnitude:node.property.speed*0.35,
		forceDecay:0.15,
		type:'fountainFlare',
		zIndex:1
	})
}