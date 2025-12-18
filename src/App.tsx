import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
 
// @ts-ignore: Module './components/Particles' has no type declarations
 
import Drawings from "./components/Drawings";
import Guestbook from "./components/Guestbook";
import Particles from "./components/Particles";
import Projects from "./components/Projects";
import TargetCursor from "./components/TargetCursor.jsx";
import Writings from "./components/Writings";
 
import Portal from "./pages/Portal";
//import TiltedCard from './pages/TiltedCard';

const App = () => {
  return (
    <>
      
      <TargetCursor />
      <Particles />
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Education />
          </>
        } />
        <Route path="/portal" element={<Portal />} />
        <Route path="/writings" element={<Writings />} />
        <Route path="/guestbook" element={<Guestbook />} />
        <Route path="/drawings" element={<Drawings />} />
      </Routes>
      
      <Footer />
    </>
  );
};

export default App;