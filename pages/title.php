<div id="page-title" class="page VP"><div class="VC"> 
	<section>
		<p>
			<h1 class="slimText titleText">PYRO MAESTRO</h1>
			<h6 class="slimText" style="letter-spacing:2px">demo</h6> 

			<br>
			<br>

			<h4 class="slimText optionText disabled">campaign</h4>
			<h4 class="slimText optionText" onclick="gotoGame()">exhibition</h4>
		</p>
	</section>
</div></div>

<script type="text/javascript">
	addEvent(window, 'load', function(){
		GLOBALS.audio = new Audio('audio/GymnopedeNo1_short.mp3')
		
		addEvent(GLOBALS.audio, 'canplaythrough', function(){
			GLOBALS.loadedAudio = true
		});

	});

	function gotoGame(){
		if (GLOBALS.loadedAudio){
			FUNC.scoring.start()

			document.getElementById('page-title').style.opacity = 0
			document.getElementById('page-exhibition').style.display = 'block'

			requestAnimationFrame(function(){
				document.getElementById('page-exhibition').style.opacity = 1
				setTimeout(function(){
					document.getElementById('page-title').style.display = 'none'
				},1000)
			})
		} else {
			alert('audio still loading')
		}
	}
</script>