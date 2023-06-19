import { Route, Routes } from "react-router-dom";
import { EventLayout, Event, EventList, EventsCalendar, UpcomingEvents } from "./index";

const EventRoutes = () => {
  return (
    <Routes>
      <Route element={<EventLayout />}>
        <Route index element={<Event />} />
        <Route path="event-list" element={<EventList />} />
        <Route path="calendar" element={<EventsCalendar />} />
        <Route path="upcoming" element={<UpcomingEvents />} />
      </Route>
    </Routes>
  );
};
export default EventRoutes;
