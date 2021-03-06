import React, {Component} from 'react';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {username: ''};
    this.onUserType = this.onUserType.bind(this);
    this._handleKeyPress = this._handleKeyPress.bind(this)
  }

  onUserType(event) {
    this.setState({username: event.target.value})
  }

  _handleKeyPress (e) {
    if (e.key === 'Enter') {
      this.props.login(this.state.username)
    }
  }

  render() {
    const {show, bg, error, errorMessage} = this.props;
    // Custom styles: set visibility and background color
    const styles = {
      modal: {
        display: (show) ? null : 'none',
        backgroundColor: bg || 'rgba(255, 255, 255, 0.8)',
        zIndex: 1050,
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },

      frontModal: {
        zIndex: 1060,
        margin: 'auto',
        marginTop: '20rem',
        width: '20rem',
        position: 'relative',
      },

      alert: {
        fontSize: '0.9em',
        padding: '0.4em',
        display: (error) ? null : 'none'
      }
    };

    return (
      <div className="modal-wrapper" style={styles.modal}>
        {/* Content */}
        <div className="modal-item" style={styles.frontModal}>
          <div className="card">
            <div className="card-body">
                <h5 className="card-title">Login</h5>
                <input type="text" placeholder="username" className="form-control" id="username"
                       onChange={this.onUserType} onKeyPress={this._handleKeyPress}/>
                <div className="alert alert-danger" role="alert" style={styles.alert}>
                  {errorMessage}
                </div>
                <input className="btn btn-outline-primary w-50" type="button" value="Login"
                onClick={() => this.props.login(this.state.username)}/>
                <input className="btn btn-outline-secondary w-50" type="button" value="Register"
                       onClick={() => this.props.signup(this.state.username)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;