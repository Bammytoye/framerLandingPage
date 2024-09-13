import React, { useState } from 'react';
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import SignUp from "./page/signUp";

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const closeModal = () => {
    setShowSignUp(false);
  };

  return (
    <div className='h-screen bg-gradient-to-b from-gray-100 to-white bg-gradient-hard'>
      <Navbar onSignUpClick={handleSignUpClick} />
      <Hero />
      
      {/* Conditionally render the SignUp modal */}
      {showSignUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative w-full max-w-md">
            
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
              onClick={closeModal}
            >
              &times; {/* This is a cross (×) symbol */}
            </button>

            <SignUp />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
