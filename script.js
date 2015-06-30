$(document).ready( function() {
	var n = 16, mode = 'normal';
	$('#container').height($('#container').width() + 'px');
	function generate(n) {
		for (var i = n; i > 0; i--) {
			for (var j = n; j > 0; j--) {
				$('#container').append("<div class='box'></div>");
			}
		}
		var s = 100/n;
		s = s + '%';
		$('.box').width(s);
		$('.box').height($('.box').width() + 'px');
		$('.box').css("box-sizing","border-box");
	}
	generate(n);
	
	$('#reset').click( function() {
		var m = prompt("Tell the size of one side of the grid");
		$('#container').empty();
		generate(m);
	})

	function mouseIn(mode) {
		if(mode == 'normal' || mode == 'trail') {
			$(this).css("background-color", "black");
		}
		if(mode == 'random') {
			var r =Math.floor((Math.random()*256));
			var g =Math.floor((Math.random()*256));
			var b =Math.floor((Math.random()*256));
			var c = 'rgb('+r+','+g+','+b+')'; 
			$(this).css("background-color", c);
		}

	}
	function mouseOut(mode) {
		if(mode == 'trail') {
			$(this).animate( { backgroundColor: grey }, 500);
		}
	}
	$('.box').on("mouseenter", mouseIn(mode));
});