/**************
NAV TOGGLE
**************/
const button = $('.toggle-nav');

function toggleNav() {
  $('nav').toggleClass('active');
  $('.toggle-nav').toggleClass('close-nav');
};

button.on('click', toggleNav);

/**************
MODAL
**************/
const modal = $('.modal'),
      submit = $('.formsubmit'),
      content = $('.content'),
      message = $('.success-error');

if(localStorage && localStorage.getItem('age')) {
	$(content).fadeIn();
} else {
	$(modal).fadeIn();
}

$(submit).on('click', function() {
  let month = $('.month').val(),
  		year = $('.year').val(),
  		age = 21,
   		mydate = new Date(),
			currdate = new Date();

    mydate.setFullYear(year, month - 1);
    currdate.setFullYear(currdate.getFullYear() - age);

		if (month === 'notset' || year === 'notset') {
			$(message).fadeIn();
			return false;
		}
    else if ((currdate - mydate) < 0) {
			$(message).html('<p class="error">Sorry, you must be 21 to enter this site</p>');
      return false;
    }
		else {
			$(message).html("<p>Success!</p>").fadeIn();

			// if (remember) {
			// 	localStorage.setItem('age','verified');
			// }

			$(submit).on('click', function() {
				$(modal).fadeOut();
				$(content).fadeIn();
			})
			return true;
		}
});
