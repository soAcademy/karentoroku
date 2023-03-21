import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserHome from "./pages/UserHome"

function App() {
  return (
    <BrowserRouter>
      <>
      <Routes>
      <Route exact path="/" element={<UserHome />} />
      </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;