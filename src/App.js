import { Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/auth/SignUp';
import HomePage from './pages/HomePage';
import ResetPassword from './pages/auth/ResetPassword';
import Login from './pages/auth/LogIn';
import ForgotPasswordPage from './pages/auth/ForgotPassword';
import StudentsListPage from './pages/Students/GetAllStudents';
import { createContext, useEffect, useState } from 'react';
import { getCookie, setCookie } from './pages/utils/manageCookie';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddStudent from './pages/Students/AddStudent';
import Batch from './pages/Batch/CreateBatch';
import StAdmission from './pages/Students/StAdmission';

export const AuthContext = createContext();

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  const renewToken = async (refreshToken) => {
    try {
      const res = await fetch(
        `https://api.iot.inflection.org.in/users/renew_token`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );
      const data = await res.json();
      setCookie('accessToken', data.access_token);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const tokenChecker = () => {
      const accessToken = getCookie('accessToken');
      const refreshToken = getCookie('refreshToken');

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
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/sign_up" element={<SignUpPage />} />
        <Route path="/auth/reset_password/:token" element={<ResetPassword />} />
        <Route path="/auth/forgot_password" element={<ForgotPasswordPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/students" element={<StudentsListPage />} />
        <Route path="/students/create" element={<AddStudent />} />
        <Route path="/students/admission/:id" element={<StAdmission />} />

        <Route path="/sms/batches" element={<Batch />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </AuthContext.Provider>
  );
};

export default App;
