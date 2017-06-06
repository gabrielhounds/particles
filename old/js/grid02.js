var t = TweenMax;
var tl = new TimelineMax({paused:false, yoyo:true});

var $wrapper = $('#wrapper');
var $gridHolder = $('#gridHolder');
var $width = $wrapper.width();
var $height = $wrapper.height();

$(document).ready( function() {
	console.log('grid begin');

	for (var i=0; i < 24; i++) {

		for (var j=0; j< 12; j++) {

			var pixels = $('<div class="pixel"></div>').appendTo($gridHolder);

				t.set(pixels, {x:i*pixels.width(), y:j*pixels.height()});
				t.set(pixels, {opacity:i * 0.03 + j* 0.03})
				t.set($gridHolder, {transformPerspective:100, x:-300, y:-200, perspective:200})
				//t.set(pixels, {opacity:j * 0.1})

				console.log(i * 0.07 + j * 0.07)

				//tl.to(pixels, Math.random() * 5 + 5, {force3D:true, repeat:-1, physicsProps:{x:{velocity:Math.random() * 50 - 200, acceleration:Math.random() * 100 + 100}, y:{velocity:Math.random() * 400 - 600, acceleration:Math.random() * 200 - 300, friction:0.05}}}, Math.random() * 5);

				//tl.to(pixels, random(1, 2),{physicsProps:{x:{velocity:random(100, -100)}, y:{velocity:random(-100, 100)}}, repeat:-1, yoyo:true}, random(1, 2));

				//tl.to(pixels, random(1, 2),{physicsProps:{x:{velocity:random(100, -100)}, y:{velocity:random(-100, 100)}}, repeat:-1, yoyo:true}, random(0, 2));

				tl.to(pixels, 3, {force3D:true, x:'+='+i+'*600', y:'+='+j+'*600', ease:Power3.easeOut}, Math.random()*2)
				tl.to($gridHolder, 2, {force3D:true, rotationY:0, rotationZ:0, rotationX:10, ease:Elastic.easeOut}, 0)

				tl.to(pixels, 3, {force3D:true})

					pixels.mouseover( function(e) {
						t.to(this, 1.2, {scale:1.3, z:10, ease:Elastic.easeOut})
						console.log('over');
					}).mouseout( function() {
						t.to(this, 0.3, {scale: 1, z:0, rotationY:0, ease:Elastic.easeOut})
					})

			}
	}

	function random(min, max) {
		if (max == null) { max = min; min = 0; }
		return Math.random() * (max - min) + min;
	}



	//tl.play();

})