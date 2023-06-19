import { Logo } from "../components";
import event from "../assets/images/event.png";
import Wrapper from "../assets/wrappers/Home";

const Home = () => {
  return (
    <Wrapper>
      <nav>
        <h1>
          <span>Get</span>To<span>Gather</span>
        </h1>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <p>
            I'm baby helvetica pabst coloring book, direct trade XOXO asymmetrical prism kale chips readymade. Semiotics
            chicharrones shoreditch banjo mlkshk. Ascot messenger bag four dollar toast, food truck pitchfork tonx
            letterpress slow-carb lo-fi. Kickstarter gorpcore crucifix aesthetic, pork belly cardigan iPhone kogi direct
            trade jawn selvage selfies retro. Cray slow-carb live-edge tumblr, whatever selvage 8-bit street art chia
            trust fund. Mustache tumeric butcher af, gastropub asymmetrical try-hard mumblecore. Cliche cronut 8-bit,
            freegan ethical slow-carb irony bespoke intelligentsia. Humblebrag tumeric viral, photo booth fingerstache
            schlitz lomo food truck blue bottle af four loko. Praxis quinoa raw denim four loko chicharrones fashion
            axe.
          </p>
        </div>
        <img src={event} alt="event" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Home;
