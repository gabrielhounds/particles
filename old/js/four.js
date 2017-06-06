var t = TweenMax;
var tl = new TimelineMax({paused:false});

var $wrapper = $('#wrapper');
var $blobHolder = $('#blobHolder');
var $width = $wrapper.width();
var $height = $wrapper.height();

var twoPi = Math.PI * 2;


$(document).ready(function () {
	//console.log('ready');
	for (var i = 0; i < 300; i++) {
		var blobs = $('<div class="blob"></div>').appendTo($blobHolder);

		t.set(blobs, {x:Math.random() * 100, y:Math.random() * 100, scale:Math.random() * 0.8 + 0.1, backgroundColor:'#FFF'});

		tl.to(blobs, Math.random() * 2 + 2, {physics2D:{velocity:Math.random() * 100 + 300, angle:Math.random() * 10 + 240, gravity:70, friction:0.01}, force3D:true, repeat:-1}, Math.random() * 10);

		//tl.to(blobs, Math.random() * 5 + 2, {force3D:true, physicsProps:{x:{velocity:Math.random() * 50 - 200, acceleration:Math.random() * 100 + 100}, y:{velocity:Math.random() * 400 - 600, acceleration:Math.random() * 200 - 300, friction:0.05}}, repeat:-1}, Math.random() * 5);

		//tl.to(blobs, Math.random() * 5 + 5, {force3D:true,  x: "+=" + twoPi,  y: "+=" + twoPi, modifiers:{x:{ function(x) {return Math.cos(x) * 1000} }, y:{function(y) {return Math.cos(y) * 1000}}}, repeat:-1}, Math.random() * 5);



	}

	function endIn(blobs, tl, i) {
		t.to(blobs, Math.random() * 5 + 5, {y:Math.random() * 20 + 200, x:Math.random() * 20 - 200, physics2D:{gravity:100, friction:0.005}, force3D:true, opacity:1, ease:Elastic.easeOut});


		//tl.pause();
	}

	$wrapper.click( function() {
		tl.seek(0);
		tl.play();
	})

	$( document ).on('mousemove', function (e) {

		var xPos = e.pageX;

	});



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

function random(min, max) {
  if (max == null) { max = min; min = 0; }
  return Math.random() * (max - min) + min;
}


















//