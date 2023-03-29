import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import GetStart from "./pages/GetStart";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import SetAvailability from "./pages/SetAvailability";
import {ScheduledEvents} from "./components/ScheduledEvents"

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
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
