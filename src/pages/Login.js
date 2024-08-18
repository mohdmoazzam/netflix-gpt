import React, { useState } from "react";
import Header from "../components/Header";
import { NETFLIX_BG } from "../utils/constants";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = checkValidData(formData.email, formData.password);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form data:", formData);
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="relative flex-grow flex flex-col justify-center">
        <div className="absolute inset-0">
          <img
            src={NETFLIX_BG}
            alt="home"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Auth Form */}
        <form
          className="relative mx-auto flex flex-col gap-2 items-center justify-center w-4/12 p-10 bg-black bg-opacity-80 text-white mt-24"
          onSubmit={handleSubmit}
        >
          <h1 className="font-bold text-2xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="p-3 my-2 w-full bg-gray-800 border border-gray-600 rounded-sm focus:outline-none focus:border-white"
            />
          )}
          <div className="w-full">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="p-3 my-2 w-full bg-gray-800 border border-gray-600 rounded-sm focus:outline-none focus:border-white"
            />
            {errors.email && (
              <p className="text-red-500 text-xs px-2">{errors.email}</p>
            )}
          </div>
          <div className="w-full">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="p-3 my-2 w-full bg-gray-800 border border-gray-600 rounded-sm focus:outline-none focus:border-white"
            />
            {errors.password && (
              <p className="text-red-500 text-xs px-2">{errors.password}</p>
            )}
          </div>
          <button
            className="p-2 my-2 bg-red-700 w-full rounded-lg"
            type="submit"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="cursor-pointer hover:underline">Forgot password?</p>
          <p className="py-4">
            {isSignInForm ? (
              <>
                New to Netflix?{" "}
                <span
                  className="font-bold cursor-pointer hover:underline"
                  onClick={toggleSignInForm}
                >
                  Sign up now
                </span>
              </>
            ) : (
              <>
                Already registered?{" "}
                <span
                  className="font-bold cursor-pointer hover:underline"
                  onClick={toggleSignInForm}
                >
                  Sign in now
                </span>
              </>
            )}
          </p>
        </form>
      </div>

      <div className="p-10 bg-black text-white"></div>
    </div>
  );
};

export default Login;
