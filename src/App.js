import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/auth/SignUp";
import HomePage from "./pages/HomePage";
import ResetPassword from "./pages/auth/ResetPassword";
import Login from "./pages/auth/LogIn";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/users/signup" element={<SignUpPage />} />
        <Route path="/auth/reset_password/:token" element={<ResetPassword />} />
        <Route path="/users/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
