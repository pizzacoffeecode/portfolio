// import LogRocket from 'logrocket';

import { Routes, Route } from "react-router-dom";

// import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import About from './pages/About';
import CompScience from './pages/CompScience';
import Frontend from './pages/Frontend';
import Backend from './pages/Backend';
import UberClone from './pages/apps/UberClone';
import Flappy from './pages/apps/Flappy';
import ObserverPattern from './pages/design_patterns/ObserverPattern';
import Astar from './pages/algorithms/Astar';
import './App.css';


// LogRocket.init('az3p9v/portfolio');
// LogRocket.identify(process.env.REACT_APP_USERID, {
//   name: 'frontend',
//   email: 'frontend@outlook.com',

//   // Add your own custom user variables here, ie:
//   subscriptionType: 'free'
// });


function App() {

  return (
    <div className="App">
      {/* <Navbar /> */ }
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="about" element={ <About /> } />
        <Route path="compscience" element={ <CompScience /> } />
        <Route path="frontend" element={ <Frontend /> } />
        <Route path="backend" element={ <Backend /> } />
        <Route path="uberclone" element={ <UberClone /> } />
        <Route path="flappy" element={ <Flappy /> } />
        <Route path="observer" element={ <ObserverPattern /> } />
        <Route path="astar" element={ <Astar /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
