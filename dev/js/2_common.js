jQuery(document).ready(function($){
	/*Wrap text tag p start*/

	/*Wrap text tag p end*/
	/*Scroll Element start*/
	$('a[href*="#"]:not([href="#"]):not([data-vc-accordion]):not([data-toggle="tab"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
	/*Scroll Element end*/
	/*Delete empty tag <p> start*/
	$('p').filter(function(){
	   return this.innerHTML == '&nbsp;';
	}).remove();
	/*Delete empty tag <p> start*/
	if($(window).width() < 768){
		var lang = $('.language'),
			buttonEl = $('header .button')
		$('header .menu').prepend(lang);
		$('header .menu').append(buttonEl);
	}
	/*Burger menu start*/
	$('.burger').click(function(){
		$(this).toggleClass('close');
		$('body').toggleClass('modal-open');
	})
	/*Burger menu end*/
	/*Language checkbox add class start*/
	$('#language:checked').parents('.language').addClass('checked')
	$('#language').change(function(){
		if($(this).prop('checked') == true){
			$(this).parents('.language').addClass('checked');
			/*Input Datapiker start*/
				if($('.icon-calendar').length){
					$('.icon-calendar input').datepicker({
						autoclose: true,
						language: "ru"
					});
					$('.icon-calendar input').datepicker().on('changeDate', function(e) {
						$(this).parent().addClass('focus');
					});
				}
			/*Input Datapiker end*/
		}else{
			$(this).parents('.language').removeClass('checked');
			/*Input Datapiker start*/
				if($('.icon-calendar').length){
					$('.icon-calendar input').datepicker({
						autoclose: true,
						language: "ru"
					});
					$('.icon-calendar input').datepicker().on('changeDate', function(e) {
						$(this).parent().addClass('focus');
					});
				}
			/*Input Datapiker end*/
		}
	});
	/*Language checkbox add class end*/
	/*Slider wrap three images start*/
	if($(window).width() > 991){
		if($('.photo-gallery').length){
			var grid = $('.photo-gallery');
			while( grid.children('[data-fancybox="gallery"]').length){
				grid.children('[data-fancybox="gallery"]:lt(3)').wrapAll('<div class="three-el">');
			}
		}
	}
	/*Slider wrap three images end*/
	/*Slider gallery photo start*/
	if($('.photo-gallery').length){
		$('.photo-gallery').slick({
			prevArrow:'.slider-arrow .icon-left',
			nextArrow:'.slider-arrow .icon-right',
			appendDots:'.slider-arrow',
			dots:true,
		});
		$('.slider-arrow').each(function(){
			var lngEl = $(this).find('.slick-dots li').length;
			$(this).find('.slick-dots').attr('data-lng', lngEl);

		});
	}
	/*Slider gallery photo end*/
//	/*MAP start*/
//	if($('#map').length){
//		let map;
//		function initMap() {
//			map = new google.maps.Map(document.getElementById("map"), {
//				center: {
//					lat: -34.397,
//					lng: 150.644
//				},
//				zoom: 8,
//			});
//		}
//	}
//	/*MAP end*/
	/*Input focus add Class start*/
	$('.input input:not([type="submit"]):not([type="checkbox"]):not([type="radio"]):not([type="file"])').focus(function(){
		$(this).parent().addClass('focus');
	});
	$('.input input:not([type="submit"]):not([type="checkbox"]):not([type="radio"]):not([type="file"])').blur(function(){
		if($(this).val().length == 0){
			$(this).parent().removeClass('focus');
		}
	});
	$('.input input:not([type="submit"]):not([type="checkbox"]):not([type="radio"]):not([type="file"])').each(function(){
		if($(this).val().length < 1){
			$(this).parent().removeClass('focus');
		}else{
			$(this).parent().addClass('focus');
		}
	});
	/*Input focus add Class end*/
	/*Input Datapiker start*/
		if($('.icon-calendar').length){
			$('.icon-calendar input').datepicker({
				autoclose: true,
				language: "ru"
			});
			$('.icon-calendar input').datepicker().on('changeDate', function(e) {
				$(this).parent().addClass('focus');
			});
		}
	/*Input Datapiker end*/
	/*Input Length simbol start*/
	if($('.input .length').length){
		$('.input input').each(function(){
			if($(this).val().length == 0){
				$(this).parents('.input').find('.length span').text('0')
			}else{
				var lengthValEl = $(this).val().length
				$(this).parents('.input').find('.length span').text(lengthValEl)
			}

			$(this).keyup(function(){
				var lengthValEl = $(this).val().length
				$(this).parents('.input').find('.length span').text(lengthValEl)
			});
		});
	}
	/*Input Length simbol end*/
	/*Message open start*/
	$('.icon-comments:not([data-comments="0"])').click(function(){
		$(this).parents('.item').find('.content-message').slideToggle();
	})
	/*Message open end*/
});
