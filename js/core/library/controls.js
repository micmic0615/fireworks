FUNC.controls = {
	mouse:{
		click:function(func){FUNC.controls.mouse.execute(func,'click')},
		down:function(func){FUNC.controls.mouse.execute(func,'mousedown')},
		up:function(func){FUNC.controls.mouse.execute(func,'mouseup')},
		move:function(func){FUNC.controls.mouse.execute(func,'mousemove')},

		update:function(event){
			var rect = document.body.getBoundingClientRect()
	        SYS.controls.mouse = {
				x: Math.round(((event.clientX - rect.left) / rect.width)*SYS.screen.width),
				y: Math.round(((event.clientY - rect.top) / rect.height)*SYS.screen.height)
	        };
		},
		
		execute:function(func,action){
			addEvent(window, action, function(event){
				FUNC.controls.mouse.update(event)
				if (func != undefined){func()}
			});
		}
	},
	keyboard:{
		limiter:[],
		keyConvert:function(key){
			var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'space']
			var code = [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,32]
			for (var i = 0; i < alphabet.length; i++) {if(alphabet[i] == key){return code[i];break}}
		},
		down:function(key,func){var obj = {key:FUNC.controls.keyboard.keyConvert(key),func:func,action:'keydown'};SYS.controls.keyboard.push(obj)},
		up:function(key,func){var obj = {key:FUNC.controls.keyboard.keyConvert(key),func:func,action:'keyup'};SYS.controls.keyboard.push(obj)}
	}
}

	