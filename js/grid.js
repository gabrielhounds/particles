$(document).ready(function(){
	init();
});

function init() {

	var t = TweenMax;

	var wrapper = $('#wrapper');

	var blobs;

	//var blob = $('<div>', { class : 'blob' });

	//var xRan, yRan;

	var xNum = 10;
	var yNum = 10;

	var xSpacing = window.innerWidth / xNum;
	var ySpacing = window.innerHeight / yNum;

	for (var i = 0; i<xNum; i++) {
		for(var j = 0; j<yNum; j++) {

			//xRan = random(-60, 60);
			//yRan = random(-60, 60);

			blobs = $('<div class="blob"></div>').appendTo(wrapper);

			t.set(blobs, {x:i*xSpacing, y:j*ySpacing});

		}
	}
}

function random(min, max) {
  if (max == null) { max = min; min = 0; }
  return Math.random() * (max - min) + min;
}