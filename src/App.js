import React from 'react';
import logo from './logo.svg';
import './stylesheets/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';
import Counter from './components/Counter';
import CounterClass from './components/CounterClass';

function App() {
  return (
    <div className="layout">
      <Header />
      <Container>
        <strong>Datos y mas cosas</strong>
        <Counter startAt={15}/>
        <CounterClass startAt={23}/>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
