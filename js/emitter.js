$(document).ready(function(){
	init();
});

function init() {

	var t = TweenMax;
	var tl = new TimelineMax({paused:true});

	var wrapper = $('#wrapper');

	var blobs;

	for (var i = 0; i<600; i++) {

		blobs = $('<div class="blob"></div>').appendTo(wrapper);

		t.set(blobs, {x:random(window.innerWidth / 2, window.innerWidth / 2), y:random(window.innerHeight / 2, window.innerHeight / 2), scale:random(0.1, 1)});


		tl.to(blobs, random(3, 6), {physics2D:{velocity:random(200, 400), angle:random(0, 360), gravity:30, friction:0.03}, onComplete:bottom, onCompleteParams:[blobs, "{self}", i], force3D:true, repeat:5}, random(0, 4));

	}

	function bottom(blobs, tl, i) {
		//t.to(blobs, Math.random() * 5 + 5, {y:Math.random() * 10, x:Math.random() * 10, physics2D:{gravity:200, friction:0.005}, force3D:true, opacity:1, ease:Elastic.easeOut});


		//tl.pause();
	}

	tl.play();





}

function random(min, max) {
  if (max == null) { max = min; min = 0; }
  return Math.random() * (max - min) + min;
}