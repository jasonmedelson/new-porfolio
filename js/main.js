$(document).ready(function() {
	$("a.mini-nav").click(function(){
		$("ul.nav").slideToggle("slow");
		return false;
	});
	$(window).resize(function(e) {
        screen_resize();
});
});

function screen_resize() {
    var w = parseInt(window.innerWidth);
    if(w >= 990) {
        $("ul.nav").css("display","block");
	}
}