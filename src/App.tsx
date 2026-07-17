// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { default as Cookie } from "./pages/Cookie";
import { default as Privacy } from "./pages/Privacy";
import { default as Checkout } from "./pages/Checkout";
import Prevendita from "./pages/Prevendita";
import PrevenditaAcquisto from "./pages/PrevenditaAcquisto";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cookie" element={<Cookie />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/prevendita" element={<Prevendita />} />
      <Route path="/prevendita-acquisto" element={<PrevenditaAcquisto />} />
      {/* qui aggiungerai le altre due pagine, es:
          <Route path="/faq" element={<Faq />} />
          <Route path="/chi-siamo" element={<About />} /> */}
    </Routes>
  );
}

export default App;
