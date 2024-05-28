import React from 'react';
import { useState } from 'react';
import { seeToast } from '../../utils/toast';
import { Link } from 'react-router-dom';

// import axios from "axios";

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const signup = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        'https://api.iot.inflection.org.in/users/signup',
        {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            full_name: name,
            gender: 'male',
            reset_password_ui_url: 'http://localhost:3000/auth/reset_password',
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
      const data = await res.json();
      console.log(data.message);
      seeToast(data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="flex pt-20  bg-gradient-to-r relative from-sky-500 to-indigo-500  h-96  justify-center  ">
        <form
          className="shadow-lg shadow-gray-700 absolute rounded-lg  p-16 bg-gray-600"
          onSubmit={signup}
        >
          <div className="text-2xl text-white  justify-center flex pb-12 ">
            <div>
              <div className="flex justify-center">
                <img className="h-12 w-12" src="/inflectionORG.png" />
              </div>
              <p>Create An Account</p>
            </div>
          </div>
          <div className="grid grid-row gap-2">
            <label className="text-2x text-white ">Your Email</label>
            <div>
              <input
                className="p-2"
                required
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <hr class="h-px  my-2 bg-gray-200 " />
            </div>
          </div>
          <div className="grid gap-2 grid-row">
            <label className="text-2x text-white  pt-2">Enter Your Name</label>
            <div>
              <input
                className="p-2"
                required
                type="text"
                placeholder="Enter Full Name"
                onChange={(e) => setName(e.target.value)}
              />
              <hr class="h-px  my-2 bg-gray-200 " />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className=" rounded-md pt-2 pb-2 pl-8 pr-8 mt-8 bg-blue-600 text-white hover:bg-blue-700 "
              type="submit"
            >
              Create An Account
            </button>
          </div>
          <div className="text-white mt-4 flex justify-center ">
            <Link to={'/auth/login'}>Already have an account ?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
// lallasonu36@gmail.com
