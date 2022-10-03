const registrationValidation = (name,value, password) => {
 let error = '';

 if (name === "firstname") {
    if(value.length < 3) {
      error = "Use at least 4 characters!";
    }
 }

 if (name === "lastname") {
  if(value.trim().length < 3) {
    error = "Use at least 4 characters!";
  }
 }

 if (name === "email") {
  if(!value) {
    error = "Use at least 4 characters!";
  } else if (!/\S+@\S+\.\S+/.test(value)) {
    error = "Please enter a valid email address!";
  }
 }

  if(name === "displayname") {

    if(!value) {
      error = "Please enter a display name!";
    } else if (value.length < 4) {
      error = "Use at least 4 characters!";
    }
  }

  if(name === "password") {
    if(!value) {
      error = "Please enter a password!";
    } else if (value.length < 6) {
      error = "Password is too short";
    } else if (!/^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i.test(value)) {
      error = "The password is too easilly guessed.";
    }
  }

  if(name === "confirmPassword") {
    if(value !== password) {
      error = "Passwords do not match!";
    }
  }

  return error;

};

export default registrationValidation;