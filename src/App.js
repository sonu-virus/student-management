import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/auth/SignUp";
import HomePage from "./pages/HomePage";
import ResetPassword from "./pages/auth/ResetPassword";
import Login from "./pages/auth/LogIn";
import ForgotPasswordPage from "./pages/auth/ForgotPassword";
import StudentsListPage from "./pages/students";
import { createContext, useEffect, useState } from "react";
import { getCookie, setCookie } from "./pages/utils/manageCookie";

export const AuthContext = createContext();

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  const renewToken = async (refreshToken) => {
    try {
      const res = await fetch(
        `https://api.iot.inflection.org.in/users/renew_token`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );
      const data = await res.json();
      setCookie("accessToken", data.access_token);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const tokenChecker = () => {
      const accessToken = getCookie("accessToken");
      const refreshToken = getCookie("refreshToken");
      console.log("running");
      if (accessToken || accessToken !== null) {
        return;
      }
      if (refreshToken && refreshToken !== null) {
        renewToken(refreshToken);
      }
    };
    const tokenInterval = setInterval(tokenChecker, 1000);
    return () => clearInterval(tokenInterval);
  }, []);

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/auth/sign_up" element={<SignUpPage />} />
        <Route path="/auth/reset_password/:token" element={<ResetPassword />} />
        <Route path="/auth/forgot_password" element={<ForgotPasswordPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/students" element={<StudentsListPage />} />
      </Routes>
    </AuthContext.Provider>
  );
};

export default App;
