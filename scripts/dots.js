var stageWidth = 480;
var stageHeight = 320;

var stage;
var mainImage = new Image();
var radian = new Kinetic.Layer();

function init() {
	stage = new Kinetic.Stage({
	    container: 'experimentcontainer',
		width: stageWidth,
		height: stageHeight
	});

	for (var i = 1; i <= 18; i++) {
	    window.animateDot(new Kinetic.Circle({
	        radius: 5,
	        fill: '#' + (Math.random() * 0xFFFFFF << 0).toString(16),
	        stroke: 'black',
	        strokeWidth: 1,
	        offset: [0, 0]
	    }), new Kinetic.Layer(), i);
    };

	mainImage.onload = function () {
	    var image = new Kinetic.Image({
	        x: 0,
	        y: 0,
	        image: mainImage,
	        width: 480,
	        height: 320
	    });

	    window.radian.add(image);
	    stage.add(window.radian);
	    window.radian.hide();
	};
    
	mainImage.src = "images/main_18.png";
}

function animateDot(dot, layer, index) {
    
    var amplitude = 120;
    var period = 2000;
    var centerX = stage.getWidth() / 2;
    var centerY = stage.getHeight() / 2;

    layer.move(centerX, centerY);
    layer.rotateDeg((20 * index));
    
    new Kinetic.Animation(function(frame) {
        dot.setX(
            amplitude * Math.sin(
                (frame.time + (amplitude/2 * index)) * Math.PI / period) + centerY / 2
        );
    }, layer.add(dot)).start();

    stage.add(layer);
}

function toggle() {
    if (window.radian.attrs.visible) {
        window.radian.hide();
    } else {
        window.radian.show();
    }
}

jQuery(function ($) {
    init();
});