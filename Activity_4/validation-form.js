const USERNAME_MIN_LENGTH = 5
const EMAIL_MIN_LENGTH = 5
const PASSWORD_MIN_LENGTH = 9

let username ='';
let userEmail='';
let password='';
let confirmedPassword='';
let favouriteColor='';
let family='';

const handleChangeUsername = (event) => {
  username = event.target.value;
}

const handleChangeEmail = (event) => {
  userEmail = event.target.value;
}

const handleChangePassword = (event) => {
  password = event.target.value;
}

const handleChangeConfirmedPassword = (event) => {
  confirmedPassword = event.target.value;
}

const handleChangeFavouriteColor = (event) => {
  favouriteColor = event.target.value;
}

const handleChangeFamily = (event) => {
  family = event.target.value;
}

const usernameField = document.getElementById('username-input');
const emailField = document.getElementById('email-input');
const passwordField = document.getElementById('password-input');
const confirmedPasswordField = document.getElementById('confirm-password-input');
const favouriteColorField = document.getElementById('favourite-color-input');
const familyField = document.getElementById('family-select');

usernameField.addEventListener('change', handleChangeUsername);
emailField.addEventListener('change', handleChangeEmail);
passwordField.addEventListener('change', handleChangePassword);
confirmedPasswordField.addEventListener('change', handleChangeConfirmedPassword);
favouriteColorField.addEventListener('change', handleChangeFavouriteColor);
familyField.addEventListener('change', handleChangeFamily);

const handleError=(errorField,hasError)=>{
  if(!hasError){
    errorField.classList.remove('error-message')
    errorField.classList.add('error-message--hidden')
  } else {
    errorField.classList.add('error-message')
    errorField.classList.remove('error-message--hidden')
  }
}

const handleSubmit = () => {
  event.preventDefault();

  const hasUsernameError = username.length < USERNAME_MIN_LENGTH;
  const hasEmailError = userEmail.length < EMAIL_MIN_LENGTH || !userEmail.includes('@');
  const hasPasswordError = password.length < PASSWORD_MIN_LENGTH || !password.split('').some(char => char === char.toUpperCase()) || !password.split('').some(char => char === char.toLowerCase());
  const hasConfirmedPasswordError = password !== confirmedPassword;
  const hasFavouriteColorError = !favouriteColor;
  const hasFamilyError = !family;

  const usernameErrorField = document.getElementById('username-error')
  const emailErrorField = document.getElementById('email-error')
  const passwordErrorField = document.getElementById('password-error')
  const confirmedPasswordErrorField = document.getElementById('confirm-password-error')
  const favouriteColorErrorField = document.getElementById('favourite-color-error')
  const familyErrorField = document.getElementById('family-error')

  handleError(usernameErrorField,hasUsernameError)
  handleError(emailErrorField,hasEmailError)
  handleError(passwordErrorField,hasPasswordError)
  handleError(confirmedPasswordErrorField,hasConfirmedPasswordError)
  handleError(favouriteColorErrorField,hasFavouriteColorError)
  handleError(familyErrorField,hasFamilyError)
}

const validationForm = document.getElementById('validation-form');
validationForm.addEventListener('submit', handleSubmit);