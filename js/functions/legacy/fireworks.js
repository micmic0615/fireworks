FUNC.fireworks = {
	create:function(type){
		if (type == undefined){type = 'default'}
		var node = FUNC.events.create.units({type:type})
		node.birth()
	}
}