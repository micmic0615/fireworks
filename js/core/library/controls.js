FUNC.controls = {
	getMouseLoc:function(){
		addEvent(window, 'mousemove', function(event){
			var rect = document.body.getBoundingClientRect();
	        SYS.controls.mouse = {
				x: Math.round(((event.clientX - rect.left) / rect.width)*GLOBALS.resolution.width),
				y: Math.round(((event.clientY - rect.top) / rect.height)*GLOBALS.resolution.height)
	        };
		});
	}
	
}