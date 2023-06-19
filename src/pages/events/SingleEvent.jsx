const SingleEvent = ({ events }) => {
  return (
    <tbody>
      {events.map((event) => (
        <tr key={event.id}>
          <td>{event.event_name}</td>
          <td>{event.event_date}</td>
          <td>{event.event_time}</td>
          <td>{event.location_state}</td>
          <td>{event.location_city}</td>
          <td>{<button>Delete</button>}</td>
        </tr>
      ))}
    </tbody>
  );
};
export default SingleEvent;
