import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Header from './components/Header';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Resume from './components/Resume';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foo : 'Ahmad',
      Data : {}
    }
  }
  getData(){
    $.ajax({
      url: 'http://localhost:3000/Data.json',
      dataType: 'json',
      success : function(data){
        this.setState({Data : data})
      }.bind(this),
      error : function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    })
  }

  componentDidMount(){
    this.getData();
  }
  render() {
    console.log(this.state.Data.main);
    return (
      <div className="App">
        <Header data = {this.state.Data.main} />
        <About data = {this.state.Data.main} />
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
