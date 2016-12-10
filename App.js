import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Sponsors from './components/Sponsors/Sponsors';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Header/>
        <div className="route">
          <Router onChange={this.onChange}>
            <Home path="/" />
            <Sponsors path="/sponsors/" />
          </Router>
        </div>
      </div>
    );
  }
}
