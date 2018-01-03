import { h, render } from 'preact';
import App from './App';
import './styles/global';

const renderApp = (Component) => {
  render(<Component />, document.body);
};

renderApp(App);

if (module.hot) {
  module.hot.accept();

  // Remove HMR side effects (duplicate App)
  module.hot.dispose(() => {
    document.querySelector('#App').remove();
  });
}
