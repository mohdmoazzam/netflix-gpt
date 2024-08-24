import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md max-w-md mx-auto mt-32 text-center">
      <h2 className="text-2xl font-bold mb-2">🎉 Welcome!</h2>
      <p className="mb-1">
        We are glad to have you here. Enjoy exploring our website!
      </p>
      <p>Redirecting to the login page in 5 seconds...</p>
    </div>
  );
};

export default WelcomePage;
