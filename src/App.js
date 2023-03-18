import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {
  return (
    <BrowserRouter>
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/GetStart" element={<GetStart />} />
      </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
