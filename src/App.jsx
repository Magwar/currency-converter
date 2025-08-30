import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTAButton from "./components/CTAButton";
import ConverterPage from "./pages/ConverterPage";

function LandingPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-between bg-gray-50 px-4 py-8">
      <Hero />
      <Features />
      <CTAButton />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/converter" element={<ConverterPage />} />
      </Routes>
    </Router>
  );
}

export default App;