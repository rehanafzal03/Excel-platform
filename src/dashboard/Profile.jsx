import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const isLoggedIn = false; // 🔐 Replace with real auth logic

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-purple-100 flex flex-col">
      
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow bg-white">
        <div className="flex items-center gap-2">
          <img
            src="https://img.icons8.com/color/48/microsoft-excel-2019.png"
            alt="logo"
            className="w-8 h-8"
          />
          <h1 className="text-xl font-bold text-blue-600">Excel Analyzing Platform</h1>
        </div>
        <div className="space-x-4">
          <button
            onClick={() => navigate('/')}
            className="text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Home
          </button>
          {!isLoggedIn && (
            <>
              <button
                onClick={() => navigate('/login')}
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md text-sm font-semibold shadow"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-grow flex items-center justify-center p-6">
        {isLoggedIn ? (
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg text-center">
            <h2 className="text-3xl font-bold text-purple-700 mb-4">Welcome, User!</h2>
            <p className="text-gray-600 mb-6">Here’s your profile information:</p>
            <div className="text-left space-y-2">
              <p><strong>Name:</strong> Adil</p>
              <p><strong>Email:</strong> adil@example.com</p>
              <p><strong>Plan:</strong> Premium</p>
              {/* Add more profile info if needed */}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Access Denied</h2>
            <p className="text-gray-600 mb-6">You need to be logged in to view your profile or Regiter the new user</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => navigate('/login')}
                className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 shadow"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="px-5 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 shadow"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-sm text-center py-6 text-sm text-gray-500">
        <p className="text-gray-600">© 2025 Excel Analyzing Platform. All rights reserved.</p>
        <div className="mt-2 space-x-6 text-blue-600 font-medium">
          <button onClick={() => navigate('/about')} className="hover:underline">About</button>
          <button onClick={() => navigate('/contact')} className="hover:underline">Contact</button>
          <button onClick={() => navigate('/privacy')} className="hover:underline">Privacy</button>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
