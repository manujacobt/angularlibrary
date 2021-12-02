let email = document.getElementById('email');
let pwd = document.getElementById('password');
let pwdrpt = document.getElementById('pwdrpt');
let error = document.getElementById('error');
let inputPhone = document.getElementById('inputPhone');
let inputAddress = document.getElementById('inputAddress');
let inputCity = document.getElementById('inputCity');
let inputPIN = document.getElementById('inputPIN');
let eight = document.getElementById('eight');
let num = document.getElementById('num');
let lc = document.getElementById('lc');
let uc = document.getElementById('uc');
let sp = document.getElementById('sp');

var flag = 0;
var flag1 = 0;
var flag2 = 0;
var flag3 = 0;

function mailvalidate() {
  var regexp =
    /^([A-Za-z0-9]+)([\.\-_A-Za-z0-9])([A-Za-z0-9]+)@([A-Za-z0-9]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/; //here [A-Za-z0-9 and underscore] can be replaced by [\w]
  if (email.value.trim() == '') {
    error0.innerHTML = 'Invalid email';
    error0.style.color = 'red';
    alert('check email');
    flag = 0;
  } else {
    if (regexp.test(email.value)) {
      flag = 1;
      error0.innerHTML = 'Valid email';
      error0.style.color = 'green';
      console.log('flag=' + flag);
      return true;
    } else {
      error0.innerHTML = 'Invalid email';
      error0.style.color = 'red';
      flag = 0;
      console.log('flag=' + flag);
      return false;
    }
  }
}

var regexp1 = /^([A-Za-z0-9!@#$%^&*_]+)$/;

function getPasswordStrength(password) {
  let s = 0;

  if (password.length > 4) {
    s++;
  } else {
  }
  if (password.length > 7 && regexp1.test(pwd.value)) {
    s++;
    eight.style.color = 'green';
  } else {
    s--;
    eight.style.color = 'red';
  }
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) {
    s++;
  }

  if (/[A-Z]/.test(password)) {
    uc.style.color = 'green';
  } else {
    uc.style.color = 'red';
  }
  if (/[a-z]/.test(password)) {
    lc.style.color = 'green';
  } else {
    lc.style.color = 'red';
  }

  if (/[0-9]/.test(password)) {
    s++;
    num.style.color = 'green';
  } else {
    num.style.color = 'red';
  }
  if (/[!@#$%^&*_]/.test(password)) {
    s++;
    sp.style.color = 'green';
  } else {
    sp.style.color = 'red';
  }
  return s;
}
document
  .querySelector('.pw-meter #password')
  .addEventListener('focus', function () {
    document.querySelector('.pw-meter .pw-strength').style.display = 'block';
  });
document
  .querySelector('.pw-meter .pw-display-toggle-btn')
  .addEventListener('click', function () {
    let el = document.querySelector('.pw-meter .pw-display-toggle-btn');
    if (el.classList.contains('active')) {
      document
        .querySelector('.pw-meter #password')
        .setAttribute('type', 'password');
      el.classList.remove('active');
    } else {
      document
        .querySelector('.pw-meter #password')
        .setAttribute('type', 'text');
      el.classList.add('active');
    }
  });

document
  .querySelector('.pw-meter #password')
  .addEventListener('keyup', function (e) {
    let password = e.target.value;
    let strength = getPasswordStrength(password);
    let passwordStrengthSpans = document.querySelectorAll(
      '.pw-meter .pw-strength span'
    );
    strength = Math.max(strength, 1);
    passwordStrengthSpans[1].style.width = strength * 20 + '%';
    if (password.length < 1 || pwd.value.trim() == '') {
      passwordStrengthSpans[0].innerText = 'weak';
      passwordStrengthSpans[0].style.color = 'black';
      passwordStrengthSpans[1].style.background = 'white';
      p1.style.color = 'white';
      sp.style.color = 'white';
      num.style.color = 'white';
      lc.style.color = 'white';
      uc.style.color = 'white';
      eight.style.color = 'white';
    } else if (strength < 2 && regexp1.test(pwd.value)) {
      passwordStrengthSpans[0].innerText = 'poor';
      passwordStrengthSpans[0].style.color = '#111';
      passwordStrengthSpans[1].style.background = '#d13636';
      p1.style.color = 'red';
    } else if (strength >= 2 && strength <= 4 && regexp1.test(pwd.value)) {
      passwordStrengthSpans[0].innerText = 'Medium';
      passwordStrengthSpans[0].style.color = '#111';
      passwordStrengthSpans[1].style.background = 'orange';
      p1.style.color = 'red';
    } else if (regexp1.test(pwd.value)) {
      passwordStrengthSpans[0].innerText = 'Strong';
      passwordStrengthSpans[0].style.color = '#fff';
      passwordStrengthSpans[1].style.background = '#20a820';
      flag1 = 1;
      p1.style.color = 'green';
    } else {
      p1.style.color = 'white';
      sp.style.color = 'white';
      num.style.color = 'white';
      lc.style.color = 'white';
      uc.style.color = 'white';
      eight.style.color = 'white';
      alert(
        'only Alphabets, numbers and special characters like ! @ # $ % ^ & * _ are allowed'
      );
    }
  });

function pwdrptval() {
  if (pwd.value != pwdrpt.value) {
    error.innerHTML = 'passwords does not match';
    error.style.color = 'red';
    flag2 = 0;
    return false;
  } else {
    error.innerHTML = 'passwords matches';
    error.style.color = 'green';
    flag2 = 1;
    return true;
  }
}

function phonenumber() {
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (inputPhone.value.match(phoneno)) {
    error1.innerHTML = 'Valid phone number';
    error1.style.color = 'green';
    flag3 = 1;
    return true;
  } else {
    error1.innerHTML = 'Please check the phone number';
    error1.style.color = 'red';
    flag3 = 0;
    //         alert("message");
    return false;
  }
}

function pin() {
  var pin1 = /^([0-9]{6})$/;
  if (inputPIN.value.length < 7 && inputPIN.value.match(pin1)) {
    error2.innerHTML = 'Valid Pincode';
    error2.style.color = 'green';
    return true;
  } else {
    error2.innerHTML = 'Invalid Pincode';
    error2.style.color = 'red';
    return false;
  }
}

function validate() {
  console.log('flag=' + flag);
  console.log('flag1=' + flag1);
  console.log('flag2=' + flag2);
  console.log('flag3=' + flag3);

  // if (flag == 1 && flag1 == 1) {
    return true;
  // }

  // {
  //   alert('Check Email, Password and Phone number');
  //   return false;
  // }
}

email.addEventListener(
  'contextmenu',
  function (e) {
    alert('Right click not enabled in email');
    e.preventDefault();
  },
  false
);
pwd.addEventListener(
  'contextmenu',
  function (e) {
    alert('Right click not enabled in password');
    e.preventDefault();
  },
  false
);
pwdrpt.addEventListener(
  'contextmenu',
  function (e) {
    alert('Right click not enabled in repeat password');
    e.preventDefault();
  },
  false
);
