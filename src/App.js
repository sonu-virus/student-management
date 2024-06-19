import { Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/auth/SignUp';
import HomePage from './pages/HomePage';
import ResetPassword from './pages/auth/ResetPassword';
import Login from './pages/auth/LogIn';
import ForgotPasswordPage from './pages/auth/ForgotPassword';
import StudentsListPage from './pages/Students/GetAllStudents';
import { createContext, useEffect, useState } from 'react';
import { getCookie, setCookie } from './utils/manageCookie';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddStudent from './pages/Students/AddStudent';
import Batch from './pages/Batch/CreateBatch';
import ProtectedRoute from './utils/ProtectedRoute';
import GetAllBatches from './pages/Batch/GetAllBatches';
import Updatebatch from './pages/Batch/UpdateBatch';

export const AuthContext = createContext();

const App = () => {
  const [isLogin, setIsLogin] = useState(() => {
    const access_token = getCookie('accessToken');

    if (access_token || access_token !== null) {
      return true;
    } else {
      return false;
    }
  });

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
        return;
      } else {
        if (isLogin) {
          window.location.reload();
        }
      }
    };
    const tokenInterval = setInterval(tokenChecker, 1000);

    return () => clearInterval(tokenInterval);
  }, [isLogin]);

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      <ToastContainer />
      <Routes>
        <Route path="/auth/sign_up" element={<SignUpPage />} />
        <Route path="/auth/reset_password/:token" element={<ResetPassword />} />
        <Route path="/auth/forgot_password" element={<ForgotPasswordPage />} />
        <Route path="/auth/login" element={<Login />} />

        {/* ----- Protected Routes ------- */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<StudentsListPage />} />
          <Route path="/students/create" element={<AddStudent />} />
          <Route path="/batches" element={<GetAllBatches />} />
          <Route path="/batches/:id" element={<Updatebatch />} />
        </Route>

        <Route path="/create/batches" element={<Batch />} />
        {/* --------- Not Found Page -------- */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </AuthContext.Provider>
  );
};

export default App;
