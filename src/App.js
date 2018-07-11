import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Resume from './components/Resume';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
        <Resume/>
        <Portfolio />
        <Testimonials/>
        <Contact/>
        
        <Footer/>
      </div>
    );
  }
}

export default App;
