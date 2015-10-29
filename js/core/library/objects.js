OBJ.layers = function(sort){
	this.canvas = document.createElement('canvas')
	this.context = this.canvas.getContext('2d')
	this.sort = sort
	this.ID = SYS.IDs.layers
}

OBJ.units = function(property){
	this.property = property
	this.ID = SYS.IDs.units
}
