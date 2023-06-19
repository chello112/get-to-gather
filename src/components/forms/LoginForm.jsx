import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Wrapper from "../../assets/wrappers/LoginForm";

const LoginForm = ({ handleSubmit, username, setUsername, password, setPassword }) => {
  return (
    <Wrapper>
      <div className="content">
        <section className="heading">
          <h1>
            <FaUser className="icon" /> Login
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
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="formGroup">
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </section>
        <p>You don't have an account yet?</p>
        <Link to="/register">Go to register page</Link>
        <p>Or</p>
        <Link to="/">Check out our site</Link>
      </div>
    </Wrapper>
  );
};

export default LoginForm;
