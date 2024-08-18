export const checkValidData = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const errors = {};

  if (!emailRegex.test(email)) errors.email = "Email is not valid";
  if (!passwordRegex.test(password)) errors.password = "Password is not valid";
  if (email.length === 0) errors.email = "Email is required";
  if (password.length === 0) errors.password = "Password is required";

  return errors;
};
