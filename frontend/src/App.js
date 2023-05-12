// import route and our components
import "./index.css";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import { useState, useEffect } from 'react';
import { aboutLoader, projectsLoader } from './apiCalls';

function App() {
  // set up state for the about and projects data
  const [aboutInfo, setAboutInfo] = useState([]);
  const [projects, setProjects] = useState([]);

  // create useEffect hooks to call the API functions and set the state data
  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const data = await aboutLoader();
        setAboutInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAbout();
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectsLoader();
        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjects();
  }, [])

  // if (!projects || !aboutInfo) {
  //   return <h1>Loading...</h1>
  // }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About about={aboutInfo} />} />
        <Route path="/projects" element={<Projects projects={projects} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
