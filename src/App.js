import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messenger/Messenger";
import ReqMessage from "./components/reqMessage/ReqMessage";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Login />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
      <Route path="/connect" element={!user ? <Navigate to="/" /> : <ReqMessage />} />
      <Route path="/messenger" element={!user ? <Navigate to="/" /> : <Messenger />} />
      <Route path="/profile/:username" element={!user ? <Navigate to="/" /> : <Profile />} />
    </Routes>
  );
}

export default App;
