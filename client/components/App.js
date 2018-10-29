import React, { Component } from 'react';
// import logo from './logo.png';
// import './App.css';
import Sidebar from './Sidebar'
import Projects from './Projects'
// import Main from './Main'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import OtherElements from './OtherElements'
import Footer from './Footer'
import Skills from './Skills'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <div id="wrapper">
          <div id="main">
            {/* <Main /> */}
            <Projects />
            <Skills />
            <AboutMe />
            <ContactMe />
            {/* <OtherElements /> */}
          </div>
          <Footer />

        </div>

        {/* <!-- Scripts --> */}
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/jquery.scrollex.min.js"></script>
        <script src="assets/js/jquery.scrolly.min.js"></script>
        <script src="assets/js/browser.min.js"></script>
        <script src="assets/js/breakpoints.min.js"></script>
        <script src="assets/js/util.js"></script>
        <script src="assets/js/main.js"></script>
      </div>
    );
  }
}

export default App;
