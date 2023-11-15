function validate(){
    var username = document.getElementById("logname");
    var email = document.getElementById("logemail");
    var ageregex = /^\d{1,3}$/;
    var age = document.getElementById("logage");
    var phone = document.getElementById("logphone")

    if(username.value === ""){
        alert("No blank name allowed");
        return false;
    }
    if(email.value === ""){
        alert("Enter the email");
        return false;
    }
    if(!validateEmail(email.value)){
        alert("Invalid email address");
        return false;
    }
    if(age.value === ""){
        alert("Age should not be empty");
        return false;
    }
    if(!ageregex.test(age.value)) {
        alert("Invalid age");
        return false;
    }
    if(phone.value === ""){
        alert("phone should not be empty");
        return false;
    }
    if(!validatePhoneNumber(phone.value)){
        alert("Invalid phone number");
        return false;
    }
    else{
        return true;
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhoneNumber(phoneNumber) {
    var re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return re.test(phoneNumber);
  }
  
  
