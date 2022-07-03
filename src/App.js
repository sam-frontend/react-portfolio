import "./App.css";
import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NoPage from "./pages/NoPage"
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
