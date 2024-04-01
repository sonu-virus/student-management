import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/auth/SignUp";
import HomePage from "./pages/HomePage";
import ResetPassword from "./pages/auth/ResetPassword";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/users/signup" element={<SignUpPage />} />
        <Route path="/auth/reset_password/:token" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
