$(document).ready(function () {
	$('.slides').cardslider();
	$('.cards').cardslider();

	$('.toggle-slide').click(function(e){
		$('.slides').cardslider('select', $(this).data('step'));
	})
	$('.toggle-step').click(function(e){
		$('.cards').cardslider('select', $(this).data('step'));
	})
})

var enableLog = true;
function log(msg){
	if(enableLog || typeof console!=="undefined") console.log(msg)
}
