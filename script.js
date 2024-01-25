
document.getElementById('myForm').addEventListener('submit', function(e){
  e.preventDefault();

  const Username = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if(isEmpty(Username)){
      window.alert('Name cannot be empty');
      return;
  }

  if(!isValidEmail(email)){
      window.alert('Please enter email in valid format');
      return;
  }

  // if(!isValidPassword(password)){
  //     window.alert('password msust be at least 8 characters long,must have at least 1 alphabet and at least one special character');
  //     return;
  // }

  alert('Form sbumitted successfully');
  
});

function isEmpty(str){
  if(str === '' || str === null)
      return true;
}

function isValidEmail(email){
  return email.includes('@') && email.includes('.');
}