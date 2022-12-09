const authProvider = {
    isAuthenticated: false,
    sign_in(userEmail, userPassword) {
        authProvider.isAuthenticated = isUserCredentialsValid(userEmail, userPassword)
    },
    sign_out() {
        authProvider.isAuthenticated = false;
    },
};

function isUserCredentialsValid(userEmail, userPassword) {
    return isValidEmail(userEmail) && isValidPassword(userPassword);
}

function isValidEmail(email="") {
    const regexToValidateEmail = 
        /((\w+\.\w+)+|[\w-_+]|"[\w-_+]+")+@(?![-])((([\w-]+\.)+[\w-]{2,4})|\[(?:[0-9]{1,3}\.){3}[0-9]{1,3}\])/;
    const matchedEmail = email.match(regexToValidateEmail);
    
    return matchedEmail !== null && matchedEmail[0] === email;
}

function isValidPassword(password="") {
    const regexToValidatePassword = 
        /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/;

    const matchedPassword = password.match(regexToValidatePassword);

    return matchedPassword !== null && matchedPassword[0] === password;
}
  
export { authProvider };