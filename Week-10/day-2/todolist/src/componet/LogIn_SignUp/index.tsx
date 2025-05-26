// src/componet/LogIn_SignUp.tsx
import React, { useEffect, useState } from 'react';

interface Props {
  setIsAuthenticated: (auth: boolean) => void;
}

const AuthForm: React.FC<Props> = ({ setIsAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState<any[]>([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string; general?: string }>({});

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    if (!isLogin && !name) newErrors.name = 'Name is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({})
    setSuccessMessage('');
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (isLogin) {
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        setErrors({})
        setIsAuthenticated(true);
      } else {
        setErrors({ general: 'Invalid email or password' });
      }
    } else {
      const existing = users.find(u => u.email === email);
      if (existing) {
        setErrors({ email: 'Email already exists' });
        return;
      }

      await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      setErrors({})
      setSuccessMessage('Signup successful. Please login.');
      setIsLogin(true);
      setName('');
      setEmail('');
      setPassword('');
    }

    setErrors({});
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">{isLogin ? 'Login' : 'Sign Up'}</h1>

      {successMessage && <p className="text-green-600 text-sm mb-2">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <div>
            <input
              type="text"
              placeholder="Name"
              className={`border w-full px-3 py-2 rounded ${errors.name ? 'border-red-500' : ''}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
        )}

        <div>
          <input
            type="email"
            placeholder="Email"
            className={`border w-full px-3 py-2 rounded ${errors.email ? 'border-red-500' : ''}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            className={`border w-full px-3 py-2 rounded ${errors.password ? 'border-red-500' : ''}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        {errors.general && <p className="text-red-500 text-sm">{errors.general}</p>}

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>

      <p className="mt-4 text-center text-sm">
        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
        <button
          type="button"
          className="text-blue-500 underline"
          onClick={() => {
            setIsLogin(!isLogin);
            setErrors({});
            setSuccessMessage('');
          }}
        >
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;
