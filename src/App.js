import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, News, Contact, Error, Register, Login } from "./pages";
import { EventRoutes } from "./pages/events";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events/*" element={<EventRoutes />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
