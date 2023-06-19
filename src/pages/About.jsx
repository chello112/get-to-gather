import { Logo } from "../components";
import event from "../assets/images/event.png";
import Wrapper from "../assets/wrappers/About";

const About = () => {
  return (
    <Wrapper>
      <header>
        <h1>
          Get<span>To</span>Gather
        </h1>
        <Logo />
      </header>
      <div className="page">
        <p>
          Good Morning/Afternoon/Evening, thank you to each and every one of you for being here with us today. We are
          very pleased to be able to welcome those of you that have been with us for a long time now as well as those
          who are new to the community. Today marks our 10th annual event meeting and we are proud to be able to host it
          today here at this wonderful place with all of you.
          <br />
          <br />
          Before we get started, I would like to express my sincere appreciation to all of you who generously helped us
          make this event come together to become a success. We couldn't have done it without you!
          <br />
          <br />
          In today's gathering, I would like to focus on all our new volunteers who have joined us since the beginning
          of our journey. You have all been chosen to be a part of our association due to a mutual passion for
          GetToGather's mission. Your passions help us all to unite and the energy we create is what allows us to
          achieve our individual as well as group goals. We need you as much as you need us and that why we are grateful
          to have you join us here. During the next few months, you will be learning about the different initiatives
          through our planned activities, seminar, and special events where you will be able to join in and get hands on
          experiences. I hope these will help you grow to be more productive and smart.
          <br />
          <br />
          In today's gathering, I would like to focus on all our new volunteers who have joined us since the beginning.
          You have all been chosen to be a part of our association due to a mutual passion for having a good time. Your
          passions help us all to unite and the energy we create is what allows us to achieve our individual as well as
          group goals. We need you as much as you need us and that why we are grateful to have you join us here. During
          the next few months, you will be learning about the different initiatives through our planned activities,
          seminar, and special events where you will be able to join in and get hands on experiences. I hope these will
          help you grow to be more productive and smart.
          <br />
          <br />
          Well, I don't want to take too much of your time, I need to leave some time for event to introduce itself to
          all of you and fill you in on some of our up coming activities/projects. Today will be fun and full of
          learning. So a very warm welcome to each and every one of you, if youhave nay questions, suggestions,
          clarifications, or just want to say “hi”, you can find me in the lobby.
        </p>
        <img src={event} alt="event" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default About;
