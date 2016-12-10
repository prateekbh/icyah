import Router from 'preact-router';
import { h, Component } from 'preact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Sponsors from './components/Sponsors/Sponsors';
import './App.css';
export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Header/>
        <div className="route">
          <Router>
            <Home path="/" />
            <Sponsors path="/sponsors"/>
          </Router>
        </div>
      </div>
    );
  }
}
