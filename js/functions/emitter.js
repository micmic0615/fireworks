FUNC.emitter = {}
FUNC.emitter.types = {}

OBJ.units.prototype.emitter_update = function(){
	if (this.property.lifeSpan > 0){
		this.property.lifeSpan--
		FUNC.emitter.travel(this)
	} else {
		FUNC.emitter.boom(this)
		delete FUNC.update['unit_'+this.ID]
		FUNC.events.destroy.units(this)
	}
}

FUNC.emitter.set = function(params){
	if (params.type == undefined){params.type = 'default'}
	var node = FUNC.events.create.units({type:params.type})
	
	node.property.lifeSpan = params.lifeSpan
	node.property.baseLifeSpan = params.lifeSpan
	node.property.overDensity = 0

	node.property.locX = params.locX
	node.property.locY = params.locY

	node.property.distance = Math.sqrt(Math.pow(params.targetX - params.locX,2) + Math.pow(params.targetY - params.locY,2))
	node.property.angle = Math.atan2(params.targetY - node.property.locY, params.targetX - node.property.locX)
	node.property.speed = node.property.distance/node.property.lifeSpan

	if (FUNC.emitter.types[node.property.type] != undefined){
		FUNC.emitter.types[node.property.type](node, params)
	} else {
		FUNC.emitter.types['ui'](node, params, node.property.type)
	}
	
	
	node.property.state = 0
	FUNC.update['unit_'+node.ID] = function(){node.emitter_update()}
}

FUNC.emitter.travel = function(node){
	node.property.angle += node.property.offset*Math.PI/180
	node.property.flare.property.forceAngle = node.property.angle

	var cosAngle = Math.cos(node.property.angle)
	var sinAngle = Math.sin(node.property.angle)
	var targetX = node.property.locX + cosAngle*(node.property.distance)
	var targetY = node.property.locY + sinAngle*(node.property.distance)

	node.property.locX += cosAngle*(node.property.speed)
	node.property.locY += sinAngle*(node.property.speed)

	var distance1 = Math.sqrt(Math.pow(targetX - node.property.locX,2) + Math.pow(targetY - node.property.locY,2))
	var distance2 = Math.sqrt(Math.pow(targetX - node.property.prevX,2) + Math.pow(targetY - node.property.prevY,2))
	var disDiff = (distance2 - distance1) + node.property.overDensity

	if (disDiff > node.property.density){
		node.property.prevX = node.property.locX
		node.property.prevY = node.property.locY

		if (disDiff - node.property.density > 0){
			node.property.overDensity = disDiff - node.property.density

			if (node.property.overDensity/node.property.density){
				var randomFactor = Math.ceil(node.property.overDensity/node.property.density)
				node.property.overDensity = node.property.overDensity%node.property.density
			}
		}
		
		if (node.property.particles != undefined){
			var random = 0
			while(randomFactor > 0){
				randomFactor--
				random += Math.ceil(Math.random()*node.property.particles.count)
			}

			while (random > 0){
				random--
				var jitterAngle = ((Math.random()*360)*Math.PI/180)
				var jitterStrength = Math.random()*node.property.particles.jitterStrength
				var locX = node.property.prevX + Math.cos(jitterAngle)*jitterStrength 
				var locY = node.property.prevY + Math.sin(jitterAngle)*jitterStrength 

				var randomLife = node.property.particles.lifeBase + Math.random()*node.property.particles.lifeRandom - node.property.particles.lifeRandom*0.5

				FUNC.particles.create({
					locX:locX,
					locY:locY,
					baseLifeSpan:randomLife,
					lifeSpan:randomLife,
					forceAngle:node.property.angle - Math.PI + ((Math.random()*node.property.particles.forceAngle - node.property.particles.forceAngle*0.5)*Math.PI/180),
					forceMagnitude:node.property.particles.forceMagnitudeBase + Math.random()*node.property.particles.forceMagnitudeRandom,
					forceDecay:node.property.particles.forceDecay,
					type:node.property.particles.type,
					zIndex:node.property.particles.zIndex
				})
			}
		}
		
	}

	node.property.flare.property.locX = node.property.prevX 
	node.property.flare.property.locY = node.property.prevY 
	node.property.flare.property.lifeSpan = node.property.flare.property.baseLifeSpan
}

FUNC.emitter.boom = function(node){
	var boom = node.property.boom

	if (boom != undefined){
		var particNum = boom.countMin + Math.round(Math.random()*(boom.countMax - boom.countMin))
		while(particNum > 0){
			particNum--

			var base = node.property
			var baseAngle = base.angle*180/Math.PI
			var fireAngle = baseAngle +  Math.floor(Math.random()*2)*2 - 1*Math.random()*(boom.forceAngle/2)

			var distance = boom.forceDistanceMin + Math.round(Math.random()*(boom.forceDistanceMax - boom.forceDistanceMin))

			var targetX = Math.cos(fireAngle)*distance
			var targetY = Math.sin(fireAngle)*distance

			FUNC.emitter.set({
				type:boom.emitterType,
				locX:base.locX,
				locY:base.locY,
				targetX:base.locX + targetX,
				targetY:base.locY + targetY,
				lifeSpan:boom.lifeSpan
			})
		}
	}
}


