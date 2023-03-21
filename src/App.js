import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserNavbar from "./components/navbar/UserNavbar";

function App() {
  return (
    <BrowserRouter>
      <>
      <Routes>
      <Route exact path="/" element={<UserNavbar />} />
      </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;