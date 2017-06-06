var t = TweenMax;
var tl = new TimelineMax({paused:false});

var $wrapper = $('#wrapper');
var $blobHolder = $('#blobHolder');
var $width = $wrapper.width();
var $height = $wrapper.height();

$(document).ready(function () {
	//console.log('ready');
	for (var i = 0; i < 400; i++) {
		var blobs = $('<div class="blob"></div>').appendTo($blobHolder);
		t.set(blobs, {x:random(0, 10), y:random(0, 10), scale:random(0.1, 0.6), backgroundColor:'#FFF'});
		//

		//pulse swarm
		tl.to(blobs, random(1, 2),{physicsProps:{x:{velocity:random(100, -100)}, y:{velocity:random(-100, 100)}}, repeat:-1, yoyo:true}, random(0, 0));

		//left spray paint
		//tl.to(blobs, random(1, 2),{physicsProps:{x:{velocity:random(-200, -100)}, y:{velocity:random(-100, 100)}}, repeat:-1, yoyo:false}, random(0, 5));

		//hyperspace
		//tl.to(blobs, random(1, 5),{physicsProps:{x:{velocity:random(i * - 1.5, i) }, y:{velocity:random(i*1.5, -i)}}, repeat:-1, yoyo:false}, random(0, 1));

		//Hyperspace pulse
		//tl.to(blobs, random(3, 6), {physics2D:{velocity:random(-200, 200), accelerationAngle:random(0, 360), angle:random(0, 360), friction:0.005}, repeat:-1, yoyo:true}, random(0, 3));

		//
		//tl.to(blobs, random(2, 4), {x:'+=' + random(-200, 200), y:'+=' + random(-200, 200), ease:Elastic.easeOut, repeat:-1, yoyo:true}, random(0, 0))
	}

	//t.to($blobHolder, 5, {rotation:'360deg', repeat:-1});

	function endIn(blobs, tl, i) {
		t.to(blobs, Math.random() * 5 + 5, {y:Math.random() * 20 + 200, x:Math.random() * 20 - 200, physics2D:{gravity:100, friction:0.005}, force3D:true, opacity:1, ease:Elastic.easeOut});
	}

	$wrapper.click( function() {
		tl.seek(0);
		tl.play();
	})

	$( document ).on('mousemove', function (e) {

		//var xPos = e.pageX;

	});

	function random(min, max) {
		if (max == null) { max = min; min = 0; }
		return Math.random() * (max - min) + min;
	}





})
















TweenLite.defaultEase = Linear.easeNone;

var svgns = "http://www.w3.org/2000/svg";
var root  = document.querySelector("svg");
var twoPi = Math.PI * 2;

for (var i = 0; i < 75; i++) {
  //createCircle();
}

function createCircle() {

  var circle = document.createElementNS(svgns, "circle");
  root.appendChild(circle);

  var radius = random(1) < 0.35 ? random(100, 150) : random(50, 100);

  TweenLite.set(circle, {
    attr: { r: 2.5, cx: "50%", cy: "50%" },
    x: random(-twoPi, twoPi),
    y: random(-twoPi, twoPi)
  });

  TweenMax.to(circle, random(2, 6), {
    x: "+=" + twoPi,
    repeat: -1,
    modifiers: {
      x: function(x) {
        return Math.cos(x) * radius;
      }
    }
  });

  TweenMax.to(circle, random(2, 6), {
    y: "+=" + twoPi,
    repeat: -1,
    modifiers: {
      y: function(y) {
        return Math.sin(y) * radius;
      }
    }
  });
}




















//