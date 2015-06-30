$(document).ready( function() {
	var n = 16;
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
});