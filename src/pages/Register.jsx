import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../redux/features/auth/authSlice";
import RegisterForm from "../components/forms/RegisterForm";

const Register = () => {
  const [userame, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userame || !email || !password || !password2) {
      toast.error("Please fill all fields!");
    }

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters!");
    }

    if (password !== password2) {
      toast.error("Passwords do not match!");
    }

    if (userame && email && password && password2) {
      const userData = {
        userame,
        email,
        password,
      };

      dispatch(register(userData));
      navigate("/");
    }
  };

  return (
    <RegisterForm
      handleSubmit={handleSubmit}
      userame={userame}
      setUsername={setUsername}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      password2={password2}
      setPassword2={setPassword2}
    />
  );
};

export default Register;
