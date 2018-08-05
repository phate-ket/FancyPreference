import React, {Component} from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-light bg-light navbar-expand-lg justify-content-between">
        <div className="container-fluid">
          <div className="navbar-collapse collapse dual-nav w-50 order-1 order-md-0">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit" hidden={true}>Search</button>
            </form>
          </div>
          <a href="/" className="navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25">FANCY</a>
          <div className="navbar-collapse collapse dual-nav w-50 order-2">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item"><a className="nav-link" href="#"><i className="fas fa-shopping-cart"/></a></li>
              <li className="nav-item"><a className="nav-link" href="#"><i className="fas fa-inbox"/></a></li>
              <li className="nav-item"><a className="nav-link" href="#"><i className="fas fa-bolt"/></a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="user-dd" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-user"/><span>  You</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="user-dd">
                  <h6 className="dropdown-header">{((this.props.user && this.props.user.username) ? this.props.user.username:'Anonymous')}</h6>
                  <a className="dropdown-item" href="#">Profile</a>
                  <a className="dropdown-item" href="#">Setting</a>
                  <div className="dropdown-divider"/>
                  <a className="dropdown-item" href="#">Logout</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    )
  }
}

export default Navbar;