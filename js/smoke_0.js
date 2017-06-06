$(document).ready(function(){
	init();
});

function init() {

	var t = TweenMax;
	var tl = new TimelineMax({paused:false});

	var wrapper = $('#wrapper');

	var xNum = 300;
	var yNum = 16;

	var xSpacing = window.innerWidth / xNum;
	var ySpacing = window.innerHeight / yNum;

	for (var i = 0; i<xNum; i++) {
		blobs = $('<div class="blob"></div>').appendTo(wrapper);

		t.set(blobs, {x:random(window.innerWidth / 2 - 10, window.innerWidth / 2 + 10 ), y:window.innerHeight, scaleX:random(2.0, 4.0), scaleY:random(3.0, 6.0), opacity:random(0.1, 0.5)});

		tl.to(blobs, random(10, 15), {physics2D:{velocity:random(500, 300), angle:random(250, 290), gravity:-20, friction:0.01}, opacity:0, force3D:true, repeat:-1}, random(0, 10));

	}

	wrapper.click( function() {
		tl.seek(0);
		tl.play();
	});

}

function random(min, max) {
  if (max == null) { max = min; min = 0; }
  return Math.random() * (max - min) + min;
}