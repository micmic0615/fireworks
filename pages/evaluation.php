<div id="page-evaluation" class="page VP"><div class="VC"> 
	<section>
		<p>
			<h3 class="slimText titleText">SCORE</h3>
			<h1 id="eval-score" class="slimText titleText">000</h1>
			<br>
			<br>

			<h4 class="slimText optionText" onclick="retry()">retry</h4>
		</p>
	</section>
</div></div>

<script type="text/javascript">
	
	function retry(){
		FUNC.scoring.start()

		document.getElementById('page-evaluation').style.opacity = 0
		document.getElementById('page-exhibition').style.display = 'block'

		requestAnimationFrame(function(){
			document.getElementById('page-exhibition').style.opacity = 1
			setTimeout(function(){
				document.getElementById('page-evaluation').style.display = 'none'
			},1000)
		})
	}
</script>