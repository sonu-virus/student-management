import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../App';
import manageCookie, { setCookie } from '../../utils/manageCookie';

import { seeToast } from '../../utils/toast';

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
      console.log(data);
      setCookie('accessToken', data.access_token);
      setCookie('refreshToken', data.refresh_token);
      console.log(data);
      seeToast('Login successful !');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="flex pt-20  bg-gradient-to-r relative from-sky-500 to-indigo-500  h-96  justify-center  ">
        <form
          className="shadow-lg shadow-gray-700 absolute rounded-lg  p-16 bg-gray-600"
          onSubmit={login}
        >
          <div className="flex justify-center ">
            <div>
              <div className="flex justify-center">
                <img className="h-12 w-12" src="/inflectionORG.png" />
              </div>
              <h1 className="text-2xl text-white  pb-2">Login Page</h1>
            </div>
          </div>
          <div className="grid grid-row gap-2">
            <label className="text-2x text-white">Email</label>
            <input
              className="p-2 bg-white-800"
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <hr class="h-px  my-2 bg-gray-200 " />

            <label className="text-2x text-white">password</label>
            <input
              className="p-2 "
              type="password"
              placeholder="Enter Your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <hr class="h-px  my-2 bg-gray-200 " />

            <button
              className="rounded-md text-white bg-blue-800 hover:bg-blue-700 p-2"
              type="submit"
            >
              Login
            </button>
            <Link
              className="rounded-md bg-blue-800 hover:bg-blue-700 p-2 mt-2 mb-2 text-white flex justify-center"
              to={'/auth/forgot_password'}
            >
              Forgot Password
            </Link>
            <div>
              <Link
                className="flex justify-center text-white"
                to={'/auth/sign_up'}
              >
                Create an account ?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
