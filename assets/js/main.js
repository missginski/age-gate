/**************
LOADER
**************/
const body = $('body');
const loader = $('.loader-wrapper');

body.addClass('loader-site');

function removeLoader() {
  loader.fadeOut();
  body.removeClass('loader-site');
};

// setTimeout(removeLoader, 1500);
setTimeout(removeLoader, 00);

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
CART PANEL TOGGLE
**************/
const cartButton = $('.cart');
const cartPanel = $('.cart-panel');

function toggleCart() {
  cartPanel.toggleClass('active');
}

cartButton.on('click', toggleCart);

/**************
AGE GATE MODAL
**************/
const modal = $('.modal');
const submit = $('.formsubmit');
const content = $('.content');

// Checks local storage for previously verified age
if(localStorage && localStorage.getItem('age')) {
  content.addClass('unfix').fadeIn();
} else {
  modal.fadeIn();
};

// Gets input value and compares it checks if it's less than 21
function getAge() {
  let result;
  let month = $('.month').val();
  let year = $('.year').val();
  let age = 21;
  let inputDate = new Date();
  let currentDate = new Date();

  inputDate = inputDate.setFullYear(year, month - 1);
  currentDate = currentDate.setFullYear(currentDate.getFullYear() - age);

  if (month === 'notset' || year === 'notset') {
    result = 'dateNotSet';
  } else if ((currentDate - inputDate) < 0) {
    result = false;
  } else {
    result = true;
  }
  handleResult(result);
};

// Gets the age result and shows message to user
function handleResult(result) {
  const message = $('.success-error p');
  let messageText;

  if (result === 'dateNotSet') {
    messageText = 'Please Enter a Valid Date';
  } else if (!result) {
    messageText = 'Sorry, you must be 21 to enter this site';
  } else {
    message.addClass('text-dark');
    messageText = 'Success!';
    setTimeout(removeModal, 1500);
  }
  message.html(messageText).fadeIn();
};

// Removes modal and fades in content
function removeModal() {
  let remember = $('.remember').val;

  modal.fadeOut();
  content.addClass('unfix');

  // Sets local storage if box is checked
  if (remember) {
  	localStorage.setItem('age','verified');
  }
};

submit.on('click', getAge);


/**************
API call
**************/
// function getData() {
  $.ajax({
    method: 'GET',
    dataType: 'json',
    url: 'https://api.punkapi.com/v2/beers/random',
    success: function(data) {
      console.log(data);
    }
  });
// };
