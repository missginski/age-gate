// $(document).ready(function() {

// age gate
const modal = $('.modal'),
      submit = $('.formsubmit'),
      content = $('.content');

if(localStorage && localStorage.getItem('age')) {
	$(content).fadeIn();
} else {
	$(modal).fadeIn();
}

$(submit).on('click', function() {
  var month = $('.month').val(),
  		year = $('.year').val(),
  		age = 21,
   		mydate = new Date(),
			currdate = new Date();

    mydate.setFullYear(year, month - 1);
    currdate.setFullYear(currdate.getFullYear() - age);

		if (month === 'notset' || year === 'notset') {
			$('.success-error').fadeIn();
			return false;
		}
    else if ((currdate - mydate) < 0) {
			$('.message').html('<h2>Sorry, you must be 21 to enter this site</h2>');
      return false;
    }
		else {
			$('.success-error').html("<h2>Success! You're old enough!</h2>").fadeIn();

			if (remember) {
				localStorage.setItem('age','verified');
			}

			$(submit).on('click', function() {
				$(modal).fadeOut();
				$(content).fadeIn();
			})
			return true;
		}
});
// });
