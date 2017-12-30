import { h, render } from 'preact';
import App from '../App';


it('render without crashing', () => {
  render(<App />, document.body)
  const wrapper = <App />;
});
