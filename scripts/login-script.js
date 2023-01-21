const form = document.querySelector('form');
const storedData = localStorage.getItem('userData');
const userData = JSON.parse(storedData);

form.addEventListener('submit',(event) => {
  event.preventDefault();
// get form data
const email = form.email.value;
const password = form.password.value;

// find the user with the entered email
const user = userData.find((user) => user.email === email);

// check if the user exists and the entered password matches
if (!user || user.password !== password) {
  document.querySelector('#error-message').innerHTML = 'Invalid email or password';
  return;
}
else {
  // redirect the user to the next page
  window.location.href = 'dashpage.html';
}
})
