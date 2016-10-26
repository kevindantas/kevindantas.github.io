import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Layout from './Layout';
import Home from './components/Home'
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
  	<Route path="/" component={Layout}>
  		<IndexRoute component={Home} />
  	</Route>
  </Router>,
  document.getElementById('root')
);
