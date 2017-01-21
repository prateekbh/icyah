import { h, render } from 'preact';
import App from './App';
import './index.css';

render(
  <App user={Object.assign({},window.user)}/>,
  document.getElementById('root')
);

delete window.user;