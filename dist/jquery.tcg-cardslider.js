/*
---------------------------------------------
	CARD-/FORM-SLIDER BY
	Reinhart Redel - The Code Gecko
---------------------------------------------
*/
;(function($, window, document, undefined) {

	"use strict";

	// Create the defaults once
	var pluginName = "cardslider";
	var defaults = {
		cardSelector: '>'
	};
	var cssPrefix = 'tcg-cs-';

	var TCGCARDSLIDER = {
		AnimationStart: 'tcg.cs.animationstart',
		AnimationEnd: 'tcg.cs.animationend'
	}

	// The actual plugin constructor
	function Plugin (element, options)
	{
		// make "this" a unique var
		var _this = this;
		// store the DOM element for global usage
		var _element = element;
		// store the jQuery version of the DOM element for global usage
		var _$element = $(element);
		// merge user defined options with the defaults
		var _settings = $.extend({}, defaults, options);

		var _$cards = _$element.find(_settings.cardSelector);

		var _cards = [];
		var _currentStep = undefined;// = $('.card-box .cards .card.active');
		var _$activeStep = undefined;
		var _$currentStep = undefined;
		var _$activeStep = undefined;

		// initialize the plugin by calling the init() method
		init();

		function init()
		{
			configureListeners();
			_$cards.each(function(i, el){
				$(el).addClass(cssPrefix + 'card');
				_cards.push($(el).clone(true, true));
				if(!$(el).hasClass(cssPrefix + 'active'))
				{
					$(el).remove();
				}
				else
				{
					_currentStep = i;
				}
			});
			if(!isNaN(_currentStep))
			{
				_$element.height(_cards[_currentStep].outerHeight() + 'px').addClass(cssPrefix + 'animate');
				_this.select(_currentStep);
			}
			_$element.addClass(cssPrefix + 'animate ' + cssPrefix + 'cards');
		}

		function configureListeners()
		{
			//_$cards.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', onTransitionEnd);
		}

		function onTransitionEnd(e)
		{
			$(this).removeClass(cssPrefix + 'animate');
			if(!$(this).hasClass(cssPrefix + 'active'))
			{
				$(this).removeClass(cssPrefix + 'active ' + cssPrefix + 'out ' + cssPrefix + 'animate')
						.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', onTransitionEnd)
						.remove();
			}
			else
			{
				_$element.trigger(TCGCARDSLIDER.AnimationEnd);
			}
		}

		function imgLoaded(e)
		{
			var card = $(this).closest('.' + cssPrefix + 'card');
			if(card.hasClass(cssPrefix + 'active'))
			{
				_$element.height(card.outerHeight() + 'px');
			}
		}

		_this.select = function(step)
		{
			if(_$element.find(_settings.cardSelector).length > 1)
			{
				return;
			}
			var targetStep = step = parseInt(step) - 1;
			var outClass = _currentStep > parseInt(step) ? '' : ' ' + cssPrefix + 'out';
			var inClass = _currentStep > parseInt(step) ? ' ' + cssPrefix + 'out' : '';
			if(step != _currentStep && _cards[step])
			{
				_$element.trigger(TCGCARDSLIDER.AnimationStart);
				_cards[step].appendTo(_element)
							.addClass(inClass)
							.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', onTransitionEnd);
				_cards[step].find('img').on('load', imgLoaded)

				setTimeout(function(){
					_cards[step].removeClass(cssPrefix + 'out').addClass(cssPrefix + 'active ' + cssPrefix + 'animate');
					_$element.height(_cards[step].outerHeight() + 'px');
				}, 10)

				if(_cards[_currentStep])
				{
					_cards[_currentStep].removeClass(cssPrefix + 'active').addClass(cssPrefix + 'animate' + outClass);
				}
				_currentStep = step;

			}
		}
		_this.get = function(param)
		{

		}
		_this.destroy = function()
		{
			_$cards.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', onTransitionEnd);
			_$cards.off('load', imgLoaded);
		}
	}

	// A really lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$.fn[pluginName] = function() {
		// arguments passed to the plugin via $('selector').pluginName('functionName', ...args) as REST param or settings passed during initialization
		var args = arguments;
		return this.each(function() {
			// prevent multiple instantiations by checking for existance of a plugin instance for the given selector
			if (!$.data(this, pluginName + '_instance'))
			{
				// create and save the plugin instance
				$.data(this, pluginName + '_instance', new Plugin(this, args[0]));
			}
			// if public functions are needed, use this block aswell.
			// those functions can then be called by $('selector').pluginName('functionName', ...args)
			else
			{
				// get the current plugin instance
				var _this = $.data(this, pluginName + '_instance');

				// check if the user intends to call a function and
				// isolate the function arguments (performance optimized)
				if(typeof args[0] === 'string' && typeof _this[args[0]] === 'function')
				{
					var functionArgs = [];
					for(var i = 1; i < args.length; i++)
					{
						functionArgs.push(args[i]);
					}
					_this[args[0]].apply(_this, functionArgs);
				}
			}
		});
	};
})(jQuery,window, document);
/*
---------------------------------------------
	CARD-/FORM-SLIDER BY
	Reinhart Redel - The Codegecko
---------------------------------------------
*/

