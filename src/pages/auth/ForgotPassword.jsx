import React, { useState } from 'react';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        'https://api.iot.inflection.org.in/users/forgot_password',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({
            email,
            reset_password_ui_url: 'http://localhost:3000/auth/reset_password',
          }),
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-1/2 p-5" onSubmit={handleForgotPassword}>
        <div className="flex flex-col gap-2">
          <label>Email</label>
          <input
            required
            type="email"
            placeholder="Enter Email"
            className="px-5 py-2 border outline-none hover:border-blue-500"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
