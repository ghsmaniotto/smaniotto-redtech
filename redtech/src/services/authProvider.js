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

function isValidEmail(email) {
    const regexToValidateEmail = 
        /^(([\w-_+.])|("[\w-_+.]+"))+@(([\w-]+\.)+[\w-]{2,4}|\[(?:[0-9]{1,3}\.){3}[0-9]{1,3}\])$/;
    
    return RegExp(regexToValidateEmail).test(email);
}

function isValidPassword(password) {
    const regexToValidatePassword = 
        /^(?=.+[a-z])(?=.+[A-Z])(?=.+\d)(?=.+[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return RegExp(regexToValidatePassword).test(password);
}
  
export { authProvider };