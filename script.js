function isEmpty(str){
  if(str === '' || str === null)
      return true;
}

function isValidEmail(email){
  return email.includes('@') && email.includes('.');
}

const username = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById("myForm");

email.addEventListener("focus",function(e){

  if(username.value.length == 0){
    window.alert("username cannot be empty!!!");
    email.blur();
  }

},true);

form.addEventListener('submit', function(e){
  e.preventDefault();

  if(isEmpty(username.value)){
      window.alert('Name cannot be empty');
      return;
  }

  if(!isValidEmail(email.value)){
      window.alert('Please enter email in valid format');
      return;
  }

  alert('Form sumitted successfully');
  
});

