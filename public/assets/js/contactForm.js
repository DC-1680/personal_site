$(document).on('submit', '#contactForm', function () {
	$.post('/contact', $('#contactForm').serialize(), function (result) {
		if (result == 'OK') {
			$('#initial_form').removeClass('visible')
			$('#initial_form').addClass('hidden')
			$('#email_success').addClass('visible')
			// } else {
			// 	$('#initial_form').addClass('hidden')
			// 	$('#email_failure').addClass('visible')
		}

	});
	return false;
});