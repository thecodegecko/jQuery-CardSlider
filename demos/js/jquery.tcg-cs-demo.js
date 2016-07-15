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
