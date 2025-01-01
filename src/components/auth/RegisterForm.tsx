import React, { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import supabase from '../../supabaseClient';

const RegisterForm: React.FC = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signUp({
        email: credentials.email,
        password: credentials.password,
      });
      if (error) {
        setError(error.message);
        setSuccess(null);
      } else {
        setError(null);
        setSuccess('Registration successful! Please check your email to confirm your account.');
      }
    } catch (err) {
      setError('An unexpected error occurred.');
      setSuccess(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mt-6 text-3xl font-bold text-gray-900 text-center">
          Register
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          <Input
            label="Email"
            type="email"
            value={credentials.email}
            onChange={e => setCredentials(prev => ({ ...prev, email: e.target.value }))}
          />
          <Input
            label="Password"
            type="password"
            value={credentials.password}
            onChange={e => setCredentials(prev => ({ ...prev, password: e.target.value }))}
          />
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
