import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage({role = 'user'}) {
    const navigate = useNavigate()

    const handleNavigation = () =>{
        if(role == 'user'){
            navigate("/")
            return
        }
        if(role == 'seller'){
            navigate("/seller")
            return
        }
    }
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-white-600 mb-6 text-center">
        Oops! It seems the page you're looking for doesn't exist, might have been moved, or is currently unavailable.
        </p>
        <button 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"  onClick={handleNavigation}
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
