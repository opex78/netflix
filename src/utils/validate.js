export const checkValidData = (email, password) => {
    // check if email and password are valid
    // regex - regular expression 

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/gm.test(password)


    if (!isEmailValid)
        return "Email ID is not valid";

    if (password && !isPasswordValid)
        return "Password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters";
    else if (!password) {
        return "Please enter password"
    }

}
