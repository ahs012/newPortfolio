import React from 'react';
import './App.css';
import NavBar from '../src/components/NavBar/NavBar'
import Footer from '../src/components/Footer/Footer'
import Section from '../src/components/Section/Section'
import Main from '../src/components/Main/Main'

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Main/>
    <Section/>
    {/* <Footer/> */}
    </div>
  );
}

export default App;
