import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../App";
import manageCookie, { setCookie } from "../../utils/manageCookie";

import { seeToast } from "../../utils/toast";

const Login = () => {
  const { isLogin, setIsLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const login = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(`https://api.iot.inflection.org.in/users/login`, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      console.log(data);
      setCookie("accessToken", data.access_token);
      setCookie("refreshToken", data.refresh_token);
      console.log(data);
      seeToast("Login successful !");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center bg-gray-600 justify-center h-screen">
      <form
        className="border-2  border-blue-400 px-20 py-24 bg-purple-600"
        onSubmit={login}
      >
        <h1 className="text-2xl text-white pb-2">LOGIN PAGE</h1>
        <div className="grid grid-row gap-4">
          <label className="text-2xl">Email</label>
          <input
            className="p-2 bg-white-800"
            type="email"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="text-2xl">password</label>
          <input
            className="p-2 "
            type="password"
            placeholder="Enter Your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="border-2  border-blue-400 p-2" type="submit">
            Login
          </button>
          <Link
            className="border-2  border-blue-400 p-2 flex justify-center"
            to={"/auth/forgot_password"}
          >
            Forgot Password
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
