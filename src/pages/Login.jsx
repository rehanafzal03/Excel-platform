import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 flex flex-col">
      <header className="flex justify-between items-center px-6 py-4 shadow bg-white">
        <div className="flex items-center gap-2">
          <img
            src="https://img.icons8.com/color/48/microsoft-excel-2019.png"
            alt="logo"
            className="w-8 h-8"
          />
          <h1 className="text-xl font-bold text-blue-600">
            Excel Analyzing Platform
          </h1>
        </div>
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold shadow hover:bg-blue-700"
        >
          Go to Home
        </button>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 border rounded-md"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-4 py-2 border rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
          >
            Login
          </button>
          <p className="text-sm text-center mt-4 text-gray-600">
            Forgot password?{' '}
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => navigate('/forgot-password')}
            >
              Click here
            </span>
          </p>
          <p className="text-sm text-center mt-2 text-gray-600">
            Don't have an account?{' '}
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </span>
          </p>
        </form>
      </main>
    </div>
  );
};

export default Login;
