$(document).ready(function(){
	console.log('ready');
	init();
})

function init() {


	var tl = new TimelineMax({paused:false, yoyo:false});

	var t = TweenMax;

	var bubbleSvg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 285 285" style="enable-background:new 0 0 285 285;" xml:space="preserve"><g id="Layer_1"><radialGradient id="SVGID_1_" cx="142.521" cy="142.5222" r="142.5216" gradientUnits="userSpaceOnUse"><stop offset="0.5824" style="stop-color:#FFFFFF;stop-opacity:0.5"/><stop offset="0.6666" style="stop-color:#F8FBFD;stop-opacity:0.6008"/><stop offset="0.7518" style="stop-color:#EBF3FA;stop-opacity:0.7028"/><stop offset="0.8375" style="stop-color:#D6E7F5;stop-opacity:0.8054"/><stop offset="0.9229" style="stop-color:#BAD9EE;stop-opacity:0.9077"/><stop offset="1" style="stop-color:#98CAE8"/></radialGradient><circle style="fill:url(#SVGID_1_);" cx="142.5" cy="142.5" r="142.5"/></g><g id="Layer_2"><g style="opacity:0.6;"><radialGradient id="SVGID_2_" cx="121.1225" cy="6.8361" r="25.5389" gradientTransform="matrix(0.5463 -0.445 0.2423 0.2976 -11.765 99.8077)" gradientUnits="userSpaceOnUse"><stop offset="0.4835" style="stop-color:#F1F2F2;stop-opacity:0.5"/><stop offset="1" style="stop-color:#F1F2F2"/></radialGradient><path style="fill:url(#SVGID_2_);" d="M70.2,36.5c3.4,4.1-0.2,12.7-8,19c-7.8,6.3-16.8,8.1-20.2,4c-3.4-4.1,0.2-12.7,8-19C57.7,34.1,66.8,32.3,70.2,36.5z"/></g></g></svg>';


function randomBubble() {

	for (var i = 0; i<780; i++) {

		var bubbles = $('<div>', {class : 'bubble'}).appendTo('#wrapper');

		t.set(bubbles, {x:random(-100, window.innerWidth), y:random(-100, window.innerHeight), scale:random(0.09, 1.0)});

	}

	$('.bubble').append(bubbleSvg);
}

function perlinBubble() {

	//xDis = 30;
	//yDis = 26;

	xDis = Math.round(window.innerWidth / 80);
	yDis = Math.round(window.innerHeight / 62);

	axMean = -50;
	bxMean =  50;

	ayMean = -50;
	byMean =  50;

	//axMean = bxMean = ayMean = byMean = -38;

	//aMean = 0;
	//bMean = 0;

	var xs = window.innerWidth / xDis;
	var ys = window.innerHeight / yDis;

	for (var i = 0; i<xDis; i++) {

		for (var j = 0; j<yDis; j++ ) {

			var bubbles = $('<div>', {class : 'bubble'}).appendTo('#wrapper');

			//t.set(bubbles, {x:j*xs + random(-50, 50), y:i*ys + random(-50, 50), scale:random(0.2, 1.5)});

			//straight grid
			//t.set(bubbles, {x:i*xs , y:j*ys });

			//perlin noise
			t.set(bubbles, {x:i*xs + random(axMean, bxMean), y:j*ys + random(ayMean, byMean), scale:random(0.09, 1.0)});

			//tl.to(bubbles, random(0.5, 1.5), {physics2D:{velocity:random(50, 60), angle:random(0, 270), gravity:0, friction:0.05}, onComplete:pop, onCompleteParams:[bubbles, "{self}", i], force3D:true}, random(0, 2));
			//tl.to(bubbles, random(2, 5), {physics2D:{velocity:random(50, 60), angle:random(0, 270), gravity:30, friction:0.05}, /*onComplete:pop, onCompleteParams:[bubbles, "{self}", i],*/ force3D:true, repeat:-1}, random(0, 2));

			//t.set(bubbles, {x:random(-100, window.innerWidth), y:random(-100, window.innerHeight), scale:random(0.2, 1.25)});


		}
		$('.bubble').append(bubbleSvg);


	}
	function pop(bubbles, tl, i) {

		t.to(bubbles, 0.1, {scale:1.9, opacity:0, ease:Power4.easeOut});



		//t.to(blobs, Math.random() * 5 + 5, {y:Math.random() * 20 + 200, x:Math.random() * 20 - 200, physics2D:{gravity:100, friction:0.005}, force3D:true, opacity:1, ease:Elastic.easeOut});


		//tl.pause();
	}

	//$('.bubble').append(bubbleSvg);
}

perlinBubble();

//randomBubble();

}


function random(min, max) {
	if (max == null) { max = min; min = 0; }
	return Math.random() * (max - min) + min;
}