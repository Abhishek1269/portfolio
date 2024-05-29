import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

function App() {

useEffect(() => {
Aos.init();
}, [])

  return (
    <>
    <Navbar/>
    <div className='container'>
      <Home/>
      <Experience/>
      <Skill/>
      <Project/>
      <Contact/>
    </div>
    </>
  );
}

export default App;