import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import GetStart from "./pages/GetStart";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import SetAvailability from "./pages/SetAvailability";
import EventType from "./pages/EventType";
import EventTypeP2 from "./pages/EventTypeP2";
import EventConfirm from "./pages/EventConfirm";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/GetStart" element={<GetStart />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route path="*" element={<ErrorPage />} />
          <Route exact path="/GetStart" element={<GetStart />} />
          <Route path="/SetAvailability" element={<SetAvailability />} />
          <Route exact path="/EventType" element={<EventType />} />
          <Route exact path="/EventTypeP2" element={<EventTypeP2 />} />
          <Route exact path="/EventConfirm" element={<EventConfirm />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
