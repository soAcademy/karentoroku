import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import GetStart from "./pages/GetStart";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import SetAvailability from "./pages/SetAvailability";
import UserProfile from "./pages/UserProfile";
import UserGroupSetting from "./pages/UserGroupSetting";
import UserGroupConfirm from "./pages/UserGroupConfirm";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import Aboutus from "./pages/Aboutus";
import UserHomepage from "./pages/UserHomepage";

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
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="UserGroupSetting" element={<UserGroupSetting />} />
          <Route path="UserGroupConfirm" element={<UserGroupConfirm />} />
          <Route path="Pricing" element={<Pricing />} />
          <Route path="Faq" element={<Faq />} />
          <Route path="Aboutus" element={<Aboutus />} />
          <Route path="UserHomepage" element={<UserHomepage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
