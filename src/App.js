import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import GetStart from "./pages/GetStart";
import SetAvailability from "./pages/SetAvailability";
import UserPassLogin from "./pages/UserPassLogin"
import Pricing from "./pages/Pricing"

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/GetStart" element={<GetStart />} />
          <Route path="/SetAvailability" element={<SetAvailability />} />
          <Route path="/UserPassLogin" element={<UserPassLogin />} />
          <Route part="/Pricing" element={<Pricing />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
