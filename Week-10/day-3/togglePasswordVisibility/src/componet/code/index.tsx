import  { useState } from 'react';

const TogglePasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div>
      <input
      className='border-4 border-indigo-500'
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter your password"
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <button onClick={toggleVisibility}>
        {showPassword ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

export default TogglePasswordInput;


 
