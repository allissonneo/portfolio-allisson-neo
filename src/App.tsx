import React from 'react';
import Header from './components/Header';
import SetDown from './components/SetDown';
import Projects from './components/Projects';
import Footer from './components/Footer';
// import './index.css'
function App() {
  return (
    <div className="header-container-pai">
      <div className='header-container-filho'>
        <Header />
      </div>
      <div>
        <SetDown />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    );
  }
      {/* <Hero /> */}
      {/* <About /> */}
      {/* <Footer /> */}

export default App;
