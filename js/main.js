$(document).ready(function(){
	init();
});

function init() {

	var control;

	var t = TweenMax;

	var wrapper = $('#wrapper');

	var blobs;

	//var blob = $('<div>', { class : 'blob' });

	var xSpacing = window.innerWidth / 10;
	var ySpacing = window.innerHeight / 10;

	var xRan, yRan;

	for (var i = 0; i<10; i++) {
		for(var j = 0; j<10; j++) {

			xRan = random(-60, 60);
			yRan = random(-60, 60);

			blobs = $('<div class="blob"></div>').appendTo(wrapper);

			t.set(blobs, {x:i*xSpacing + xRan, y:j*ySpacing + yRan});

		}
	}
}

function random(min, max) {
  if (max == null) { max = min; min = 0; }
  return Math.random() * (max - min) + min;
}