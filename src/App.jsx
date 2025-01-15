import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFound/notfound";
import LoginPage from "./pages/Login/login";
import SignupPage from "./pages/Signup/signup";
import HomePage from "./pages/Home/home";
import ReciverHome from "./pages/Reciver/reciverHome";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext)
  console.log("User In The App",user)
  return (
    <>
      <Routes>
        <Route path="/" element={user?< HomePage />:<Navigate to={"/login"}/>} />
        <Route path="/login" element={user ? <Navigate to={"/"} /> : <LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/receiver" element={<ReciverHome />} />
        <Route path="*" element={< NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
