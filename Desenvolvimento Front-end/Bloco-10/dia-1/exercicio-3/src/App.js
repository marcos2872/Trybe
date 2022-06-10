// import logo from './logo.svg';
import React from 'react';
import Headle from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';
// import { render } from '@testing-library/react';

class App extends React.Component {
  render() {
    return (
      <div>
        <Headle />
        <Content />
        <Footer />
      </div>
    );
  }
}
export default App;
