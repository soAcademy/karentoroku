import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import GetStart from "./pages/GetStart"
import UserHomepage from "./pages/UserHomepage";
import Aboutus from "./pages/Aboutus";

function App() {

  

  return (
    <BrowserRouter>
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/GetStart" element={<GetStart />} />
        <Route exact path="/UserHomepage" element={<UserHomepage />} />
        <Route exact path="/Aboutus" element={<Aboutus />} />
      </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;