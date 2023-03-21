import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AppNavbar } from "./components/AppNavbar";
import { SetAvailability } from "./pages/SetAvailability";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/SetAvailability" element={<SetAvailability />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
