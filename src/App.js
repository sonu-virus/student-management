import { Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/auth/SignUp';
import HomePage from './pages/HomePage';
import ResetPassword from './pages/auth/ResetPassword';
import Login from './pages/auth/LogIn';
import ForgotPasswordPage from './pages/auth/ForgotPassword';
import StudentsListPage from './pages/students';
import { createContext, useState } from 'react';

export const AuthContext = createContext();

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

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
