const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validateSignUpInput = data => {
   let errors = {};

   let { username, email, password } = data;
   //Converting empty fields to an empty string so that we can use validator function as it works only with strings
   username = !isEmpty(username) ? username : "";
   email = !isEmpty(email) ? email : "";
   password = !isEmpty(password) ? password : "";

   if (Validator.isEmpty(username)) {
      errors.username = "Username is required";
   }

   if (Validator.isEmpty(email)) {
      errors.email = "Email is required";
   } else if (!Validator.isEmail(email)) {
      errors.email = "Enter a valid email address";
   }

   if (Validator.isEmpty(password)) {
      errors.password = "Password is required";
   } else if (!Validator.isLength(password, { min: 8, max: 30 })) {
      errors.password = "Password must be at least 8 characters";
   }

   return {
      errors,
      isValid: isEmpty(errors)
   };
};