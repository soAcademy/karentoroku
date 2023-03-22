import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import GetStart from "./pages/GetStart"
import CustomerBooking from "./pages/CustomerBooking"
import UserHomepage from "./pages/UserHomepage";
import Pricing from "./pages/Pricing";
import CustomerTimeBook from "./pages/CustomerTimeBook";
import CustomerTimeConfirm  from "./pages/CustomerTimeConfirm";
import CustomerDetail from "./pages/CustomerDetail";
import CustomerFinalConfirm from "./pages/CustomerFinalConfirm";

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
        <Route exact path="/Pricing" element={<Pricing />} />
        <Route exact path="/CustomerTimeBook" element={<CustomerTimeBook />} />
        <Route exact path="/CustomerTimeConfirm" element={<CustomerTimeConfirm />} />
        <Route exact path="/CustomerDetail" element={<CustomerDetail />} />
        <Route exact path="/CustomerFinalConfirm" element={<CustomerFinalConfirm />} />
       </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;