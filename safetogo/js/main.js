$( document ).on( "click", "#list-button", function() {
	$( "#map-canvas" ).animate({ left: "-100%" }, 300);
	$( "#list-view" ).animate({ left: "0%" }, 300);
});

$( document ).on( "click", "#map-button", function() {
	$( "#map-canvas" ).animate({ left: "0%" }, 300);
	$( "#list-view" ).animate({ left: "100%" }, 300);
});