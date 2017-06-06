var t = TweenMax;
var tl = new TimelineMax({paused:true});

var $wrapper = $('#wrapper');
var $blobHolder = $('#blobHolder');
var $width = $wrapper.width();
var $height = $wrapper.height();

$(document).ready(function () {
	//console.log('ready');
	for (var i = 0; i < 600; i++) {
		var blobs = $('<div class="blob"></div>').appendTo($blobHolder);

		//t.set(blobs, {x:Math.random() * 600, y:Math.random() * 20 + 600, scale:Math.random()});

		t.set(blobs, {x:Math.random() * 10, y:Math.random() * 10, scale:Math.random()});

		//t.set(blobs, {y:Math.random() * 100 + 200, x:((Math.random() * 100) + ($width * 0.5) - 50), scale:Math.random()});


		//tl.to(blobs, Math.random() * 3 + 6, {physics2D:{velocity:Math.random() * 400 + 600, angle:Math.random() * 30 - 90, gravity:120, friction:0.03}, onComplete:bottom, onCompleteParams:[blobs, "{self}", i], force3D:true}, 0);

		//tl.to(blobs, Math.random() * 3 + 6, {physics2D:{velocity:Math.random() * 800 + 200, angle:Math.random() * 40 + 250, gravity:120, friction:0.03}, onComplete:bottom, onCompleteParams:[blobs, "{self}", i], force3D:true}, 0);

		tl.to(blobs, Math.random() * 3 + 6, {physics2D:{velocity:Math.random() * 400 + 200, angle:Math.random() * 360, gravity:30, friction:0.03}, onComplete:bottom, onCompleteParams:[blobs, "{self}", i], force3D:true}, Math.random() * 3 + 1);

	}


	/*function bottom(blobs, tl, i) {
		t.to(blobs, Math.random() * 2, {y:Math.random() * 100 + 600, x:Math.random() * 600, physics2D:{acceleration:Math.random() * 200 + 1000, friction:0.005}, force3D:true, opacity:0.5, scale:0});
	}

	function bottom(blobs, tl, i) {
		t.to(blobs, Math.random() * 2, {y:Math.random() * 100 + 600, physics2D:{gravity:200, friction:0.005}, force3D:true, opacity:0.5, scale:0});
	}

	function bottom(blobs, tl, i) {
		t.to(blobs, Math.random() * 2, {y:Math.random() * 100 + 600, physics2D:{gravity:200, friction:0.005}, force3D:true, opacity:0.0, scale:0});
	}*/

	function bottom(blobs, tl, i) {
		t.to(blobs, Math.random() * 5 + 5, {y:Math.random() * 10, x:Math.random() * 10, physics2D:{gravity:200, friction:0.005}, force3D:true, opacity:1, ease:Elastic.easeOut});


		//tl.pause();
	}

	$wrapper.click( function() {
		tl.seek(0);
		tl.play();
	})

	$( document ).on('mousemove', function (e) {

		var xPos = e.pageX;

		//return(xPos);

		//$blobHolder.offset({left:e.pageX, top:e.pageY});

		//return($blobHolder.offset({left:e.pageX}))

	});


	//console.log(xPos);

})

































//