import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VpnNotice = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md max-w-md mx-auto mt-32 text-center">
      <h2 className="text-2xl font-bold mb-2">⚠️ VPN Required</h2>
      <p className="mb-1">Note: You need to use VPN to access this website.</p>
      <p>Redirecting to the login page in 5 seconds...</p>
    </div>
  );
};

export default VpnNotice;
