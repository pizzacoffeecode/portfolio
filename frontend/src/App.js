

import LogRocket from 'logrocket';
import { useEffect, useContext } from 'react';
import { Routes, Route, Link } from "react-router-dom";

import { viewportContext } from './components/resize/Resize'

import Home from './pages/Home';
import About from './pages/About';
import CompScience from './pages/CompScience';
import Frontend from './pages/Frontend';
import Backend from './pages/Backend';

import './App.css';
import bannerImage from "./assets/bg.jpeg";

LogRocket.init('az3p9v/portfolio');
LogRocket.identify(process.env.REACT_APP_USERID, {
  name: 'frontend',
  email: 'frontend@outlook.com',

  // Add your own custom user variables here, ie:
  subscriptionType: 'free'
});


function App(props) {

  const { width, height, media } = useContext(viewportContext);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 0);
    });

    const navigation = document.querySelector('nav')
    document.querySelector('.toggle').onclick = function () {
      this.classList.toggle('active');
      navigation.classList.toggle('active');
    }

    // const widthOutput = document.querySelector('#width');
    // const heightOutput = document.querySelector('#height')
    // function reportWindowSize() {
    //   heightOutput.textContent = window.innerHeight;
    //   widthOutput.textContent = window.innerWidth;
    // }

    // window.onmouseup = reportWindowSize;

    if (width > 901 && onmouseup) {
      this.classList.toggle('active');
      navigation.classList.toggle('active');
    }
  }, []);







  return (
    <div className="App">
      <header>
        <img src={ bannerImage } class="banner" />
        <a href="#" className="logo">Brand.</a>
        <div className="toggle"></div>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/compscience">C-Science</Link></li>
            <li><Link to="/frontend">Frontend</Link></li>
            <li><Link to="/backend">Backend</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="about" element={ <About /> } />
        <Route path="compscience" element={ <CompScience /> } />
        <Route path="frontend" element={ <Frontend /> } />
        <Route path="backend" element={ <Backend /> } />
      </Routes>

    </div>
  );
}

export default App;
