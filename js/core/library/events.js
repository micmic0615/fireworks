FUNC.events = {
	create:{
		units:function(property, name){
			SYS.IDs.units++
			var newUnit = new OBJ.units(property)
			SYS.declare(name,'units', newUnit)
			return newUnit
		},
		layers:function(zIndex,name){
			SYS.IDs.layers++
			var newLayer = new OBJ.layers(zIndex)
			SYS.declare(name,'layers', newLayer)
			return newLayer
		}
	},
	destroy:{
		units:function(unit){
			for (var i = 0; i < SYS.units.length; i++) {
				var p = SYS.units[i]
				if (unit.ID == p.ID){SYS.units.splice(i,1);break}
			}
		}
	},
}

FUNC.loop = {
	units:function(func){
		for (var i = 0; i < SYS.units.length; i++) {
			func(SYS.units[i])
		}
	}
}