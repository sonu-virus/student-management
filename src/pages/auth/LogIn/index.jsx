import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../App';
import manageCookie, { setCookie } from '../../utils/manageCookie'


const Login = () => {
  const { isLogin, setIsLogin } = useContext(AuthContext);
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const login = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(`https://api.iot.inflection.org.in/users/login`, {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await res.json();
    
      setCookie("accessToken",data.access_token)
      setCookie("refreshToken",data.refresh_token)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="px-20 py-32 bg-gray-400" onSubmit={login}>
        <div className="grid grid-row gap-4">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>password</label>
          <input
            type="password"
            placeholder="Enter Your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to={'/auth/forgot_password'}>Forgot Password</Link>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
