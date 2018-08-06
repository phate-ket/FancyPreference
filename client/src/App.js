import React, {Component} from 'react';
import './App.css';
import Preference from './components/preferences'
import Navbar from './components/navbar'
import Login from './components/login'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

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
      .then(user => {
          this.setState({
            user: user,
            modalShow: false,
            errorShow: false
          });

          cookies.set('user', user)
        }
      );
  }

  signup(username) {
    if(username.trim()) {
      fetch('/users/new/' + username)
        .then(res => res.json())
        .then(user => {
          if (!user.error) {
            this.setState({
              user: user,
              modalShow: false,
              errorShow: false
            });
            cookies.set('user', user)
          } else {
            this.setState({
              errorShow: true,
              errorMessage: user.error
            })
          }
        });
    } else {
      this.setState({
        errorShow: true,
        errorMessage: 'cannot be empty'
      })
    }
  }

  logout() {
    cookies.remove('user');
    this.setState({modalShow: true});
  }

  componentDidMount() {
    let user = cookies.get('user');
    if(user && user.username) {
      this.setState({
        user: user,
        modalShow: false,
        errorShow: false
      })
    }
  }

  render() {
    return (
      <div className="container">
        <Login show={this.state.modalShow} error={this.state.errorShow} errorMessage={this.state.errorMessage} login={this.login} signup={this.signup}/>
        <Navbar user={this.state.user} logout={this.logout}/>
        <div className="content">
          <Preference user={this.state.user} logout={this.logout}/>
        </div>
      </div>
    );
  }
}

export default App;
