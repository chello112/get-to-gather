import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/features/auth/authSlice";
import LoginForm from "../components/forms/LoginForm";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error("Please fill all fields!");
    }

    if (password.length < 6) {
      toast.error("Invalid credentials!");
    }

    if (username && password) {
      const userData = {
        username,
        password,
      };

      dispatch(login(userData));
      navigate("/");
    }
  };

  return (
    <LoginForm
      handleSubmit={handleSubmit}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
    />
  );
};

export default Login;
