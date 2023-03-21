import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AppNavbar } from "./components/AppNavbar";
import { SetCustomHours } from "./pages/SetCustomHours";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/setCustomHours" element={<SetCustomHours />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
