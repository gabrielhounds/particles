$(document).ready(function(){
	init();
});

function init() {

	var t = TweenMax;

	var wrapper = $('#wrapper');

	var blobs;

	//var blob = $('<div>', { class : 'blob' });


	var xRan, yRan;

	for (var i = 0; i<100; i++) {


		blobs = $('<div class="blob"></div>').appendTo(wrapper);

		t.set(blobs, {x:random(0, window.innerWidth), y:random(0, window.innerHeight)});

	}
}

function random(min, max) {
  if (max == null) { max = min; min = 0; }
  return Math.random() * (max - min) + min;
}