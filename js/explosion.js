$(document).ready(function(){
	init();
});

function init() {

	var t = TweenMax;
	var tl = new TimelineMax({paused:true});


	var wrapper = $('#wrapper');
	var grid = $('#grid');

	var pixels;

	t.set(grid, {x:wrapper.width() * 0.5 - 8 * 16, y:300, transformPerspective:200});


	//var blob = $('<div>', { class : 'blob' });

	//var xRan, yRan;

	var xNum = 16;
	var yNum = 16;

	var xSpacing = window.innerWidth / xNum;
	var ySpacing = window.innerHeight / yNum;

	for (var i = 0; i<xNum; i++) {
		for(var j = 0; j<yNum; j++) {

			//xRan = random(-60, 60);
			//yRan = random(-60, 60);

			pixels = $('<div class="pixel"></div>').appendTo(grid);
			t.set(pixels, {x:i*20, y:j*20, backgroundColor:'#FFF', transformOrigin:'50% 50%', opacity:random(0.5, 0.9)});

			tl.to(pixels, random(3, 9), {force3D:true, z:random(-500, 0), scale:random(0, 3), rotationY:random(-1000, 0), rotationX:random(-1000, -6000), rotationZ:random(0, 0), physicsProps:{x:{velocity:random(200, -200)}, y:{velocity:random(-200, 200)}}}, 0);

		}
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