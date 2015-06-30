$(document).ready( function() {
	var n = 16;
	clr = "#D3D3D3"
	mode = 'normal';
	$('#container').height($('#container').width() + 'px');
	function generate(n) {
		for (var i = n; i > 0; i--) {
			for (var j = n; j > 0; j--) {
				$('#container').append("<div class='box' data-custom='no' data-per='-0.1'></div>");
			}
		}
		var s = 100/n;
		s = s + '%';
		$('.box').width(s);
		$('.box').height($('.box').width() + 'px');
		$('.box').css("box-sizing","border-box");
	}
	generate(n);
	$('#reset').click(function() {
		n = prompt("Tell the size of one side of the grid", "16");
		$('#container').empty();
		generate(n);
		mode = 'normal';
		$('.box').hover(mouseIn, mouseOut);
	});
	$('#random').click(function() {
		$('.box').css("background-color","LightGray");
		$('.box').data("custom", "no");
		mode = 'random';
		$('.box').hover(mouseIn, mouseOut);
	});
	$('#opac').click(function() {
		$('.box').css("background-color","LightGray");
		$('#container').empty();
		generate(n);
		mode = 'opac';
		$('.box').hover(mouseIn, mouseOut);
	});
	$('#trail').click(function() {
		$('.box').css("background-color","LightGray");
		mode = 'trail';
		$('.box').hover(mouseIn, mouseOut);
	});

	function shadeColor(color, percent) {   
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
	}

	function mouseIn() {
		if(mode == 'normal' || mode == 'trail') {
			$(this).css("background-color", "black");
		}
		if(mode == 'opac') {
			var prc = $(this).data("per");
			if (prc >= -1) {
				var col = shadeColor(clr,prc);
				$(this).css("background-color", col);
			}
			prc += -0.1;
			$(this).data('per', prc);
		}
		if(mode == 'random') {
			if ($(this).data("custom") == "no") {
				$(this).data("custom", "yes");
				var r =Math.floor((Math.random()*256));
				var g =Math.floor((Math.random()*256));
				var b =Math.floor((Math.random()*256));
				var c = 'rgb('+r+','+g+','+b+')'; 
				$(this).css("background-color", c);
			}
		}
	}
	function mouseOut() {
		if(mode == 'trail') {
			$(this).animate( { 'background-color': "#D3D3D3" }, 3000);
		}
	}
	$('.box').hover(mouseIn, mouseOut);
});