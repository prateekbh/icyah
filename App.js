import Router from 'preact-router';
import { h, Component } from 'preact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Sponsors from './components/Sponsors/Sponsors';
import Awards from './components/Awards/Awards';
import AboutUs from './components/AboutUs/AboutUs';
import AboutIaah from './components/AboutUs/AboutIaah';
import Fees from './components/Fees/Fees';
import Abstract from './components/Abstract/Abstract';
import Cancellations from './components/Registration/Cancellation';

import './type.css';
import './App.css';
export default class App extends Component {
  componentDidMount(){
    this.setState({
      user: this.props.user,
    });
  }
  doneLogin(data){
    this.setState({
      user: data,
    });
  }
  render() {
    return (
      <div id="app">
        <Header/>
        <div className="route">
          <Router>
            <Home path="/" />
            <Sponsors path="/sponsors"/>
            <Awards path="/awards"/>
            <AboutIaah path="/about/iaah"/>
            <AboutUs path="/aboutus"/>
            <Fees path="/fees"/>
            <Abstract user={this.state.user} doneLogin={this.doneLogin.bind(this)} path="/abstract" />
            <Cancellations path='/registration/cancellation' />
          </Router>
        </div>
      </div>
    );
  }
}
