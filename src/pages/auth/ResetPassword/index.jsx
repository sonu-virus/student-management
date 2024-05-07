import React, { useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';

function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const params = useParams();

  const resetPassword = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://api.iot.inflection.org.in/users/reset_password/${params.token}`,
        {
          method: 'PATCH',
          body: JSON.stringify({
            password: password,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
      const data = await res.json();
      console.log(data);
      navigate('/auth/login',{replace:true});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <form className="px-20 py-40 bg-gray-400" onSubmit={resetPassword}>
        <div className="grid grid-row gap-4">
          <label> CreatePassword</label>
          <input
            type="password"
            placeholder="EnterPassword"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">CreatePassword </button>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;
