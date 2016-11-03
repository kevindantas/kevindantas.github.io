import React, { Component } from 'react';
import { Link } from 'react-router';
// import HarlemShakeMusic from './sounds/harlem-shake.ogg';

import './Layout.css';
import NavBar from './components/NavBar'

class App extends Component {

  state = {
    typedPhrase: '',
    extraClasses: ''
  }


  /**
   * Handle key press on component
   * @param  {SyntheticEvent} e
   */
  handleKeyDown = (e) => {
    let key = e.key.toLowerCase();

    let harlemShake = 'do the harlem shake';
    let kojimaCode = [
        'ArrowUp',
        'ArrowUp',
        'ArrowDown',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowLeft',
        'ArrowRight',
        'B',
        'A'
      ].join('').toLowerCase();

    let currentPhrase = this.state.typedPhrase+key;

    if(harlemShake.indexOf(currentPhrase) !== 0 && kojimaCode.indexOf(currentPhrase) !== 0){
      this.setState({ typedPhrase: '' })
      return;
    }

    var newState = {
      typedPhrase: currentPhrase
    };
    

    if (currentPhrase == harlemShake) {
      newState.extraClasses = 'DoTheHarlemShake';
      this.doHarlemShake();
    } else if (currentPhrase == kojimaCode) {
      newState.extraClasses = 'KojimaCode'
    }

    this.setState(newState);
  };


  doHarlemShake()  {

  }


  render() {
    return (
      <div className={`Layout ${this.state.extraClasses}`} tabIndex={1} onKeyDown={this.handleKeyDown}>
        <NavBar />

        { this.props.children }

      </div>
    );
  }
}

export default App;
