// import logo from "./logo.svg";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Header1 from "./components/Nav";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Header1 />
        <div className="from-top">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
