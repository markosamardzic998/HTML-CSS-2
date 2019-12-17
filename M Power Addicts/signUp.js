function registrate() {
    var form = document.registerform;
    var firstName = form.firstname;
    var lastName = form.lastname;
    var email = form.email;
    var pass1 = form.password1;
    var pass2 = form.password2;
    var message = document.getElementById('message');

    try {
        if (firstName.value == "" || lastName.value  == "" ||
            email.value     == "" || pass1.value     == "" ||
            pass2.value     == "" ){
                throw "Please input all fields!"
            } else {
                var emailCheck = false;
                for (var i = 0; i < email.value.length; i++) {
                    if (email.value.charAt(i) == "@")
                        emailCheck = true;
                }
                if (emailCheck == false) {
                    throw "Email is not valid";
                } else if (pass1.value.length < 6) {
                    throw "Password too short";
                } else if (pass1.value != pass2.value) {
                    throw "Passwords don't match";
                }
            }
        window.location.href = "../index.html"; 
    } catch(error) {
        message.innerHTML = error;
    }
}