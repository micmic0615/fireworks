FUNC.scoring = {}

FUNC.scoring.initialize = function(){
	GLOBALS.score.baseSheet = [
		{time:0.0, key:'small'},
		{time:1.0, key:'small'},
		{time:2.4, key:'small'},
		{time:3.2, key:'small'},
		{time:4.7, key:'small'},
		{time:5.5, key:'small'},
		{time:7.0, key:'small'},
		{time:7.8, key:'small'},
		{time:9.4, key:'big'},
		{time:10.2, key:'small'},
		{time:11.0, key:'small'},
		{time:11.8, key:'small'},
		{time:12.5, key:'small'},
		{time:13.3, key:'small'},
		{time:14.0, key:'small'},
		{time:14.9, key:'small'},
		{time:15.6, key:'small'},
		{time:16.5, key:'hold'},
		{time:17.2, key:'small'},
		{time:18.0, key:'release'},
		{time:18.7, key:'big'},
		{time:19.5, key:'small'},
		{time:21.1, key:'small'},
		{time:21.8, key:'big'},
		{time:23.4, key:'big'},
		{time:24.2, key:'small'},
		{time:25.7, key:'small'},
		{time:26.5, key:'big'},
		{time:28.0, key:'hold'},
		{time:28.9, key:'big'},
		{time:29.7, key:'small'},
		{time:30.4, key:'small'},
		{time:31.2, key:'small'},
		{time:31.9, key:'big'},
		{time:32.7, key:'small'},
		{time:33.5, key:'small'},
		{time:34.3, key:'big'},
		{time:35.1, key:'small'},
		{time:35.9, key:'small'},
		{time:36.5, key:'release'},
		{time:37.4, key:'big'},
		{time:38.2, key:'small'},
		{time:39.7, key:'big'},
		{time:40.5, key:'small'},
		{time:42.1, key:'small'},
		{time:42.8, key:'small'},
		{time:44.4, key:'small'},
		{time:45.2, key:'big'},
		{time:46.8, key:'big'},
		{time:47.5, key:'small'}
	]

	FUNC.update.scoreUpdate = function(){FUNC.scoring.run()}
}

FUNC.scoring.start = function(){
	GLOBALS.runGame = true
	GLOBALS.score.value = 0
	document.getElementById('exhi-score').innerHTML = GLOBALS.score.value
	GLOBALS.score.timeRef = new Date().getTime() / 1000
	GLOBALS.score.time = -1*GLOBALS.score.playDelay
	GLOBALS.score.sheet = GLOBALS.score.baseSheet.slice(0)
	GLOBALS.score.active = []
	GLOBALS.score.links = []

	for (var i = 0; i < GLOBALS.score.sheet.length; i++) {
		var p = GLOBALS.score.sheet[i]
		p.noteGen = Math.round((p.time - GLOBALS.score.playDelay)*10)/10
	}

	setTimeout(function(){
		GLOBALS.audio.currentTime = 0
		GLOBALS.audio.play()
	},1000* GLOBALS.score.playDelay)
}

FUNC.scoring.run = function(){
	if (GLOBALS.runGame == true){
		GLOBALS.score.timeCur = new Date().getTime() / 1000
		var delayedTime = GLOBALS.score.playDelay*-1 - (GLOBALS.score.timeRef - GLOBALS.score.timeCur)

		if (delayedTime < GLOBALS.audio.duration){
			GLOBALS.score.time = delayedTime
			for (var i = 0; i < GLOBALS.score.sheet.length; i++) {
				var p = GLOBALS.score.sheet[i]
				if (p.noteGen  == Math.round(GLOBALS.score.time*10)/10){
					FUNC.notes.set(p)
					if (p.key != 'hold'){GLOBALS.score.active.push(p)}
					GLOBALS.score.sheet.splice(i,1)
					break
				}
			}

			for (var i = 0; i < GLOBALS.score.links.length; i++) {
				var p = GLOBALS.score.links[i]
				console.log(p)

				if (GLOBALS.score.time > p.release.property.time + GLOBALS.score.tresh1 ){
					GLOBALS.score.links.splice(i,1)
				} else {
					p.bar.property.lifeSpan = p.bar.property.baseLifeSpan
					p.bar.position.y = (p.hold.property.flare.position.y - p.release.property.flare.position.y)/2 + p.release.property.flare.position.y
					p.bar.scale.y = (p.hold.property.flare.position.y -  p.release.property.flare.position.y)/10
					console.log(p.hold.property.flare.position.y  + ' | ' + p.bar.position.y + ' | ' + p.release.property.flare.position.y )
				}
			}

			for (var i = 0; i < GLOBALS.score.active.length; i++) {
				var p = GLOBALS.score.active[i]
				if (GLOBALS.score.time > p.time + GLOBALS.score.tresh1 ){
					GLOBALS.score.active.splice(i,1)
				}
			}
		} else {
			GLOBALS.runGame = false
			GLOBALS.fountain = false

			GLOBALS.audio.pause()

			setTimeout(function(){
				document.getElementById('page-exhibition').style.opacity = 0
				document.getElementById('page-evaluation').style.display = 'table'
				document.getElementById('exhi-score').innerHTML = GLOBALS.score.value
				document.getElementById('eval-score').innerHTML = GLOBALS.score.value

				requestAnimationFrame(function(){
					document.getElementById('page-evaluation').style.opacity = 1
					setTimeout(function(){
						document.getElementById('page-exhibition').style.display = 'none'
					},1000)
				})
			},1000*GLOBALS.score.postDelay)
		}
	}
}

FUNC.scoring.read = function(key){
	if (key == 'big' || key == 'small'){
		for (var i = 0; i < GLOBALS.score.active.length; i++) {
			var p = GLOBALS.score.active[i]
			if (p.time + GLOBALS.score.tresh1 > GLOBALS.score.time && p.time - GLOBALS.score.tresh1 < GLOBALS.score.time){
				if (p.key == key){FUNC.scoring.update('perfect',i)} else {FUNC.scoring.update('miss',i)}; break
			} else if (p.time + GLOBALS.score.tresh2 > GLOBALS.score.time && p.time - GLOBALS.score.tresh2 < GLOBALS.score.time) {
				if (p.key == key){FUNC.scoring.update('good',i)} else {FUNC.scoring.update('miss',i)}; break
			} else {
				FUNC.scoring.update('fail')
			}
		}
	} else if (key == 'hold'){
		for (var i = 0; i < GLOBALS.score.links.length; i++) {
			var p = GLOBALS.score.links[i].hold.property
			if (p.time + GLOBALS.score.tresh1 > GLOBALS.score.time && p.time - GLOBALS.score.tresh1 < GLOBALS.score.time){
				FUNC.scoring.update('perfect',i); break
			} else if (p.time + GLOBALS.score.tresh2 > GLOBALS.score.time && p.time - GLOBALS.score.tresh2 < GLOBALS.score.time) {
				FUNC.scoring.update('good',i); break
			} else {
				FUNC.scoring.update('fail')
			}
		}
	} else if (key == 'release'){
		for (var i = 0; i < GLOBALS.score.links.length; i++) {
			var p = GLOBALS.score.links[i].release.property
			if (p.time + GLOBALS.score.tresh1 > GLOBALS.score.time && p.time - GLOBALS.score.tresh1 < GLOBALS.score.time){
				FUNC.scoring.update('perfect',i); break
			} else if (p.time + GLOBALS.score.tresh2 > GLOBALS.score.time && p.time - GLOBALS.score.tresh2 < GLOBALS.score.time) {
				FUNC.scoring.update('good',i); break
			} else {
				FUNC.scoring.update('fail')
			}
		}
	}
}

FUNC.scoring.update = function(type, instance){
	FUNC.emitter.set({
		type:"hit_" + type,
		locX:Math.round(SYS.screen.halfWidth),
		locY:Math.round(SYS.screen.halfHeight + SYS.screen.height*0.1),
		targetX:Math.round(SYS.screen.halfWidth),
		targetY:Math.round(SYS.screen.halfHeight - SYS.screen.height*0.2),
		lifeSpan:60
	})

	document.getElementById('exhi-score').innerHTML = GLOBALS.score.value
	switch(type){
		case 'perfect':
			GLOBALS.score.value += 10
			break 
		case 'good':
			GLOBALS.score.value += 5
			break

		case 'miss':
			GLOBALS.score.value -= 3
			break

		case 'fail':
			GLOBALS.score.value -= 5
			break
	}
}

FUNC.initialize_after.scoring = function(){
	FUNC.scoring.initialize()
}