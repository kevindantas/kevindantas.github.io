import { h, Component } from 'preact';
import Navbar from './Navbar';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div id="App">

        <div className="box">
        <svg xmlns="http://www.w3.org/2000/svg" width="259.9" height="348.9" viewBox="0 0 259.9 348.9" overflow="scroll"><path fill="none" d="M45.6 216v.1l59.6-62.7m11.9-12.4l34.6-36.4M17 246.1v.1l11.6-12.3v-.1"/><path fill="#FFCB09" d="M105.2 153.5l11.9-12.4m141.2 194.3L120.9 146.2l-11.1 11.5-.8.8 135.6 186.7c1.6 2.3 4.2 3.4 6.8 3.4 1.8 0 3.4-.5 4.9-1.6 3.9-2.5 4.7-7.7 2-11.6z"/><path fill="#FFF" d="M151.7 104.7l.3-.3"/><path fill="#F79321" d="M238 14.2c3.1-3.4 3-8.8-.3-11.9C236.1.8 234.1 0 232 0c-2.2 0-4.5.8-6.2 2.6L45.6 191.7l-17 17.8L0 238.4v24.5l28.6-29 17-17.8 59.6-62.7 11.9-12.4 34.6-36.4.3-.3 86-90.1z"/><path fill="#D32027" d="M17 176.1V8.3C17 3.7 13.1 0 8.5 0S0 3.8 0 8.3v221.1l17-17.2v-36.1zM0 271.8v68.5c0 4.7 3.8 8.3 8.5 8.3s8.5-3.8 8.5-8.3v-73.6L0 283.9v-12.1z"/><path fill="#900E11" d="M4.7 267.3L0 271.8v12l17-17.1v-12"/><g><path fill="#F15E24" d="M45.6 182.5V8.3c0-4.7-3.8-8.3-8.5-8.3s-8.5 3.8-8.5 8.3v191.8l12.3-12.9 4.7-4.7zm-17 158c0 4.7 3.8 8.3 8.5 8.3s8.5-3.8 8.5-8.3V237.2l-17 17.8v85.5z"/><path fill="#A03C0F" d="M33.1 238.2l-4.5 4.7v12l17-17.8v-11.9"/></g></svg>
        <h1>Status: WIP</h1>
        </div>
      </div>
    );
  }
}

export default App;
