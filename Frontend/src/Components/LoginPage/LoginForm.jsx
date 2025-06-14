import { useState } from 'react';
import axios from 'axios';

import logo from '../../assets/logo.jpg'; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom';

function LoginForm({ switchToRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (username === "admin" && password === "admin") {
      navigate("/Dashboard");
    } else {
      try {
        const response = await axios.post(
          'http://localhost:8080/auth/login',
          {
            username: username,
            password: password
          },
          {
            withCredentials: true
          }
        );
  
        if (response.status === 200 ) {
          navigate("/");
        } else {
          setShowError(true);
        }
      } catch (error) {
        console.error('Login failed:', error);
        setShowError(true);
      }
    }
  };
  

  const handleForgetPassword=()=>{
    navigate("/ResetPassword")
  }

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-6">
      <img src={logo} alt="Logo" className="mx-auto h-20 mb-2 logo" />
        <h1 className="text-2xl font-bold text-gray-600">QUICK FUNDS</h1>
      </div>

      <h2 className="text-xl text-center text-gray-700 mb-6">Sign in to your account</h2>

      {showError && (
        <div className="bg-red-100 text-red-600 p-3 rounded-md mb-4 text-sm">
          Incorrect username or password. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600 mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex justify-end mb-2">
          <p className="text-sm text-gray-600 hover:underline" onClick={handleForgetPassword}>
            Forgot password?
          </p>
        </div>

        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="remember"
            className="mr-2"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="remember" className="text-sm text-gray-600">
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-black text-white font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Sign In
        </button>
      </form>

      <p className="text-center mt-6 text-sm text-gray-600">
        Don't have an account?{' '}
        <button onClick={switchToRegister} className="text-gray-600 font-medium hover:underline">
          Register now
        </button>
      </p>
    </div>
  );
}
export default LoginForm;