$(document).ready(function () {
	$('.cards').cardslider();
	/*
	var _cards = [];
	// Hide all steps that are not active
	$('.card-box .cards .card').each(function(i, el){
		_cards[parseInt($(el).data('step'))] = $(el).clone(true, true);
		if(!$(el).hasClass('active'))
		{
			$(el).remove();
		}
	})
	//$('.card-box .cards .card').not('.active').addClass('hidden');
	// Get the active card
	var activeStep = $('.card-box .cards .card.active');
	var currentStep = undefined;//$('.card-box .cards .card').data('step');
	$('.card-box .cards').height(activeStep.outerHeight() + 'px').addClass('animate');
	if(activeStep.length)
	{
		log(activeStep)
		gotoStep(currentStep);
	}
	*/
	/*
	$(document).on('submit', '.card-box .cards form', function (e) {

		e.preventDefault();

		var cards = $(this).closest('.cards');
		var step = $(this).closest('.card');
		var stepIndex = parseInt(step.data('step'));
		// Alternatively you can use the index of the form-step if they share the same parent
		//var stepIndex = cards.find('.card').index(step) + 1;
		var targetStep = stepIndex + 1;
		gotoStep(targetStep);
	});
	*/

	$('.toggle-step').click(function(e){
		//gotoStep($(this).data('step'));
		$('.cards').cardslider('select', $(this).data('step'));
	})
	/*
	// Remove animation
	$(document).on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', '.card-box .cards .card', function(e){
		$(this).removeClass('animate');
		if(!$(this).hasClass('active'))
		{
			$(this).remove();
		}
	})

	function gotoStep(step)
	{
		var outClass = currentStep > parseInt(step) ? '' : ' out';
		var inClass = currentStep > parseInt(step) ? ' out' : '';
		step = parseInt(step);
		if(step != currentStep)
		{
			_cards[step].appendTo('.card-box .cards').removeClass('active animate out').addClass(inClass);
			setTimeout(function(){
				_cards[step].removeClass('out').addClass('animate active');
				if(currentStep)
				{
					_cards[currentStep].removeClass('active').addClass('animate' + outClass);
				}
				$('.card-box .cards').height($('.card-box .cards .card.active').outerHeight() + 'px');
				currentStep = step;
			}, 10)
		}
	}
	*/
})
