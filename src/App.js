import { h, Component } from 'preact';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div id="App">
        <h1>Yolu!!!</h1>
        <Navbar/>
      </div>
    );
  }
}

export default App;
