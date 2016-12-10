import { h, Component } from 'preact';
import Router from 'preact-router';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Sponsors from './components/Sponsors/Sponsors';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Router>
          <Home path="/" />
          <Sponsors path="/sponsors" />
        </Router>
      </div>
    );
  }
}

export default App;
