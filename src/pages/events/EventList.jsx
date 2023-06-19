import { useSelector } from "react-redux";
import SingleEvent from "./SingleEvent";
import Wrapper from "../../assets/wrappers/EventList";

const EventList = () => {
  const { events } = useSelector((state) => state.events);

  return (
    <Wrapper>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <SingleEvent events={events} />
        </table>
      </div>
    </Wrapper>
  );
};
export default EventList;
