import React from 'react';
// import * as assets from '../../assets'



class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="https://s3.amazonaws.com/rugbyscout-two/rslogoonline.svg" width="100" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="/todo">Dashboard</a>
            <a className="nav-item nav-link" href="/welcome/signup">Register</a>
            <a className="nav-item nav-link" href="welcome/login">Login</a>
          </div>

        </div>
      </nav >
    )
  }
}

export default Navigation;