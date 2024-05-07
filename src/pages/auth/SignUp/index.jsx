import React from "react";
import { useState } from "react";
// import axios from "axios";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const signup = async (event) => {
    event.preventDefault()
    try {

      const res = await fetch(
        "https://api.iot.inflection.org.in/users/signup",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            full_name: name,
            gender:'male',
            reset_password_ui_url:'http://localhost:3000/auth/reset_password'
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await res.json();
      console.log(data);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="flex bg-gray-600 h-screen justify-center p-4">
        <form className=" border-2   p-20 bg-purple-600" onSubmit={signup}>
          <div className="text-2xl text-white pb-12">SIGNUP PAGE</div>
          <div className="grid grid-row gap-4">
            <label className="text-2xl ">Email</label>
            <div className=" border-2  border-blue-400 "> 
              <input
              className="p-2"
                required
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="grid gap-4 grid-row">
            <label className="text-2xl  pt-2">Name</label>
            <div  className=" border-2  border-blue-400 ">
              <input className="p-2"
                required
                type="text"
                placeholder="Enter Full Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button className=" rounded-md p-2 mt-8 border-2 border-blue-400" type="submit">Create Account</button>
          </div>
        </form>
      </div>
      <div>

      </div>
    </div>
  );
};

export default SignUpPage;

