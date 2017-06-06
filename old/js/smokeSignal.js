var t = TweenMax;
var tl = new TimelineMax({paused:true, yoyo:false});

var $wrapper = $('#wrapper');
var $blobHolder = $('#blobHolder');
var $width = $wrapper.width();
var $height = $wrapper.height();

var pc = 0;

$(document).ready(function () {
	//console.log('ready');
	for (var i = 0; i < 600; i++) {
		var blobs = $('<div class="blob"></div>').appendTo($wrapper);

		t.set(blobs, {x:Math.random() * 40 + 300, y:function(){ return Math.random() * 40 + $height - 40},

			scale:function() {

				if (i < 250) {
					return Math.random() * 0.5;
				} else {
					return Math.random() * 0.2;
				}

			},

			backgroundColor:function() {
				if (i < 250) {
					return '#d5ff00';
				} else {
					return '#ffc400';
				}
			}
		});

		tl.to(blobs, Math.random() * 6 + 10, {physics2D:{velocity:Math.random() * 100 + 300, angle:Math.random() * 10 + 240, gravity:70, friction:0.01}, /*onComplete:bottom, onCompleteParams:[blobs, "{self}", i],*/ force3D:true}, Math.random() * 10);

		//tl.to(blobs, Math.random() * 5 + 5, {force3D:true, repeat:-1, physicsProps:{x:{velocity:Math.random() * 50 - 200, acceleration:Math.random() * 100 + 100}, y:{velocity:Math.random() * 400 - 600, acceleration:Math.random() * 200 - 300, friction:0.05}}}, Math.random() * 5);



	}

	function bottom(blobs, tl, i) {
		t.to(blobs, Math.random() * 5 + 5, {y:Math.random() * 20 + 200, x:Math.random() * 20 - 200, physics2D:{gravity:100, friction:0.005}, force3D:true, opacity:1, ease:Elastic.easeOut});


		//tl.pause();
	}

	$wrapper.click( function() {

		console.log(dur);

		//tl.seek(dur);
		//tl.reverse();

		if (pc == 0) {
			tl.play();
			pc++;
		} else if (pc >= 1) {
			tl.reverse();
			pc--;
		}

		//tl.seek(0);
		//tl.play();
	})

	$( document ).on('mousemove', function (e) {

		var xPos = e.pageX;

		//return(xPos);

		//$blobHolder.offset({left:e.pageX, top:e.pageY});

		//return($blobHolder.offset({left:e.pageX}))

	});

	var dur = tl.duration();

	//console.log(xPos);

})

































//