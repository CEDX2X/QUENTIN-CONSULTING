import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopNavBar } from "./components/TopNavBar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { CaseStudies } from "./pages/CaseStudies";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <TopNavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
