FUNC.notes = {}

OBJ.units.prototype.note_update = function(){
	this.lifeSpan = GLOBALS.score.time - this.property.noteGen
	if (this.lifeSpan < GLOBALS.score.playDelay){
		FUNC.notes.travel(this)
	} else {
		FUNC.notes.die(this)
		delete FUNC.update['unit_'+this.ID]
		FUNC.events.destroy.units(this)
	}
}

FUNC.notes.set = function(params){
	var node = FUNC.events.create.units({type:'note'})
	node.property = params
	node.property.locX = SYS.screen.halfWidth
	node.property.locY = 0

	node.property.flare = FUNC.particles.create({
		locX:params.locX,
		locY:params.locY,
		lifeSpan:60*GLOBALS.score.tresh2,
		forceAngle:0,
		forceMagnitude:0,
		forceDecay:0,
		flicker:0,
		type:'note_' + node.property.key,
		zIndex:-1
	})

	if (node.property.key == 'hold'){
		var release = FUNC.events.create.units({type:'note'})
		for (var i = 0; i < GLOBALS.score.sheet.length; i++) {
			var p = GLOBALS.score.sheet[i]
			if (p.key == 'release'){
				release.property = p
				GLOBALS.score.sheet.splice(i,1)
				break
			}
		}

		release.property.locX = SYS.screen.halfWidth
		release.property.locY = -100

		var linkNode = {
			hold:node,
			release:release,
			bar:FUNC.particles.create({
				locX:SYS.screen.halfWidth,
				locY:0,
				lifeSpan:10,
				forceAngle:0,
				forceMagnitude:0,
				forceDecay:0,
				flicker:0,
				type:'note_holdbar',
				zIndex:-2
			})
		}
		GLOBALS.score.links.push(linkNode)

		release.property.flare = FUNC.particles.create({
			locX:params.locX,
			locY:-100,
			lifeSpan:60*GLOBALS.score.tresh2,
			forceAngle:0,
			forceMagnitude:0,
			forceDecay:0,
			flicker:0,
			type:'note_' + release.property.key,
			zIndex:-1
		})

		FUNC.update['unit_'+release.ID] = function(){release.note_update()}
	} 

	FUNC.update['unit_'+node.ID] = function(){node.note_update()}
}

FUNC.notes.travel = function(node){
	node.property.locY = (node.lifeSpan/GLOBALS.score.playDelay)*SYS.screen.height*0.9
	node.property.flare.property.locY = node.property.locY
	node.property.flare.property.lifeSpan = node.property.flare.property.baseLifeSpan

}

FUNC.notes.die = function(node){
	node.property.locY = (node.lifeSpan/GLOBALS.score.playDelay)*SYS.screen.height*0.9
	node.property.flare.property.locY = node.property.locY
	node.property.flare.property.lifeSpan = node.property.flare.property.baseLifeSpan
}