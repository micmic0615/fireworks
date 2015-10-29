FUNC.events = {
	create:{
		units:function(property, name){
			SYS.IDs.units++
			var newUnit = new OBJ.units(property)
			SYS.declare(name,'units', newUnit)
			return newUnit
		},
		layers:function(sort,name){
			SYS.IDs.layers++
			var newLayer = new OBJ.layers(sort)
			SYS.declare(name,'layers', newLayer)
			return newLayer
		}
	}
}

FUNC.loop = {
	units:function(func){
		for (var i = 0; i < SYS.units.length; i++) {
			func(SYS.units[i])
		}
	}
}