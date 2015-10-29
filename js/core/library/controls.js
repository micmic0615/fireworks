FUNC.controls = {
	mouse:{
		click:function(func){FUNC.controls.mouse.execute(func, 'click')},
		down:function(func){FUNC.controls.mouse.execute(func, 'mousedown')},
		up:function(func){FUNC.controls.mouse.execute(func, 'mouseup')},
		move:function(func){FUNC.controls.mouse.execute(func, 'mousemove')},

		update:function(event){
			var rect = document.body.getBoundingClientRect();
	        SYS.controls.mouse = {
				x: Math.round(((event.clientX - rect.left) / rect.width)*GLOBALS.resolution.width),
				y: Math.round(((event.clientY - rect.top) / rect.height)*GLOBALS.resolution.height)
	        };
		},
		
		execute:function(func, action){
			addEvent(window, action, function(event){
				FUNC.controls.mouse.update(event)
				if (func != undefined){func()}
			});
		}
	},
	keyboard:{
		down:function(key,func){var obj = {key:key,func:func,action:'keydown'};SYS.controls.keyboard.push(obj)},
		up:function(key,func){var obj = {key:key,func:func,action:'keyup'};SYS.controls.keyboard.push(obj)}
	}
}

	