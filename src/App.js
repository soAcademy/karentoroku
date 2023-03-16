import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AppNavbar } from "./components/AppNavbar";

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
