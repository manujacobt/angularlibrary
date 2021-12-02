let email = document.getElementById('user');
let pwd = document.getElementById('password');

let error = document.getElementById('error');
let error1 = document.getElementById('error1');

var flag = 0;
var flag1 = 0;
var flag2 = 0;
function mailvalidate() {
  if (email.value.trim() == '') {
    
    flag = 0;
  } else {
   
    flag = 1;
  }
}
function pwdvalidate() {
  if (pwd.value.trim() == '') {
   
    flag1 = 0;
  } else {
    
    flag1 = 1;
  }
}

function validate() {
   if (flag == 1 && flag1 == 1) {
    return true;
  } else {
     alert('Check Username and Password');
     return false;
   }
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
