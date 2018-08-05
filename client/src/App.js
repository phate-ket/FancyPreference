import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Preference from './components/preferences'
import Navbar from './components/navbar'
import Login from './components/login'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      modalShow: true,
      errorShow: false,
      errorMessage: ''
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.signup = this.signup.bind(this)
  }

  login(username) {
    fetch('/users/' + username)
      .then(res => res.json())
      .then(user =>
        this.setState({
          user: user,
          modalShow: false,
          errorShow: false
        })
      );
  }

  signup(username) {
    fetch('/users/new/' + username)
      .then(res => res.json())
      .then(user => {
        if (!user.error) {
          this.setState({
            user: user,
            modalShow: false,
            errorShow: false
          })
        } else {
          this.setState({
            errorShow: true,
            errorMessage: user.error
          })
        }
      });
  }

  logout() {
    this.setState({modalShow: true})
  }

  // componentDidMount() {
  //   fetch('/users/ethan')
  //     .then(res => res.json())
  //     .then(user => this.setState({user}));
  // }

  render() {
    return (
      <div className="container">
        <Login show={this.state.modalShow} error={this.state.errorShow} errorMessage={this.state.errorMessage} login={this.login} signup={this.signup}/>
        <Navbar user={this.state.user} logout={this.logout}/>
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
          <Preference user={this.state.user}/>
        </div>
      </div>
    );
  }
}

export default App;
