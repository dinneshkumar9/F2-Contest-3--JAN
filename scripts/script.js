const form = document.querySelector('form');
const userData = [];
let id = 1;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // get form data
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const confirmPassword = form['confirm-password'].value;

  // validation
  if (name.length < 2) {
    document.querySelector('#name-error').innerHTML = 'Name should at least be 2 letter word';
    return;
  } 
  else {
    document.querySelector('#name-error').innerHTML = '';
  }

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email)) {
    document.querySelector('#email-error').innerHTML = 'Invalid email address';
    return;
  } 
  else {
    document.querySelector('#email-error').innerHTML = '';
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password) || password === name || password === email) {
    document.querySelector('#password-error').innerHTML = 'Password should have at least 1 capital letter, 1 small, 1 number and 1 special characters, but password cannot be the same as name or email';
    return;
  } 
  else {
    document.querySelector('#password-error').innerHTML = '';
  }

  if (password !== confirmPassword) {
    document.querySelector('#confirm-password-error').innerHTML = 'Password and confirm password should be the same';
    return;
  }
   else {
    document.querySelector('#confirm-password-error').innerHTML = '';
  }
  const existingUser = userData.find((user) => user.email === email);
  if (existingUser) {
    document.querySelector('#signup-failed').innerHTML = 'Email already registered';
    return;
  }
   else {
    document.querySelector('#signup-failed').innerHTML = '';
   }

  // generate a random token
  const token = Math.random().toString(36).substring(2, 12);
  // check if the token already exists
  const existingToken = userData.find((user) => user.token === token);
  while (existingToken) {
    // generate a new token if it already exists
    token = Math.random().toString(36).substring(2, 12);
  }
  // store data
  userData.push({ id, name, email, password, token });
  id++;
  localStorage.setItem('userData', JSON.stringify(userData));

  if(userData.push({ id, name, email, password, token }))
{
    window.location.href = 'login.html';
}
});

