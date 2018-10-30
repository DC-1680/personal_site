$(document).on('submit', '#contactForm', function () {
	$.post('/contact', $('#contactForm').serialize(), function (result) {
		if (result == 'OK') {
			$('#contactForm')[0].reset();
		}
		// else {
		// 	// do some other task
		// };

	});
	return false;
});