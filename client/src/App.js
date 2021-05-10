import { useState } from "react";
import "./App.css";
import Navbar from "./componenents/Navbar/Navbar";
import Sidebar from "./componenents/Sidebar/Sidebar";
import Hero from "./componenents/Hero/Hero";
import About from "./componenents/About/About";
import Contact from "./componenents/Contact/Contact";
import Skills from "./componenents/Skills/Skills";
import Projects from "./componenents/Projects/Project";
import Footer from "./componenents/Footer/Footer";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
