var t = TweenMax;
var tl = new TimelineMax({paused:true});

var $wrapper = $('#wrapper');
var $blobHolder = $('#blobHolder');
var $width = $wrapper.width();
var $height = $wrapper.height();

$(document).ready(function () {
	//console.log('ready');
	for (var i = 0; i < 1000; i++) {
		var blobs = $('<div class="blob"></div>').appendTo($blobHolder);

		t.set(blobs, {x:Math.random() * 10, y:Math.random() * 10, scale:Math.random() * 0.8 + 0.1, backgroundColor:'#000'});

		tl.to(blobs, Math.random() * 6 + 10, {physics2D:{velocity:Math.random() * 100 + 300, angle:Math.random() * 10 + 240, gravity:70, friction:0.01}, /*onComplete:bottom, onCompleteParams:[blobs, "{self}", i],*/ force3D:true}, Math.random() * 10);

	}

	function bottom(blobs, tl, i) {
		t.to(blobs, Math.random() * 5 + 5, {y:Math.random() * 20 + 200, x:Math.random() * 20 - 200, physics2D:{gravity:100, friction:0.005}, force3D:true, opacity:1, ease:Elastic.easeOut});


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