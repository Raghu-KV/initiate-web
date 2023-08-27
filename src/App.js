import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
