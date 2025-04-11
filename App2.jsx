import React, { useState } from 'react';

import './password.css'

function App2() {
  const [password, setPassword] = useState('');
  const [validations, setValidations] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const validatePassword = (pwd) => {
    setValidations({
      length: pwd.length >= 8,
      uppercase: /[A-Z]/.test(pwd),
      lowercase: /[a-z]/.test(pwd),
      number: /[0-9]/.test(pwd),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
    });
  };

  const handleChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    validatePassword(pwd);
  };

  return (
    <div className="App2">
      <h2>Password Validator</h2>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <ul>
        <li className={validations.length ? 'valid' : 'invalid'}>
          ✅ At least 8 characters
        </li>
        <li className={validations.uppercase ? 'valid' : 'invalid'}>
          ✅ Contains an uppercase letter
        </li>
        <li className={validations.lowercase ? 'valid' : 'invalid'}>
          ✅ Contains a lowercase letter
        </li>
        <li className={validations.number ? 'valid' : 'invalid'}>
          ✅ Contains a number
        </li>
        <li className={validations.specialChar ? 'valid' : 'invalid'}>
          ✅ Contains a special character
        </li>
      </ul>
    </div>
  );
}

export default App2;
