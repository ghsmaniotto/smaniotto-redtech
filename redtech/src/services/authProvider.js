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
    return true;
}

function isValidPassword(password) {
    return true;
}
  
export { authProvider };