OBJ.units.prototype.birth = function(){
	this.property.state = 0
	var baseLifeSpan = 60
	this.property.lifespan = baseLifeSpan
	this.property.baseLifeSpan = baseLifeSpan

	switch(this.property.type){

		case 'default':
			this.property.locX = Math.round((Math.random()*SYS.doc.width*0.1 - SYS.doc.width*0.05) + SYS.doc.halfWidth)
			this.property.locY = Math.round(SYS.doc.height*1.01)
			this.property.targetX = SYS.controls.mouse.x
			this.property.targetY = SYS.controls.mouse.y

			var colorRan = Math.floor(Math.random()*GLOBALS.fireworks.colorRange) 

			switch(colorRan){
				case 0: var colorString = '255,0,0';break
				case 1: var colorString = '0,255,0';break
				case 2: var colorString = '0,0,255';break
				case 3: var colorString = '255,255,0';break
				case 4: var colorString = '255,0,255';break
				case 5: var colorString = '0,255,255';break
			}

			this.property.color = colorString
			this.property.size = 30
			this.property.particleMin = 2
			this.property.particleMax = 4
			
			this.property.speed = (Math.sqrt(Math.pow(this.property.targetX - this.property.locX,2) + Math.pow(this.property.targetY - this.property.locY,2)) / baseLifeSpan)   /  (baseLifeSpan*0.5)
			this.property.angle = Math.atan2(this.property.targetY - this.property.locY, this.property.targetX - this.property.locX)

			this.property.offset = {}
			this.property.offset.strength = Math.random()*5
			this.property.offset.angle = this.property.angle + (Math.floor(Math.random()*2)*-2+1)*90*Math.PI/180
			break
	}
}


OBJ.units.prototype.travel = function(){
	switch(this.property.type){
		case 'default':
			this.property.targetX += Math.cos(this.property.offset.angle)*this.property.offset.strength
			this.property.targetY += Math.sin(this.property.offset.angle)*this.property.offset.strength
			this.property.angle = Math.atan2(this.property.targetY - this.property.locY, this.property.targetX - this.property.locX)
			break
	}

	var distance = Math.sqrt(Math.pow(this.property.targetX - this.property.locX,2) + Math.pow(this.property.targetY - this.property.locY,2)) 
	if (this.property.lifespan > 0){
		this.property.lifespan--
		this.property.locX += Math.cos(this.property.angle)*((this.property.baseLifeSpan-this.property.lifespan)*this.property.speed)
		this.property.locY += Math.sin(this.property.angle)*((this.property.baseLifeSpan-this.property.lifespan)*this.property.speed)

		var particleRandom = Math.floor(Math.random()*(this.property.particleMax - this.property.particleMin)) + this.property.particleMin
		while(particleRandom > 0){
			particleRandom--
			this.particleGen()
		}
	} else {
		this.property.state = 1
	}
}

OBJ.units.prototype.particleGen = function(){
	var particle = {}

	var weight = (Math.random()*1.5 + 0.5)
	particle.locX = this.property.locX
	particle.locY = this.property.locY
	particle.color = this.property.color
	particle.size = this.property.size*weight/10
	particle.angle = Math.random()*360*Math.PI/180
	particle.speed = ((weight*15)+25)/this.property.baseLifeSpan
	particle.lifespan = (this.property.baseLifeSpan*weight*0.5)*(Math.random()*1+0.5)
	particle.baseLifeSpan = particle.lifespan
	GLOBALS.particles.push(particle)
}

OBJ.units.prototype.particleBoom = function(){
	var particle = {}

	var weight = (Math.random()*20 + 5)
	particle.locX = this.property.locX
	particle.locY = this.property.locY
	particle.color = this.property.color
	particle.size = this.property.size*weight/50
	particle.angle = Math.random()*360*Math.PI/180
	particle.speed = (weight*10)/this.property.baseLifeSpan
	particle.lifespan = (this.property.baseLifeSpan*weight*0.5/5)*(Math.random()*1+0.5)
	particle.baseLifeSpan = particle.lifespan
	GLOBALS.particles.push(particle)
}

OBJ.units.prototype.boom = function(){
	var particleRandom = Math.random()*50 + 50
	while(particleRandom > 0){
		particleRandom--
		this.particleBoom()
	}

	for (var i = 0; i < SYS.units.length; i++) {
		var p = SYS.units[i]
		if (this.id == p.id){SYS.units.splice(i,1);break}
	}
}