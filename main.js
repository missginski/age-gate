$(document).ready(function() {

  var modal = '#modal',
      submit = '#formsubmit',
      content = '#content';

  // A handy little function to erase cookies,
  // useful when testing/debugging.
  //
  // eraseCookie('ageVerified');

  // if (!readCookie('ageVerified')) {
  //     $(agemodal).fadeIn();
  // } else {
  //     $(content).fadeIn();
  // };

	$(modal).fadeIn();

	$(submit).on('click', function() {
    var month = $('#month').val(),
    		year = $('#year').val(),
    		age = 21,
	   		mydate = new Date(),
				currdate = new Date();

		    mydate.setFullYear(year, month - 1);
		    currdate.setFullYear(currdate.getFullYear() - age);

				if (month === 'notset' || year === 'notset') {
					$('#success-error').fadeIn();
					return false;
				}
		    else if ((currdate - mydate) < 0) {
					$('#message').html('<h2>Sorry, you must be 21 to enter this site</h2>');
	        return false;
		    }
				else {
					$('#success-error').html("<h2>Success! You're old enough!</h2>").fadeIn();

					$(submit).on('click', function() {
						$(modal).fadeOut();
						$(content).fadeIn();
					})
					return true;
				}

	});



    // $(formsubmit).on('click', function(event){
    //     event.preventDefault ? event.preventDefault() : event.returnValue = false;
		//
    //     var day, month, year, age, remember, mydate, currdate;
		//
    //     $("#day").val() ? day = $("#day").val() : day = 'notset';
    //     $("#month").val() ? month = $("#month").val() : month = 'notset';
    //     $("#year").val() ? year = $("#year").val() : year = 'notset';
    //     age = $("#location").val();
    //     $("#remember").is(':checked') ? remember = 'checked' : remember = false;
		//
    //     mydate = new Date();
    //     mydate.setFullYear(year, month-1, day);
    //     currdate = new Date();
    //     currdate.setFullYear(currdate.getFullYear() - age);
		//
    //     if (day == 'notset' || month == 'notset' || year == 'notset' ) {
    //         alert("Please enter your birthdate.");
    //         return false;
    //     } else if (age == 99 ) {
    //         alert("Sorry, persons from your country are not permitted to view this site");
    //         return false;
    //     } else if ((currdate - mydate) < 0) {
    //         alert("Sorry, only persons over the age of " + age + " may enter this site");
    //         return false;
    //     } else {
    //         if (remember) {
    //             createCookie('ageVerified', 1, 3650); // expire in 10 years
    //         } else {
    //             createCookie('ageVerified', 1, 1); // expire in a day
    //         };
    //         $(agemodal).fadeOut();
    //         $(content).fadeIn();
    //         return true;
    //     }
    // });

    // function createCookie(name,value,days) {
    //     if (days) {
    //         var date = new Date();
    //         date.setTime(date.getTime()+(days*24*60*60*1000));
    //         var expires = "; expires="+date.toGMTString();
    //     }
    //     else var expires = "";
    //     document.cookie = name+"="+value+expires+"; path=/";
		//
    //     console.log(name+"="+value+expires+"; path=/")
    // };





});
