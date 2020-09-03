const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validateLoginInput = data => {
    let errors = {};

    let { email, password } = data;

    //Convert empty fields to empty strings for validator
    email = !isEmpty(email) ? email : "";
    password = !isEmpty(password) ? password : "";

    if (Validator.isEmpty(email)) {
        errors.email = "Email is required";
    } else if (!Validator.isEmpty(email)) {
        errors.email = "Enter a valid email address";
    }

    if (Validator.isEmpty(password)) {
        errors.password = "Password is required";
    } else if (!Validator.isLength(password, {min: 8, max: 30})) {
        errors.password = "Password must be at least 8 characters";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};