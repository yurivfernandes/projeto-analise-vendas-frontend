import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../common/Input';
import Button from '../common/Button';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaApple } from 'react-icons/fa';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Directly navigate to the welcome page
    navigate('/');
  };

  const handleSocialLogin = async (provider: 'google' | 'facebook' | 'apple') => {
    // Placeholder for social login logic
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mt-6 text-3xl font-bold text-gray-900 text-center">
          Login
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <Input
            label="Email"
            type="email"
            value=""
            onChange={() => {}}
            disabled
          />
          <Input
            label="Password"
            type="password"
            value=""
            onChange={() => {}}
            disabled
          />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        <div className="flex justify-center space-x-4 mt-4">
          <Button onClick={() => handleSocialLogin('google')} variant="secondary" className="flex items-center">
            <FcGoogle className="mr-2" /> Google
          </Button>
          <Button onClick={() => handleSocialLogin('facebook')} variant="secondary" className="flex items-center">
            <FaFacebook className="mr-2 text-blue-600" /> Facebook
          </Button>
          <Button onClick={() => handleSocialLogin('apple')} variant="secondary" className="flex items-center">
            <FaApple className="mr-2 text-black" /> Apple
          </Button>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account? <Link to="/register" className="text-cyan-600 hover:underline">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
