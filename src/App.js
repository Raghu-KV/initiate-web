import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
