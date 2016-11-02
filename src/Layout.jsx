import React, { Component } from 'react';
import './Layout.css';
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="Layout">
        <NavBar />

        { this.props.children }


        
      </div>
    );
  }
}

export default App;
