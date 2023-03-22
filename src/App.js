import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import GetStart from "./pages/GetStart"
import CustomerBooking from "./pages/CustomerBooking"
import UserHomepage from "./pages/UserHomepage";

function App() {
  return (
    <BrowserRouter>
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/GetStart" element={<GetStart />} />
        <Route exact path="/CustomerBooking" element={<CustomerBooking />} />
        <Route exact path="/UserHomepage" element={<UserHomepage />} />
      </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;