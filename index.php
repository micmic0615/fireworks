<!DOCTYPE html>
<html>
<head>
<title></title>
<link rel="stylesheet" type="text/css" href="css/mmc/universal.css">
<link rel="stylesheet" type="text/css" href="css/mmc/general.css">
<link rel="stylesheet" type="text/css" href="css/style.css">

<script type="text/javascript" src="plugins/pixi.min.js"></script>

<script type="text/javascript" src="js/micmicJS/addEvent.js"></script>
<script type="text/javascript" src="js/micmicJS/sortArray.js"></script>
<script type="text/javascript" src="js/micmicJS/ranDir.js"></script>

<script type="text/javascript" src="js/core/system.js"></script>
<script type="text/javascript" src="js/core/initialize.js"></script>
<script type="text/javascript" src="js/core/config.js"></script>

<script type="text/javascript" src="js/core/library/objects.js"></script>
<script type="text/javascript" src="js/core/library/controls.js"></script>
<script type="text/javascript" src="js/core/library/events.js"></script>

<script type="text/javascript" src="js/functions/additional_ini.js"></script>
<script type="text/javascript" src="js/functions/controls.js"></script>
<script type="text/javascript" src="js/functions/emitter.js"></script>
<script type="text/javascript" src="js/functions/emitter_types.js"></script>
<script type="text/javascript" src="js/functions/particles.js"></script>
<script type="text/javascript" src="js/functions/particles_types.js"></script>
<script type="text/javascript" src="js/functions/notes.js"></script>
<script type="text/javascript" src="js/functions/scoring.js"></script>

<script type="text/javascript">
	FUNC.initialize_after.debug = SYS.debug.initialize
</script>
</head>
<body>

<div id="background"></div>
<div id="liner">
	<div id="keyHolder">
		<div class="VP keys"><div class="VC small"><h5 class="slimText">S</h5></div></div>
		<div class="VP keys"><div class="VC small"><h5 class="slimText">D</h5></div></div>
		<div class="VP keys"><div class="VC big"><h4 class="slimText">F</h4></div></div>
		<div class="VP space"><div class="VC"><h5 class="slimText">space</h5></div></div>
		<div class="VP keys"><div class="VC big"><h4 class="slimText">J</h4></div></div>
		<div class="VP keys"><div class="VC small"><h5 class="slimText">K</h5></div></div>
		<div class="VP keys"><div class="VC small"><h5 class="slimText">L</h5></div></div>
	</div>
</div>

<?php require 'pages/title.php'; ?>
<?php require 'pages/exhibition.php'; ?>
<?php require 'pages/evaluation.php'; ?>

<div id="foreground"></div>
<div id="imagesList" style="z-index:-999; display:none"><?php $pageArray = array();foreach (glob("images/*") as $filename) {$pageArray[] = $filename;};foreach ($pageArray as $row) {echo $row . '|';};?></div>
</body>
</html>