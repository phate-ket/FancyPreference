import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Preference from './components/preferences'
import Navbar from './components/navbar'

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }

  render() {
    return (
      <div className="container">
        <Navbar/>
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo"/>*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        {/*</header>*/}
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*{this.state.users.map(user =>*/}
          {/*<div key={user.id}>{user.username}</div>*/}
        {/*)}*/}
        <div className="content">
          <Preference/>
        </div>
      </div>
    );
  }
}

export default App;
