import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Wrapper from "../../assets/wrappers/RegisterForm";

const RegisterForm = ({
  handleSubmit,
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  password2,
  setPassword2,
}) => {
  return (
    <Wrapper>
      <div className="content">
        <section className="heading">
          <h1>
            <FaUser className="icon" /> Register
          </h1>
        </section>
        <section className="form">
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                placeholder="Enter username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="formGroup">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formGroup">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="formGroup">
              <input
                type="password"
                id="password2"
                name="password2"
                value={password2}
                placeholder="Confirm password"
                onChange={(e) => setPassword2(e.target.value)}
              />
              <div className="formGroup">
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </section>
        <p>Already have an account?</p>
        <Link to="/login">Go to login page</Link>
        <p>Or</p>
        <Link to="/">Check out our site</Link>
      </div>
    </Wrapper>
  );
};

export default RegisterForm;
