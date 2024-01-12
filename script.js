const form = document.getElementById('form');
const user = document.getElementById('user');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');

// event
form.addEventListener('submit', (event) => {
  event.preventDefault();
  validate();
});

const sendData = (userVal, sRate, count) => {
  if (sRate === count) {
    alert('Registration Successful ');
    // Assuming swal is properly included and initialized in your project
    swal('Welcome! ' + userVal, 'Registration Successful', 'success');
    location.href = `demo.html?userVal=${userVal}`;
  }
};

// for final data validate
const successMsg = (userVal) => {
  let formCon = document.getElementsByClassName('form-control');

  var count = formCon.length - 1;
  for (var i = 0; i < formCon.length; i++) {
    if (formCon[i].classList.contains('success')) {
      var sRate = 0 + i;
      console.log(sRate);
      sendData(userVal, sRate, count);
    } else {
      return false;
    }
  }
};

const validate = () => {
  const userVal = user.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const confirm_passwordVal = confirm_password.value.trim();

  // email
  const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf('@');
    if (atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 3) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
  };

  // username validate
  if (userVal === '') {
    setErrorMsg(user, 'username cannot be blank');
  } else if (userVal.length <= 2) {
    setErrorMsg(user, 'Username must contain more than two characters');
  } else {
    setSuccessMsg(user);
  }

  // email validate
  if (emailVal === '') {
    setErrorMsg(email, 'email cannot be blank');
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, 'Not a Valid Email');
  } else {
    setSuccessMsg(email);
  }

  // phone validate
  if (phoneVal === '') {
    setErrorMsg(phone, 'Phone cannot be blank');
  } else if (phoneVal.length !== 10) {
    setErrorMsg(phone, 'Not a Valid Phone Number');
  } else {
    setSuccessMsg(phone);
  }

  // password validate
  if (passwordVal === '') {
    setErrorMsg(password, 'Password cannot be blank');
  } else if (passwordVal.length <= 4) {
    setErrorMsg(password, 'Minimum 6 characters');
  } else {
    setSuccessMsg(password);
  }

  // password validate
  if (confirm_passwordVal === '') {
    setErrorMsg(confirm_password, 'Confirm Your Password');
  } else if (passwordVal !== confirm_passwordVal) {
    setErrorMsg(confirm_password, 'Passwords do not match');
  } else {
    setSuccessMsg(confirm_password);
  }

  successMsg(userVal);
};

function setErrorMsg(input, errormsgs) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = errormsgs;
}

function setSuccessMsg(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
