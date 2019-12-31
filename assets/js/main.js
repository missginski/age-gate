/**************
NAV TOGGLE
**************/
const button = $('.toggle-nav');
const menu = $('.menu');

function toggleNav() {
  button.toggleClass('close-nav');
  menu.toggleClass('active');
};

button.on('click', toggleNav);

/**************
MODAL
**************/
const modal = $('.modal');
const submit = $('.formsubmit');
const content = $('.content');
const message = $('.success-error');

if(localStorage && localStorage.getItem('age')) {
	$(content).fadeIn();
} else {
	$(modal).fadeIn();
};

function getAge() {
let month = $('.month').val();
let year = $('.year').val();
let age = 21;
let mydate = new Date();
let currdate = new Date();

  mydate = mydate.setFullYear(year, month - 1);
  currdate = currdate.setFullYear(currdate.getFullYear() - age);

  if (month === 'notset' || year === 'notset') {
    $(message).fadeIn();
    return false;
  } else if ((currdate - mydate) < 0) {
    $(message)
      .html('<p class="error">Sorry, you must be 21 to enter this site</p>')
      .fadeIn();
    return false;
  } else {
    $(message)
      .html("<p>Success!</p>")
      .fadeIn();

    // if (remember) {
    // 	localStorage.setItem('age','verified');
    // }

    $(submit).on('click', function() {
      $(modal).fadeOut();
      $(content).toggleClass('fixed');
    })
    return true;
  }
}

submit.on('click', getAge);
