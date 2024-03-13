jQuery(function ($) {

	const section = $('.section'),
		nav = $('.nav'),
		navHeight = nav.outerHeight();
	logo = $('.logo'),
		logoHeight = logo.outerHeight();
	window.addEventListener('orientationchange', function () {
		navHeight = nav.outerHeight();
	}, false);
	window.addEventListener('orientationchange2', function () {
		logoHeight = logo.outerHeight();
	}, false);

	$(window).on('scroll', function () {
		const position = $(this).scrollTop();

		section.each(function () {
			const top = $(this).offset().top - navHeight - 5,
				bottom = top + $(this).outerHeight();

			if (position >= top && position <= bottom) {
				nav.find('a').removeClass('active');
				section.removeClass('active');

				$(this).addClass('active');
				nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
			}
		});
	});

	nav.find('a').on('click', function () {
		const id = $(this).attr('href');
		nav.find('a').removeClass('active');
		section.removeClass('active');
		$(this).addClass('active');
		nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
		$('html, body').animate({
			scrollTop: $(id).offset().top - navHeight
		}, 500);

		return false;
	});
	logo.find('a').on('click', function () {
		const id = $(this).attr('href');
		logo.find('a').removeClass('active');
		section.removeClass('active');
		$(this).addClass('active');
		logo.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
		$('html, body').animate({
			scrollTop: $(id).offset().top - navHeight
		}, 500);

		return false;
	});
});
