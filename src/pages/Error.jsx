import { Link } from "react-router-dom";
import errorImage from "../assets/images/error.png";
import Wrapper from "../assets/wrappers/Error";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={errorImage} alt="not found" />
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">Return</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
