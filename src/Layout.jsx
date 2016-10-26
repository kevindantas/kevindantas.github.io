import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import logoKevin from './images/LogoKevin.svg';
import './Layout.css';

class App extends Component {
  render() {
    return (
      <div className="Layout">
        <header className="Layout-header">
          <nav>
            <Link href="/">
              <img src={logoKevin} alt="Kevin Dantas logo" className="Layout-logo" />
            </Link>

            <ul className="Layout-menu">
              <li>
                <Link href="#work">Work</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        { this.props.children }


        
      </div>
    );
  }
}

export default App;
